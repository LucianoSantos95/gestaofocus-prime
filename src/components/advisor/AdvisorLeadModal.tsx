import { useEffect, useState } from "react";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

export const ADVISOR_MODAL_EVENT = "focus:open-advisor-modal";

export function openAdvisorModal(source?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ADVISOR_MODAL_EVENT, { detail: { source } }));
}

const WA_NUMBER = "5511916742443";

const schema = z.object({
  name: z.string().trim().min(2, "Digite seu nome").max(80, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(160, "E-mail muito longo"),
  dor: z
    .string()
    .trim()
    .min(10, "Descreva com um pouco mais de detalhe (mín. 10 caracteres)")
    .max(500, "Máximo de 500 caracteres"),
});

type FormValues = z.infer<typeof schema>;

type Submitted = { name: string; dor: string; saved: boolean } | null;

export default function AdvisorLeadModal() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>(undefined);
  const [values, setValues] = useState<FormValues>({ name: "", email: "", dor: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState<Submitted>(null);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent).detail as { source?: string } | undefined;
      setSource(detail?.source);
      setSubmitted(null);
      setErrors({});
      setSending(false);
      setValues({ name: "", email: "", dor: "" });
      setOpen(true);
      trackEvent("advisor_modal_open", {
        event_category: "conversion",
        event_label: detail?.source ?? "unknown",
      });
    }
    window.addEventListener(ADVISOR_MODAL_EVENT, handler as EventListener);
    return () => window.removeEventListener(ADVISOR_MODAL_EVENT, handler as EventListener);
  }, []);

  const onChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const newErrors: Partial<Record<keyof FormValues, string>> = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormValues;
        if (!newErrors[key]) newErrors[key] = iss.message;
      });
      setErrors(newErrors);
      return;
    }

    setSending(true);

    // Grava na tabela waitlist (já existente). Se a policy de RLS barrar o insert
    // anônimo, a confirmação ainda aparece e o fallback de WhatsApp é exibido —
    // o lead nunca fica sem caminho de chegar até o Luciano.
    let saved = false;
    try {
      const { error } = await supabase.from("waitlist").insert({
        email: result.data.email,
        full_name: result.data.name,
        main_challenge: result.data.dor,
        interest: "advisor",
        source: source ? `advisor:${source}` : "advisor",
      });
      saved = !error;
      if (error) console.error("[advisor] falha ao gravar lead:", error.message);
    } catch (err) {
      console.error("[advisor] erro inesperado ao gravar lead:", err);
    }

    setSending(false);
    setSubmitted({ name: result.data.name, dor: result.data.dor, saved });
    trackEvent("advisor_form_submit", {
      event_category: "conversion",
      event_label: source ?? "unknown",
      saved,
    });
  };

  const waLink = (payload: { name: string; dor: string }) => {
    const msg = `Olá Luciano, sou ${payload.name} e quero a sessão Advisor. Minha maior dor operacional hoje é: ${payload.dor}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-lg border-0 p-0 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, var(--bg2) 0%, var(--bg3) 100%)",
          border: "1px solid var(--line2)",
          borderRadius: 20,
        }}
      >
        <div style={{ padding: "32px 28px 28px" }}>
          {!submitted ? (
            <>
              <DialogHeader>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#9DE89D",
                    letterSpacing: "0.10em",
                    marginBottom: 12,
                    display: "block",
                  }}
                >
                  &lt;:SESSÃO ADVISOR · R$497&gt;
                </span>
                <DialogTitle
                  style={{
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}
                >
                  Me conta o essencial primeiro.
                </DialogTitle>
                <DialogDescription
                  style={{ color: "var(--text2)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}
                >
                  Três campos, 30 segundos. Eu te chamo com o link de pagamento e a gente marca a
                  call.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={onSubmit}
                style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 14 }}
              >
                <Field
                  label="Nome"
                  error={errors.name}
                  input={
                    <input
                      type="text"
                      value={values.name}
                      onChange={onChange("name")}
                      placeholder="Seu nome"
                      autoComplete="name"
                      required
                      style={inputStyle}
                    />
                  }
                />
                <Field
                  label="E-mail"
                  error={errors.email}
                  input={
                    <input
                      type="email"
                      value={values.email}
                      onChange={onChange("email")}
                      placeholder="voce@empresa.com"
                      autoComplete="email"
                      inputMode="email"
                      required
                      style={inputStyle}
                    />
                  }
                />
                <Field
                  label="Qual sua maior dor operacional agora?"
                  error={errors.dor}
                  hint={`${values.dor.length}/500`}
                  input={
                    <textarea
                      value={values.dor}
                      onChange={onChange("dor")}
                      placeholder="Ex.: pago 3 ferramentas e ainda controlo cliente na planilha…"
                      rows={4}
                      maxLength={500}
                      required
                      style={{ ...inputStyle, resize: "vertical", minHeight: 96 }}
                    />
                  }
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2"
                  style={{
                    background: "#9DE89D",
                    color: "#0a0a0a",
                    padding: "14px 24px",
                    borderRadius: 999,
                    fontSize: 15,
                    fontWeight: 600,
                    border: "none",
                    cursor: sending ? "wait" : "pointer",
                    opacity: sending ? 0.7 : 1,
                    marginTop: 4,
                  }}
                >
                  {sending ? (
                    <>
                      Enviando <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar e garantir minha sessão <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    color: "var(--text3)",
                    letterSpacing: "0.06em",
                    textAlign: "center",
                  }}
                >
                  NENHUM PAGAMENTO AGORA · SEM CARTÃO NESTA ETAPA
                </p>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: "rgba(157,232,157,0.12)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <CheckCircle2 className="w-7 h-7" style={{ color: "#9DE89D" }} />
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                Recebi, {submitted.name.split(" ")[0]}.
              </h3>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 8,
                  maxWidth: 380,
                  margin: "0 auto 8px",
                }}
              >
                Vou te chamar em breve com o link de pagamento e dois horários pra
                gente marcar a call.
              </p>
              <p
                style={{
                  color: "var(--text3)",
                  fontSize: 13,
                  lineHeight: 1.6,
                  marginBottom: 24,
                  maxWidth: 380,
                  margin: "0 auto 24px",
                }}
              >
                Leio uma por uma, então normalmente respondo no mesmo dia.
              </p>

              {!submitted.saved && (
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line2)",
                    borderRadius: 12,
                    padding: "16px 18px",
                    marginBottom: 18,
                    textAlign: "left",
                  }}
                >
                  <p style={{ color: "var(--text2)", fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
                    Pra garantir que não se perca no caminho, me manda também por aqui:
                  </p>
                  <a
                    href={waLink(submitted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("advisor_whatsapp_fallback", {
                        event_category: "conversion",
                        event_label: source ?? "unknown",
                      })
                    }
                    className="inline-flex items-center justify-center gap-2"
                    style={{
                      background: "#25D366",
                      color: "#0a0a0a",
                      padding: "11px 20px",
                      borderRadius: 999,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Enviar no WhatsApp <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  background: "transparent",
                  border: "1px solid var(--line2)",
                  color: "var(--text2)",
                  padding: "11px 24px",
                  borderRadius: 999,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--line2)",
  borderRadius: 10,
  padding: "12px 14px",
  color: "var(--text)",
  fontSize: 16,
  fontFamily: "var(--font-sans)",
  outline: "none",
};

function Field({
  label,
  input,
  error,
  hint,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
  hint?: string;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text2)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {input}
      <div style={{ display: "flex", justifyContent: "space-between", minHeight: 14 }}>
        <span style={{ fontSize: 12, color: "#f87171" }}>{error ?? ""}</span>
        {hint && (
          <span style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)" }}>
            {hint}
          </span>
        )}
      </div>
    </label>
  );
}
