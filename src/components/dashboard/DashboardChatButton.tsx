import { useState } from "react";
import { Bot, X } from "lucide-react";
import AIChatBot from "@/components/AIChatBot";

export default function DashboardChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Abrir assistente virtual"
      >
        {open ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Bot className="w-7 h-7 text-primary-foreground" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] rounded-2xl border border-card-border bg-background shadow-2xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-background-elevated">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground text-sm">Assistente Focus</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-foreground-muted hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <AIChatBot />
          </div>
        </div>
      )}
    </>
  );
}
