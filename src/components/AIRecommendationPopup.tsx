import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Link } from "react-router-dom";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Product = {
  name: string;
  url: string;
  price: string;
  description: string;
};

const PRODUCTS: Record<string, Product> = {
  "/hub-empresarial": {
    name: "Hub Empresarial PRO",
    url: "/hub-empresarial",
    price: "R$ 349",
    description: "CRM, projetos, financeiro e processos em um sistema",
  },
  "/controle-financeiro-pro": {
    name: "Controle Financeiro PRO",
    url: "/controle-financeiro-pro",
    price: "R$ 297",
    description: "Fluxo de caixa, relatórios e controle financeiro",
  },
  "/sprint-produtividade": {
    name: "Sprint de Produtividade",
    url: "/sprint-produtividade",
    price: "R$ 37,90",
    description: "7 dias para transformar sua rotina",
  },
  "/sistemas-gratuitos": {
    name: "Sistemas Gratuitos",
    url: "/sistemas-gratuitos",
    price: "Grátis",
    description: "Templates básicos para começar sem investir",
  },
};

const QUICK_REPLIES = [
  "Preciso organizar minha empresa",
  "Quero controlar minhas finanças",
  "Preciso ser mais produtivo",
  "Quero ver opções gratuitas",
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Olá! 👋\n\nSou o assistente da Focus. Em poucos segundos posso te ajudar a encontrar a melhor solução para organizar sua gestão.\n\nO que você está buscando hoje?",
};

// Extract product links from markdown format [text](/url)
const extractProductLinks = (content: string): string[] => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const urls: string[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const url = match[2];
    if (PRODUCTS[url]) {
      urls.push(url);
    }
  }
  return [...new Set(urls)];
};

// Render markdown links as clickable text
const renderMessageContent = (content: string) => {
  const parts = content.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const [, text, url] = linkMatch;
      return (
        <Link
          key={index}
          to={url}
          className="text-primary hover:text-primary-glow underline font-medium"
          onClick={() => trackEvent("cta_click", { event_label: `ai_popup_link_${url}` })}
        >
          {text}
        </Link>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

interface AIRecommendationPopupProps {
  onShow?: () => void;
}

export default function AIRecommendationPopup({ onShow }: AIRecommendationPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Engagement tracking refs
  const conversationStartTime = useRef<number | null>(null);
  const firstInteractionTime = useRef<number | null>(null);
  const messageCount = useRef(0);

  // Track engagement metrics on close
  const trackEngagementMetrics = useCallback(() => {
    if (!conversationStartTime.current) return;
    
    const totalDuration = Math.round((Date.now() - conversationStartTime.current) / 1000);
    const timeToFirstInteraction = firstInteractionTime.current && conversationStartTime.current
      ? Math.round((firstInteractionTime.current - conversationStartTime.current) / 1000)
      : null;
    
    trackEvent("ai_popup_engagement", {
      event_category: "engagement",
      event_label: "conversation_metrics",
      value: totalDuration,
      total_duration_seconds: totalDuration,
      message_count: messageCount.current,
      time_to_first_interaction: timeToFirstInteraction,
      had_interaction: hasInteracted,
    });
  }, [hasInteracted]);

  // Check if popup should show
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("ai_popup_shown");
    const otherPopupShown = sessionStorage.getItem("popup_shown");
    
    if (alreadyShown || otherPopupShown) return;

    const timer = setTimeout(() => {
      // Double check before showing
      const otherPopupNow = sessionStorage.getItem("popup_shown");
      if (otherPopupNow) return;
      
      setIsOpen(true);
      conversationStartTime.current = Date.now(); // Start tracking time
      sessionStorage.setItem("ai_popup_shown", "true");
      sessionStorage.setItem("popup_shown", "true");
      trackEvent("cta_click", { event_label: "ai_popup_shown" });
      onShow?.();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onShow]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !hasInteracted) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, hasInteracted]);

  const handleClose = useCallback(() => {
    trackEngagementMetrics(); // Track before closing
    setIsOpen(false);
    if (!hasInteracted) {
      trackEvent("cta_click", { event_label: "ai_popup_closed_no_interaction" });
    }
  }, [hasInteracted, trackEngagementMetrics]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Track first interaction time
    if (!firstInteractionTime.current) {
      firstInteractionTime.current = Date.now();
    }
    messageCount.current += 1;
    
    setHasInteracted(true);
    setShowQuickReplies(false);
    trackEvent("ai_popup_message_sent", { 
      event_label: "ai_popup_interaction",
      message_number: messageCount.current,
    });

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";

    const updateAssistant = (chunk: string) => {
      assistantContent += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 1) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantContent } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: [...messages.slice(1), userMsg], // Skip initial message
          mode: "recommendation" 
        }),
      });

      if (!resp.ok) {
        throw new Error("Erro na resposta");
      }

      if (!resp.body) {
        throw new Error("Stream não disponível");
      }

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

      // Check if a product was recommended
      const productLinks = extractProductLinks(assistantContent);
      if (productLinks.length > 0) {
        trackEvent("cta_click", { event_label: "ai_popup_product_recommended" });
      }
    } catch (e) {
      console.error("Chat error:", e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, ocorreu um erro. Tente novamente." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const handleProductClick = (url: string) => {
    trackEvent("cta_click", { event_label: `ai_popup_product_clicked_${url}` });
  };

  // Get recommended products from last assistant message
  const lastAssistantMessage = [...messages].reverse().find((m) => m.role === "assistant");
  const recommendedProducts = lastAssistantMessage
    ? extractProductLinks(lastAssistantMessage.content)
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-background border border-card-border rounded-2xl shadow-elegant overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-background-elevated">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">Assistente Focus</span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-background-secondary transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-foreground-muted" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[300px] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap",
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-background-secondary text-foreground rounded-bl-md"
                )}
              >
                {msg.role === "assistant"
                  ? renderMessageContent(msg.content)
                  : msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-background-secondary px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-foreground-muted rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-foreground-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-foreground-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Product Cards */}
        {recommendedProducts.length > 0 && !isLoading && (
          <div className="px-4 pb-3 space-y-2">
            {recommendedProducts.map((url) => {
              const product = PRODUCTS[url];
              return (
                <Link
                  key={url}
                  to={url}
                  onClick={() => handleProductClick(url)}
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all group"
                >
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {product.name}
                    </div>
                    <div className="text-xs text-foreground-muted">
                      {product.description}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-sm">
                      {product.price}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Quick Replies */}
        {showQuickReplies && !isLoading && (
          <div className="px-4 pb-3">
            <div className="flex flex-wrap gap-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-background-secondary hover:bg-primary/10 text-foreground-muted hover:text-primary border border-card-border hover:border-primary/30 transition-all"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-4 border-t border-card-border bg-background"
        >
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-background-secondary border-card-border focus:border-primary"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="bg-primary hover:bg-primary-glow shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
