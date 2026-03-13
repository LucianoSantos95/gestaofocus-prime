import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
  buttons?: { label: string; href: string }[];
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

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
  const greetings: Record<string, string> = {
    notion: `Ei! Vi que você veio direto do Notion — isso mostra que você já entende o poder dessa ferramenta! 😎 A gente transforma o Notion em um sistema de gestão completo pro seu negócio: CRM, financeiro, projetos, tudo integrado e automatizado. Quer ver como funciona na prática?`,
    facebook: `Opa! Que bom que clicou no nosso anúncio! 👋 Você sabia que mais de 500 empresas já saíram do caos e organizaram toda a gestão com nossos sistemas? Me conta: qual o maior desafio do seu negócio hoje?`,
    instagram: `Ei! Vi que veio do Instagram! 📸 Se você tá aqui, provavelmente tá buscando uma forma mais inteligente de organizar seu negócio, certo? Eu posso te mostrar o caminho mais rápido pra isso — me conta o que você precisa resolver!`,
    google: `Boa pesquisa! 🔍 Se você chegou até aqui pelo Google, provavelmente tá buscando uma solução séria pra organizar a gestão do seu negócio. Você veio ao lugar certo — me conta o que tá precisando e eu te mostro a melhor solução!`,
    linkedin: `Ei, profissional! Vi que veio do LinkedIn. 💼 Aqui na Focus a gente ajuda empresas a sair do caos operacional com sistemas inteligentes de gestão. Qual é o maior gargalo do seu negócio hoje?`,
    tiktok: `Opa! Veio do TikTok, né? 🎵 Legal! Aqui a gente transforma aquelas dicas de produtividade em sistemas reais que funcionam no dia a dia. Me conta: o que tá travando seu negócio?`,
    twitter: `Legal, veio do X/Twitter! 🐦 Aqui na Focus criamos sistemas que transformam o caos da gestão em clareza total. Me conta o que você precisa resolver!`,
    direct: `Olá! 👋 Que bom ter você aqui na Focus! A gente ajuda empresas e profissionais a saírem do caos operacional com sistemas inteligentes de gestão no Notion. Me conta: o que te trouxe aqui hoje?`,
    other: `Olá! 👋 Bem-vindo à Focus! Somos especialistas em transformar a gestão do seu negócio com sistemas inteligentes. Me conta: qual o maior desafio que você enfrenta hoje na organização da sua empresa?`,
  };

  return {
    role: "assistant",
    content: greetings[source] || greetings.direct,
  };
};

const FOLLOW_UP: Message = {
  role: "assistant",
  content: "Pra te ajudar melhor, escolhe o que mais combina com você 👇",
  buttons: [
    { label: "🏢 Quero um sistema completo de gestão", href: "/hub-empresarial" },
    { label: "🛠️ Preciso de um software sob medida", href: "/solucoes-sob-medida" },
    { label: "💬 Quero conversar e entender melhor", href: "" },
  ],
};

export default function ChatWidget() {
  const source = useRef(detectSource());
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize greeting + follow-up on first open
  useEffect(() => {
    if (isOpen && !initialized) {
      const greeting = getGreeting(source.current);
      setMessages([greeting]);
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, FOLLOW_UP]);
      }, 1500);
      setInitialized(true);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialized]);

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

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";

    const updateAssistant = (chunk: string) => {
      assistantContent += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && !last.buttons) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantContent } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
    };

    try {
      // Build only user/assistant messages for the API (exclude buttons/greeting context)
      const apiMessages = messages
        .filter((m) => !m.buttons)
        .map(({ role, content }) => ({ role, content }));
      apiMessages.push({ role: "user", content: text });

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: apiMessages, mode: "recommendation" }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || `Erro ${resp.status}`);
      }

      if (!resp.body) throw new Error("Stream não disponível");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) updateAssistant(content);
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }

      // Flush remaining buffer
      if (buffer.trim()) {
        for (let raw of buffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) updateAssistant(content);
          } catch {
            /* ignore */
          }
        }
      }
    } catch (e) {
      console.error("Chat error:", e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, ocorreu um erro. Tente novamente em instantes." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start mb-3">
                <div className="bg-muted text-foreground rounded-2xl rounded-bl-md px-4 py-2.5 text-sm">
                  <span className="animate-pulse">Digitando...</span>
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
    </>
  );
}
