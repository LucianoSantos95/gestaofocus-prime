import { useEffect, useState } from "react";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LEAD_MODAL_EVENT } from "@/lib/leadModal";
import { trackEvent } from "@/lib/analytics";

const WA_NUMBER = "5511916742443";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Digite seu nome completo")
    .max(80, "Nome muito longo"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(160, "E-mail muito longo"),
  gargalo: z
    .string()
    .trim()
    .min(10, "Descreva com um pouco mais de detalhe (mín. 10 caracteres)")
    .max(500, "Máximo de 500 caracteres"),
});

type FormValues = z.infer<typeof schema>;

type SubmittedState = {
  name: string;
  gargalo: string;
} | null;

export default function LeadFormModal() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>(undefined);
  const [values, setValues] = useState<FormValues>({ name: "", email: "", gargalo: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState<SubmittedState>(null);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent).detail as { source?: string } | undefined;
      setSource(detail?.source);
      setSubmitted(null);
      setErrors({});
      setValues({ name: "", email: "", gargalo: "" });
      setOpen(true);
      trackEvent("lead_modal_open", {
        event_category: "conversion",
        event_label: detail?.source ?? "unknown",
      });
    }
    window.addEventListener(LEAD_MODAL_EVENT, handler as EventListener);
    return () => window.removeEventListener(LEAD_MODAL_EVENT, handler as EventListener);
  }, []);

  const onChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
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
    setSubmitted({ name: result.data.name, gargalo: result.data.gargalo });
    trackEvent("lead_form_submit", {
      event_category: "conversion",
      event_label: source ?? "unknown",
      value: result.data.gargalo.length,
    });
  };

  const buildWaLink = (payload: { name: string; gargalo: string }) => {
    const msg = `Olá, sou ${payload.name}. Meu maior gargalo hoje é: ${payload.gargalo}`;
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
        <div style={{ padding: "32px 32px 28px" }}>
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
                  &lt;:DIAGNÓSTICO GRATUITO&gt;
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
                  Antes de falar, me conta o essencial.
                </DialogTitle>
                <DialogDescription
                  style={{ color: "var(--text2)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}
                >
                  Três campos, 30 segundos. Já abro o WhatsApp com sua mensagem pronta.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={onSubmit} style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
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
                      required
                      style={inputStyle}
                    />
                  }
                />
                <Field
                  label="Qual é o maior gargalo da sua operação hoje?"
                  error={errors.gargalo}
                  input={
                    <textarea
                      value={values.gargalo}
                      onChange={onChange("gargalo")}
                      placeholder="Ex.: perco leads porque ninguém responde a tempo…"
                      rows={4}
                      maxLength={500}
                      required
                      style={{ ...inputStyle, resize: "vertical", minHeight: 96 }}
                    />
                  }
                  hint={`${values.gargalo.length}/500`}
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2"
                  style={{
                    background: "var(--text)",
                    color: "var(--bg)",
                    padding: "14px 24px",
                    borderRadius: 999,
                    fontSize: 15,
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    marginTop: 4,
                  }}
                >
                  Continuar <ArrowUpRight className="w-4 h-4" />
                </button>
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
                Pronto, {submitted.name.split(" ")[0]}!
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                Sua mensagem já está formatada. Clica no botão abaixo e o WhatsApp abre com o
                gargalo que você descreveu.
              </p>
              <a
                href={buildWaLink(submitted)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("lead_whatsapp_open", {
                    event_category: "conversion",
                    event_label: source ?? "unknown",
                  });
                  setTimeout(() => setOpen(false), 300);
                }}
                className="inline-flex items-center justify-center gap-2"
                style={{
                  background: "#25D366",
                  color: "#0a0a0a",
                  padding: "14px 28px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Abrir WhatsApp <ArrowUpRight className="w-4 h-4" />
              </a>
              <div style={{ marginTop: 18 }}>
                <button
                  type="button"
                  onClick={() => setSubmitted(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text3)",
                    fontSize: 12,
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  ← Editar resposta
                </button>
              </div>
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
  fontSize: 14,
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
