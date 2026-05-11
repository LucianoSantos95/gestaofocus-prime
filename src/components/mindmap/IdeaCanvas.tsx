import { useCallback, useEffect, useState, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  NodeChange,
  Handle,
  Position,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus, Tag, Loader2, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

interface Ticket {
  id: string;
  name: string;
  color: string;
}

interface NodeData {
  title: string;
  content: string | null;
  ticket: Ticket | null;
  onEdit: () => void;
}

const TICKET_COLORS = [
  "#1E40AF", "#7C3AED", "#DB2777", "#DC2626",
  "#EA580C", "#CA8A04", "#16A34A", "#0891B2",
];

function IdeaNode({ data }: { data: NodeData }) {
  return (
    <div
      onClick={data.onEdit}
      className="group cursor-pointer"
    >
      <Handle type="target" position={Position.Top} className="!bg-primary !w-2 !h-2" />
      <div
        className="rounded-full bg-background-elevated border-2 shadow-lg backdrop-blur-sm flex items-center justify-center text-center p-3 hover:scale-110 transition-transform"
        style={{
          width: 110,
          height: 110,
          borderColor: data.ticket?.color || "hsl(var(--primary))",
          boxShadow: `0 0 24px ${data.ticket?.color || "hsl(var(--primary))"}40`,
        }}
      >
        <div className="text-xs font-medium text-foreground line-clamp-3 leading-tight">
          {data.title}
        </div>
      </div>
      {data.ticket && (
        <div
          className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white shadow"
          style={{ background: data.ticket.color }}
        >
          {data.ticket.name}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-2 !h-2" />
    </div>
  );
}

const nodeTypes = { idea: IdeaNode };

export default function IdeaCanvas() {
  const [userId, setUserId] = useState<string | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [nodes, setNodes, onNodesChangeBase] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [loading, setLoading] = useState(true);

  const [editingNode, setEditingNode] = useState<{ id?: string; title: string; content: string; ticket_id: string | null } | null>(null);
  const [showTicketDialog, setShowTicketDialog] = useState(false);
  const [newTicket, setNewTicket] = useState({ name: "", color: TICKET_COLORS[0] });

  // Load data
  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);

      const [ticketsRes, nodesRes, edgesRes] = await Promise.all([
        supabase.from("mind_map_tickets").select("*").eq("user_id", user.id).order("created_at"),
        supabase.from("mind_map_nodes").select("*").eq("user_id", user.id),
        supabase.from("mind_map_edges").select("*").eq("user_id", user.id),
      ]);

      const loadedTickets = (ticketsRes.data || []) as Ticket[];
      setTickets(loadedTickets);

      const ticketMap = new Map(loadedTickets.map((t) => [t.id, t]));

      const flowNodes: Node[] = (nodesRes.data || []).map((n: any) => ({
        id: n.id,
        type: "idea",
        position: { x: n.position_x, y: n.position_y },
        data: {
          title: n.title,
          content: n.content,
          ticket: n.ticket_id ? ticketMap.get(n.ticket_id) || null : null,
          onEdit: () => setEditingNode({
            id: n.id,
            title: n.title,
            content: n.content || "",
            ticket_id: n.ticket_id,
          }),
        },
      }));

      const flowEdges: Edge[] = (edgesRes.data || []).map((e: any) => ({
        id: e.id,
        source: e.source_node_id,
        target: e.target_node_id,
        animated: true,
        style: { stroke: "hsl(var(--primary))", strokeWidth: 2 },
      }));

      setNodes(flowNodes);
      setEdges(flowEdges);
      setLoading(false);
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNodesChange = useCallback(
    async (changes: NodeChange[]) => {
      onNodesChangeBase(changes);
      // Persist position changes when drag stops
      for (const c of changes) {
        if (c.type === "position" && !c.dragging && c.position) {
          await supabase
            .from("mind_map_nodes")
            .update({ position_x: c.position.x, position_y: c.position.y })
            .eq("id", c.id);
        }
      }
    },
    [onNodesChangeBase]
  );

  const onConnect = useCallback(
    async (conn: Connection) => {
      if (!userId || !conn.source || !conn.target) return;
      const { data, error } = await supabase
        .from("mind_map_edges")
        .insert({
          user_id: userId,
          source_node_id: conn.source,
          target_node_id: conn.target,
        })
        .select()
        .single();
      if (error) { toast.error("Erro ao conectar"); return; }
      setEdges((eds) => addEdge({
        id: data.id,
        source: conn.source!,
        target: conn.target!,
        animated: true,
        style: { stroke: "hsl(var(--primary))", strokeWidth: 2 },
      }, eds));
    },
    [userId, setEdges]
  );

  const handleSaveNode = async () => {
    if (!editingNode || !userId) return;
    if (!editingNode.title.trim()) { toast.error("Título obrigatório"); return; }

    if (editingNode.id) {
      const { error } = await supabase
        .from("mind_map_nodes")
        .update({
          title: editingNode.title,
          content: editingNode.content,
          ticket_id: editingNode.ticket_id,
        })
        .eq("id", editingNode.id);
      if (error) { toast.error("Erro ao salvar"); return; }
      const ticket = tickets.find(t => t.id === editingNode.ticket_id) || null;
      setNodes((nds) => nds.map(n => n.id === editingNode.id ? {
        ...n,
        data: { ...n.data, title: editingNode.title, content: editingNode.content, ticket }
      } : n));
    } else {
      const { data, error } = await supabase
        .from("mind_map_nodes")
        .insert({
          user_id: userId,
          title: editingNode.title,
          content: editingNode.content,
          ticket_id: editingNode.ticket_id,
          position_x: Math.random() * 400,
          position_y: Math.random() * 300,
        })
        .select()
        .single();
      if (error) { toast.error("Erro ao criar"); return; }
      const ticket = tickets.find(t => t.id === editingNode.ticket_id) || null;
      setNodes((nds) => [...nds, {
        id: data.id,
        type: "idea",
        position: { x: data.position_x, y: data.position_y },
        data: {
          title: data.title,
          content: data.content,
          ticket,
          onEdit: () => setEditingNode({
            id: data.id,
            title: data.title,
            content: data.content || "",
            ticket_id: data.ticket_id,
          }),
        },
      }]);
    }
    setEditingNode(null);
    toast.success("Ideia salva");
  };

  const handleDeleteNode = async () => {
    if (!editingNode?.id) return;
    await supabase.from("mind_map_nodes").delete().eq("id", editingNode.id);
    setNodes((nds) => nds.filter(n => n.id !== editingNode.id));
    setEditingNode(null);
    toast.success("Ideia excluída");
  };

  const handleCreateTicket = async () => {
    if (!userId || !newTicket.name.trim()) return;
    const { data, error } = await supabase
      .from("mind_map_tickets")
      .insert({ user_id: userId, name: newTicket.name, color: newTicket.color })
      .select()
      .single();
    if (error) { toast.error("Erro ao criar etiqueta"); return; }
    setTickets((t) => [...t, data as Ticket]);
    setNewTicket({ name: "", color: TICKET_COLORS[0] });
    setShowTicketDialog(false);
  };

  const ticketsWithIdeas = useMemo(() => {
    return tickets.map(t => ({
      ...t,
      ideas: nodes.filter(n => (n.data as NodeData).ticket?.id === t.id),
    }));
  }, [tickets, nodes]);

  if (loading) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[640px] rounded-2xl border border-card-border bg-background-elevated overflow-hidden">
      {/* Toolbar */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <Button
          size="sm"
          onClick={() => setEditingNode({ title: "", content: "", ticket_id: null })}
        >
          <Plus className="w-4 h-4 mr-1" /> Nova ideia
        </Button>
        <Button size="sm" variant="outline" onClick={() => setShowTicketDialog(true)}>
          <Tag className="w-4 h-4 mr-1" /> Etiqueta
        </Button>
      </div>

      {/* Tickets sidebar trigger */}
      <div className="absolute top-4 right-4 z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline">
              <Tag className="w-4 h-4 mr-1" /> Minhas etiquetas ({tickets.length})
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background-elevated overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Etiquetas e ideias</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {ticketsWithIdeas.length === 0 && (
                <p className="text-sm text-foreground-muted">Crie sua primeira etiqueta para organizar ideias.</p>
              )}
              {ticketsWithIdeas.map((t) => (
                <div key={t.id} className="rounded-lg border border-card-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full" style={{ background: t.color }} />
                    <span className="font-semibold">{t.name}</span>
                    <Badge variant="outline" className="ml-auto">{t.ideas.length}</Badge>
                  </div>
                  <ul className="space-y-1">
                    {t.ideas.map(i => (
                      <li
                        key={i.id}
                        className="text-sm text-foreground-muted hover:text-foreground cursor-pointer truncate"
                        onClick={() => (i.data as NodeData).onEdit()}
                      >
                        • {(i.data as NodeData).title}
                      </li>
                    ))}
                    {t.ideas.length === 0 && (
                      <li className="text-xs text-foreground-muted/60 italic">Sem ideias ainda</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="hsl(var(--card-border))" />
        <Controls className="!bg-background-elevated !border-card-border" />
        <MiniMap
          className="!bg-background-elevated !border !border-card-border"
          nodeColor={(n) => (n.data as NodeData).ticket?.color || "hsl(var(--primary))"}
        />
      </ReactFlow>

      {/* Edit/Create node dialog */}
      <Dialog open={!!editingNode} onOpenChange={(o) => !o && setEditingNode(null)}>
        <DialogContent className="bg-background-elevated">
          <DialogHeader>
            <DialogTitle>{editingNode?.id ? "Editar ideia" : "Nova ideia"}</DialogTitle>
          </DialogHeader>
          {editingNode && (
            <div className="space-y-4">
              <div>
                <Label>Título</Label>
                <Input
                  value={editingNode.title}
                  onChange={(e) => setEditingNode({ ...editingNode, title: e.target.value })}
                  placeholder="Ex: Lançar landing page"
                  maxLength={200}
                />
              </div>
              <div>
                <Label>Detalhes</Label>
                <Textarea
                  value={editingNode.content}
                  onChange={(e) => setEditingNode({ ...editingNode, content: e.target.value })}
                  placeholder="Descreva sua ideia..."
                  rows={4}
                  maxLength={5000}
                />
              </div>
              <div>
                <Label>Etiqueta</Label>
                <Select
                  value={editingNode.ticket_id || "none"}
                  onValueChange={(v) => setEditingNode({ ...editingNode, ticket_id: v === "none" ? null : v })}
                >
                  <SelectTrigger className="bg-background-elevated">
                    <SelectValue placeholder="Sem etiqueta" />
                  </SelectTrigger>
                  <SelectContent className="bg-background-elevated">
                    <SelectItem value="none">Sem etiqueta</SelectItem>
                    {tickets.map(t => (
                      <SelectItem key={t.id} value={t.id}>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                          {t.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2">
            {editingNode?.id && (
              <Button variant="destructive" size="sm" onClick={handleDeleteNode}>
                <Trash2 className="w-4 h-4 mr-1" /> Excluir
              </Button>
            )}
            <Button variant="outline" onClick={() => setEditingNode(null)}>Cancelar</Button>
            <Button onClick={handleSaveNode}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New ticket dialog */}
      <Dialog open={showTicketDialog} onOpenChange={setShowTicketDialog}>
        <DialogContent className="bg-background-elevated">
          <DialogHeader>
            <DialogTitle>Nova etiqueta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Nome</Label>
              <Input
                value={newTicket.name}
                onChange={(e) => setNewTicket({ ...newTicket, name: e.target.value })}
                placeholder="Ex: Marketing"
                maxLength={60}
              />
            </div>
            <div>
              <Label>Cor</Label>
              <div className="flex gap-2 flex-wrap mt-2">
                {TICKET_COLORS.map(c => (
                  <button
                    key={c}
                    onClick={() => setNewTicket({ ...newTicket, color: c })}
                    className={`w-8 h-8 rounded-full border-2 ${newTicket.color === c ? "border-foreground scale-110" : "border-transparent"} transition-all`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTicketDialog(false)}>Cancelar</Button>
            <Button onClick={handleCreateTicket}>Criar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
