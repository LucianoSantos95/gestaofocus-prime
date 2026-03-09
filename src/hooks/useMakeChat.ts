import { useState, useCallback } from "react";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const WEBHOOK_URL = "https://hook.us2.make.com/t15918bjr3xwf4rwdvnsq3c453eguil2";

const GREETING: ChatMessage = {
  role: "assistant",
  content: "Olá! 👋 Sou o assistente da Focus — viemos do Notion para te ajudar a organizar sua empresa. Como posso te ajudar hoje?",
};

export function useMakeChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (input: string) => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const resp = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem: input.trim() }),
      });

      if (!resp.ok) throw new Error(`Erro ${resp.status}`);

      const text = await resp.text();
      // Try to parse as JSON first, fallback to raw text
      let content = text;
      try {
        const json = JSON.parse(text);
        content = json.resposta || json.response || json.message || json.text || text;
      } catch {
        // use raw text
      }

      setMessages((prev) => [...prev, { role: "assistant", content }]);
    } catch (e) {
      console.error("Make chat error:", e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, ocorreu um erro. Tente novamente em instantes." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { messages, isLoading, sendMessage };
}
