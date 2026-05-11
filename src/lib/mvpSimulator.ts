// 15 SIM/NÃO questions for the MVP diagnostic
export interface QuestionDef {
  id: string;
  block: string;
  text: string;
}

export const QUESTIONS: QuestionDef[] = [
  // Bloco A — Caixa & Tempo
  { id: "q1", block: "Caixa & Tempo", text: "Você tem mais de R$1.000 disponíveis para investir no MVP?" },
  { id: "q2", block: "Caixa & Tempo", text: "Você consegue dedicar mais de 10 horas por semana ao negócio?" },
  { id: "q3", block: "Caixa & Tempo", text: "Você aguenta financeiramente 6 meses sem retorno do MVP?" },
  // Bloco B — Produto & Oferta
  { id: "q4", block: "Produto & Oferta", text: "Você já vendeu pelo menos 1 vez algo parecido com o que pretende vender?" },
  { id: "q5", block: "Produto & Oferta", text: "Você sabe qual seria o ticket médio (preço) do seu produto/serviço?" },
  { id: "q6", block: "Produto & Oferta", text: "Você tem um produto de entrada (porta-de-entrada barata) definido?" },
  // Bloco C — Canal & Audiência
  { id: "q7", block: "Canal & Audiência", text: "Você tem audiência (mais de 500 seguidores) em algum canal?" },
  { id: "q8", block: "Canal & Audiência", text: "Você produz conteúdo regularmente (mesmo que seja 1 post/semana)?" },
  { id: "q9", block: "Canal & Audiência", text: "Você tem rede de contatos quentes (10+ pessoas que pode abordar amanhã)?" },
  // Bloco D — Validação
  { id: "q10", block: "Validação", text: "Você já conversou com pelo menos 10 clientes em potencial?" },
  { id: "q11", block: "Validação", text: "Você tem feedback escrito ou gravado desses clientes?" },
  { id: "q12", block: "Validação", text: "Tem alguém disposto a pagar antes mesmo do produto estar pronto (pré-venda)?" },
  // Bloco E — Operação
  { id: "q13", block: "Operação", text: "Você tem sócio ou alguma equipe (mesmo que pequena) para tocar o MVP?" },
  { id: "q14", block: "Operação", text: "Você tem CNPJ ativo ou está no MEI?" },
  { id: "q15", block: "Operação", text: "Você tem ferramenta de cobrança configurada (Stripe, Pagar.me, Asaas etc)?" },
];

export const NICHES = ["Serviços", "Produto físico", "Produto digital", "SaaS", "Consultoria", "Educação", "Outro"] as const;
export const TIME_OPTIONS = ["Ainda não comecei", "0–6 meses", "6–12 meses", "1–3 anos", "3+ anos"] as const;
export const REVENUE_OPTIONS = ["R$0", "Até R$5k", "R$5–20k", "R$20–50k", "R$50k+"] as const;

export function generateAnonSessionId(): string {
  const existing = localStorage.getItem("mvp_anon_session_id");
  if (existing && existing.length >= 8) return existing;
  const id = `anon_${crypto.randomUUID().replace(/-/g, "").slice(0, 20)}`;
  localStorage.setItem("mvp_anon_session_id", id);
  return id;
}
