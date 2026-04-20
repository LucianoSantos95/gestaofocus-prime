import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Plus, Search, Upload, Send, Sparkles, Mail, Loader2 } from "lucide-react";
import Papa from "papaparse";

type Campaign = {
  id: string;
  name: string;
  icp_description: string;
  tone_of_voice: string;
  calendly_url: string;
  sender_email: string;
  sender_name: string;
  status: string;
  search_query: string | null;
  daily_send_limit: number;
};

type Lead = {
  id: string;
  campaign_id: string;
  company_name: string;
  website: string | null;
  email: string | null;
  contact_name: string | null;
  contact_role: string | null;
  industry: string | null;
  score: number;
  status: string;
  personalized_hook: string | null;
  pain_points: string[] | null;
  current_sequence_step: number;
  last_contacted_at: string | null;
  source: string;
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-muted text-muted-foreground",
  enriched: "bg-blue-500/20 text-blue-300",
  queued: "bg-amber-500/20 text-amber-300",
  contacted: "bg-purple-500/20 text-purple-300",
  replying: "bg-emerald-500/20 text-emerald-300",
  booked: "bg-green-500/20 text-green-300",
  lost: "bg-rose-500/20 text-rose-300",
  discarded: "bg-zinc-500/20 text-zinc-400",
  bounced: "bg-red-500/20 text-red-300",
};

