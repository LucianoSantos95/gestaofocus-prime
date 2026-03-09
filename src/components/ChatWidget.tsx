import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMakeChat, type ChatMessage } from "@/hooks/useMakeChat";
import ConsultationFormModal from "@/components/ConsultationFormModal";

function MessageBubble({ msg, onOpenForm, onGoHub }: {
  msg: ChatMessage;
  onOpenForm: () => void;
  onGoHub: () => void;
}) {
  const isUser = msg.role === "user";
  const mentionsSolucoes = !isUser && /solu[çc][õo]es\s+sob\s+medida/i.test(msg.content);
  const mentionsHub = !isUser && /\bhub\b/i.test(msg.content);

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div className="max-w-[85%] space-y-2">
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? "bg-primary text-primary-foreground rounded-br-md"
              : "bg-muted text-foreground rounded-bl-md"
          }`}
        >
          {msg.content}
        </div>
        {(mentionsSolucoes || mentionsHub) && (
          <div className="flex flex-wrap gap-2">
            {mentionsSolucoes && (
              <button
                onClick={onOpenForm}
                className="flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-xs font-medium hover:bg-primary/20 transition-colors"
              >
                <ArrowRight className="w-3 h-3" />
                Solicitar orçamento
              </button>
            )}
            {mentionsHub && (
              <button
                onClick={onGoHub}
                className="flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1.5 text-xs font-medium hover:opacity-80 transition-colors"
              >
                <ArrowRight className="w-3 h-3" />
                Conhecer o Hub Focus
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { messages, isLoading, sendMessage } = useMakeChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto-open after 3s (once per session)
  useEffect(() => {
    if (sessionStorage.getItem("chat_opened")) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("chat_opened", "1");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300"
          style={{ height: "min(500px, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-sm">Assistente Focus</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <MessageBubble
                key={i}
                msg={msg}
                onOpenForm={() => { setShowForm(true); setIsOpen(false); }}
                onGoHub={() => { navigate("/hub-empresarial"); setIsOpen(false); }}
              />
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="rounded-full shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 text-primary-foreground"
        aria-label="Abrir chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Consultation form modal */}
      <ConsultationFormModal open={showForm} onOpenChange={setShowForm} />
    </>
  );
}
