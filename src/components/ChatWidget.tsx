import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { useConversation } from "@elevenlabs/react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
  buttons?: { label: string; href: string }[];
};

const detectSource = (): string => {
  const ref = document.referrer.toLowerCase();
  if (!ref) return "direct";
  if (ref.includes("notion.so") || ref.includes("notion.site")) return "notion";
  if (ref.includes("facebook.com") || ref.includes("fb.com")) return "facebook";
  if (ref.includes("instagram.com")) return "instagram";
  if (ref.includes("google.com") || ref.includes("google.com.br")) return "google";
  if (ref.includes("linkedin.com")) return "linkedin";
  if (ref.includes("tiktok.com")) return "tiktok";
  if (ref.includes("twitter.com") || ref.includes("x.com")) return "twitter";
  return "other";
};

const getGreeting = (source: string): Message => {
  const base = "Posso te ajudar a encontrar a solução certa pra organizar e escalar seu negócio. 🚀";

  const greetings: Record<string, string> = {
    notion: `Ei! Vi que você veio do Notion — massa! 😎 Você já conhece o poder do Notion, e a gente leva isso a outro nível com sistemas prontos e automações. ${base}`,
    facebook: `Opa! Vi que você veio pelo Facebook. Legal ter você aqui! 👋 ${base}`,
    instagram: `Que bom que veio do Instagram! 📸 ${base}`,
    google: `Bom te ver por aqui! Vi que encontrou a gente pelo Google — ótima pesquisa! 🔍 ${base}`,
    linkedin: `Ei, profissional! Vi que veio do LinkedIn. 💼 ${base}`,
    tiktok: `Opa! Veio do TikTok, né? 🎵 ${base}`,
    twitter: `Legal, veio do X/Twitter! 🐦 ${base}`,
    direct: `Olá! 👋 Bem-vindo à Focus! ${base}`,
    other: `Olá! 👋 Que bom ter você aqui! ${base}`,
  };

  return {
    role: "assistant",
    content: greetings[source] || greetings.direct,
  };
};

const FOLLOW_UP: Message = {
  role: "assistant",
  content: "Me conta: qual é o maior desafio do seu negócio hoje? Organização, processos, financeiro, equipe...? Assim consigo te indicar o caminho certo 👇",
  buttons: [
    { label: "Quero um sistema pronto (Hub Empresarial)", href: "/hub-empresarial" },
    { label: "Preciso de algo sob medida", href: "/solucoes-sob-medida" },
  ],
};

export default function ChatWidget() {
  const source = useRef(detectSource());
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const conversation = useConversation({
    textOnly: true,
    onMessage: (message: any) => {
      if (message.type === "agent_response") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: message.agent_response_event?.agent_response || "" },
        ]);
      }
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, ocorreu um erro. Tente novamente." },
      ]);
    },
  });

  // Initialize greeting + follow-up on first open
  useEffect(() => {
    if (isOpen && !initialized) {
      const greeting = getGreeting(source.current);
      setMessages([greeting]);
      // Show follow-up after short delay
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, FOLLOW_UP]);
      }, 1500);
      setInitialized(true);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialized]);

  const ensureConnected = useCallback(async () => {
    if (conversation.status === "connected") return true;
    setIsConnecting(true);
    try {
      await (conversation as any).startSession({
        agentId: "agent_9501kk9r0zfheky84nztakprz3n2",
      });
      return true;
    } catch (e) {
      console.error("Failed to connect:", e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Não foi possível conectar. Tente novamente." },
      ]);
      return false;
    } finally {
      setIsConnecting(false);
    }
  }, [conversation]);

  // Auto-open after 3s (once per session)
  useEffect(() => {
    if (sessionStorage.getItem("chat_opened")) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("chat_opened", "1");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Focus input
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");

    const connected = await ensureConnected();
    if (connected) {
      conversation.sendUserMessage(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const busy = isConnecting || conversation.status === "connecting";

  return (
    <>
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300"
          style={{ height: "min(520px, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-sm">Assistente Focus</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-3`}>
                <div className="max-w-[85%]">
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.buttons && (
                    <div className="flex flex-col gap-2 mt-2">
                      {msg.buttons.map((btn) => (
                        <a
                          key={btn.href}
                          href={btn.href}
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                        >
                          {btn.label}
                          <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
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
              disabled={busy}
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || busy}
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
    </>
  );
}