export default function Prospeccao() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);

  const [showNew, setShowNew] = useState(false);
  const [newCamp, setNewCamp] = useState({
    name: "",
    icp_description: "",
    search_query: "",
    sender_email: "oluciano@focusinteligente.com.br",
    sender_name: "Luciano - Focus Inteligente",
    calendly_url: "https://calendly.com/seu-link-aqui",
    tone_of_voice: "consultivo, direto, profissional, brasileiro",
    daily_send_limit: 30,
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => { loadCampaigns(); }, []);
  useEffect(() => { if (selectedCampaign) loadLeads(selectedCampaign.id); }, [selectedCampaign]);

  async function loadCampaigns() {
    setLoading(true);
    const { data } = await supabase.from("prospect_campaigns").select("*").order("created_at", { ascending: false });
    setCampaigns(data || []);
    if (data && data.length > 0 && !selectedCampaign) setSelectedCampaign(data[0]);
    setLoading(false);
  }

  async function loadLeads(campaignId: string) {
    const { data } = await supabase.from("prospect_leads").select("*").eq("campaign_id", campaignId).order("score", { ascending: false }).limit(500);
    setLeads(data || []);
  }

  async function createCampaign() {
    if (!newCamp.name || !newCamp.icp_description || !newCamp.calendly_url || !newCamp.sender_email) {
      toast.error("Preencha nome, ICP, Calendly e remetente");
      return;
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return toast.error("Não autenticado");

    const { data, error } = await supabase.from("prospect_campaigns").insert({
      ...newCamp,
      user_id: user.id,
      status: "draft",
    }).select().single();

    if (error) return toast.error(error.message);
    toast.success("Campanha criada");
    setShowNew(false);
    setSelectedCampaign(data);
    loadCampaigns();
  }

  async function toggleCampaignStatus(c: Campaign) {
    const newStatus = c.status === "active" ? "paused" : "active";
    await supabase.from("prospect_campaigns").update({ status: newStatus }).eq("id", c.id);
    toast.success(newStatus === "active" ? "Campanha ativada" : "Campanha pausada");
    loadCampaigns();
    if (selectedCampaign?.id === c.id) setSelectedCampaign({ ...c, status: newStatus });
  }

  async function searchLeads() {
    if (!selectedCampaign) return;
    if (!searchQuery && !selectedCampaign.search_query) return toast.error("Digite uma query");
    setBusy("search");
    try {
      const { data, error } = await supabase.functions.invoke("prospect-search", {
        body: { campaign_id: selectedCampaign.id, query: searchQuery || selectedCampaign.search_query, limit: 15 },
      });
      if (error) throw error;
      toast.success(`${data.inserted} leads adicionados`);
      loadLeads(selectedCampaign.id);
    } catch (e: any) {
      toast.error(e.message || "Erro na busca");
    } finally { setBusy(null); }
  }

  async function enrichLead(leadId: string) {
    setBusy(`enrich-${leadId}`);
    try {
      const { data, error } = await supabase.functions.invoke("prospect-enrich", { body: { lead_id: leadId } });
      if (error) throw error;
      toast.success("Lead enriquecido");
      if (selectedCampaign) loadLeads(selectedCampaign.id);
    } catch (e: any) { toast.error(e.message || "Erro"); }
    finally { setBusy(null); }
  }

  async function enrichAll() {
    if (!selectedCampaign) return;
    const newOnes = leads.filter(l => l.status === "new" && l.website);
    if (newOnes.length === 0) return toast.info("Nenhum lead novo com site");
    setBusy("enrich-all");
    let ok = 0, fail = 0;
    for (const l of newOnes.slice(0, 20)) {
      try {
        await supabase.functions.invoke("prospect-enrich", { body: { lead_id: l.id } });
        ok++;
      } catch { fail++; }
      await new Promise(r => setTimeout(r, 800));
    }
    toast.success(`${ok} enriquecidos, ${fail} falharam`);
    if (selectedCampaign) loadLeads(selectedCampaign.id);
    setBusy(null);
  }

  async function queueCadence() {
    if (!selectedCampaign) return;
    setBusy("queue");
    try {
      const { data, error } = await supabase.functions.invoke("prospect-queue-cadence", {
        body: { campaign_id: selectedCampaign.id },
      });
      if (error) throw error;
      toast.success(`${data.leads_queued} leads agendados (${data.jobs_created} envios)`);
      loadLeads(selectedCampaign.id);
    } catch (e: any) { toast.error(e.message || "Erro"); }
    finally { setBusy(null); }
  }

  async function sendNow(leadId: string, step: number) {
    setBusy(`send-${leadId}`);
    try {
      const { data, error } = await supabase.functions.invoke("prospect-send-email", {
        body: { lead_id: leadId, sequence_step: step },
      });
      if (error) throw error;
      toast.success(`Enviado: ${data.subject}`);
      if (selectedCampaign) loadLeads(selectedCampaign.id);
    } catch (e: any) { toast.error(e.message || "Erro"); }
    finally { setBusy(null); }
  }

  function handleCsvUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !selectedCampaign) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const rows = (results.data as any[]).map(r => ({
          company_name: r.company_name || r.empresa || r.company || r.nome,
          website: r.website || r.site || r.url,
          email: r.email,
          contact_name: r.contact_name || r.contato || r.nome_contato,
          contact_role: r.contact_role || r.cargo,
          industry: r.industry || r.setor,
          location: r.location || r.localizacao,
        })).filter(r => r.company_name);
        if (rows.length === 0) return toast.error("CSV vazio. Use colunas: company_name, website, email, contact_name, contact_role");
        try {
          const { data, error } = await supabase.functions.invoke("prospect-import-csv", {
            body: { campaign_id: selectedCampaign.id, leads: rows },
          });
          if (error) throw error;
          toast.success(`${data.inserted} leads importados`);
          loadLeads(selectedCampaign.id);
        } catch (err: any) { toast.error(err.message || "Erro"); }
      },
    });
    e.target.value = "";
  }

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === "new").length,
    enriched: leads.filter(l => l.status === "enriched").length,
    contacted: leads.filter(l => l.status === "contacted" || l.status === "queued").length,
    replying: leads.filter(l => l.status === "replying").length,
    booked: leads.filter(l => l.status === "booked").length,
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Agente de Prospecção</h1>
            <p className="text-sm text-foreground-muted">Busca, enriquece, escreve e envia — tudo automático</p>
          </div>
          <Dialog open={showNew} onOpenChange={setShowNew}>
            <DialogTrigger asChild>
              <Button><Plus className="w-4 h-4 mr-2" />Nova campanha</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader><DialogTitle>Nova campanha</DialogTitle></DialogHeader>
              <div className="space-y-3">
                <div><Label>Nome</Label><Input value={newCamp.name} onChange={e => setNewCamp({ ...newCamp, name: e.target.value })} placeholder="Agências SP - Q2" /></div>
                <div><Label>ICP (cliente ideal)</Label><Textarea rows={3} value={newCamp.icp_description} onChange={e => setNewCamp({ ...newCamp, icp_description: e.target.value })} placeholder="Agências de marketing digital em SP, 10-50 funcionários, que atendem PMEs e usam WhatsApp/planilhas pra gestão de projetos" /></div>
                <div><Label>Query de busca (Firecrawl)</Label><Input value={newCamp.search_query} onChange={e => setNewCamp({ ...newCamp, search_query: e.target.value })} placeholder='"agência de marketing digital" São Paulo' /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>Email remetente</Label><Input value={newCamp.sender_email} onChange={e => setNewCamp({ ...newCamp, sender_email: e.target.value })} /></div>
                  <div><Label>Nome remetente</Label><Input value={newCamp.sender_name} onChange={e => setNewCamp({ ...newCamp, sender_name: e.target.value })} /></div>
                </div>
                <div><Label>Calendly</Label><Input value={newCamp.calendly_url} onChange={e => setNewCamp({ ...newCamp, calendly_url: e.target.value })} /></div>
                <div><Label>Limite diário de envios</Label><Input type="number" value={newCamp.daily_send_limit} onChange={e => setNewCamp({ ...newCamp, daily_send_limit: parseInt(e.target.value) || 30 })} /></div>
                <Button onClick={createCampaign} className="w-full">Criar</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? <div className="text-center py-12 text-foreground-muted">Carregando...</div> : campaigns.length === 0 ? (
          <Card className="p-12 text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-lg font-semibold mb-2">Nenhuma campanha ainda</h2>
            <p className="text-foreground-muted mb-4">Crie sua primeira campanha para começar a prospectar.</p>
          </Card>
        ) : (
          <>
            <div className="flex gap-2 flex-wrap">
              {campaigns.map(c => (
                <button key={c.id} onClick={() => setSelectedCampaign(c)} className={`px-3 py-1.5 rounded-lg text-sm border ${selectedCampaign?.id === c.id ? "border-primary bg-primary/10 text-primary" : "border-card-border text-foreground-muted hover:bg-accent"}`}>
                  {c.name} <Badge variant="outline" className="ml-2 text-xs">{c.status}</Badge>
                </button>
              ))}
            </div>

            {selectedCampaign && (
              <>
                <Card className="p-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-2">
                      <Button size="sm" variant={selectedCampaign.status === "active" ? "destructive" : "default"} onClick={() => toggleCampaignStatus(selectedCampaign)}>
                        {selectedCampaign.status === "active" ? "Pausar" : "Ativar"}
                      </Button>
                      <Button size="sm" variant="outline" disabled={busy !== null} onClick={enrichAll}>
                        {busy === "enrich-all" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
                        Enriquecer novos
                      </Button>
                      <Button size="sm" variant="outline" disabled={busy !== null} onClick={queueCadence}>
                        {busy === "queue" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                        Disparar cadência
                      </Button>
                      <label>
                        <input type="file" accept=".csv" className="hidden" onChange={handleCsvUpload} />
                        <Button size="sm" variant="outline" asChild><span><Upload className="w-4 h-4 mr-2" />Importar CSV</span></Button>
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Input placeholder='ex: "agência marketing digital" SP' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-72" />
                      <Button size="sm" disabled={busy !== null} onClick={searchLeads}>
                        {busy === "search" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
                        Buscar
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {[["Total", stats.total], ["Novos", stats.new], ["Enriquecidos", stats.enriched], ["Contatados", stats.contacted], ["Respondendo", stats.replying], ["Agendou", stats.booked]].map(([k, v]) => (
                    <Card key={k as string} className="p-3">
                      <div className="text-xs text-foreground-muted">{k}</div>
                      <div className="text-2xl font-bold">{v}</div>
                    </Card>
                  ))}
                </div>

                <Card className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-background-elevated border-b border-card-border">
                        <tr className="text-left">
                          <th className="px-3 py-2">Empresa</th>
                          <th className="px-3 py-2">Email</th>
                          <th className="px-3 py-2">Score</th>
                          <th className="px-3 py-2">Status</th>
                          <th className="px-3 py-2">Etapa</th>
                          <th className="px-3 py-2">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.length === 0 ? (
                          <tr><td colSpan={6} className="text-center py-8 text-foreground-muted">Nenhum lead. Use Buscar ou Importar CSV.</td></tr>
                        ) : leads.map(l => (
                          <tr key={l.id} className="border-b border-card-border hover:bg-accent/30">
                            <td className="px-3 py-2">
                              <div className="font-medium">{l.company_name}</div>
                              {l.website && <a href={l.website} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">{l.website.replace(/^https?:\/\//, "").substring(0, 40)}</a>}
                              {l.personalized_hook && <div className="text-xs text-foreground-muted mt-1 italic line-clamp-1">"{l.personalized_hook}"</div>}
                            </td>
                            <td className="px-3 py-2 text-xs">{l.email || <span className="text-foreground-muted">—</span>}</td>
                            <td className="px-3 py-2"><span className={`font-mono ${l.score >= 70 ? "text-emerald-400" : l.score >= 40 ? "text-amber-400" : "text-foreground-muted"}`}>{l.score}</span></td>
                            <td className="px-3 py-2"><Badge className={STATUS_COLORS[l.status] || "bg-muted"}>{l.status}</Badge></td>
                            <td className="px-3 py-2 text-xs">{l.current_sequence_step}/3</td>
                            <td className="px-3 py-2">
                              <div className="flex gap-1">
                                {l.status === "new" && l.website && <Button size="sm" variant="ghost" disabled={busy !== null} onClick={() => enrichLead(l.id)}>{busy === `enrich-${l.id}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}</Button>}
                                {l.email && (l.status === "enriched" || l.status === "contacted" || l.status === "replying") && (
                                  <Button size="sm" variant="ghost" disabled={busy !== null} onClick={() => sendNow(l.id, Math.min(l.current_sequence_step + 1, 3) || 1)}>{busy === `send-${l.id}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Mail className="w-3 h-3" />}</Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
