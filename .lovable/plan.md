## Objetivo

Reestruturar a tela de resultado do **Simulador de MVP** dentro do dashboard para:
1. Calibrar o perfil às faixas de pontuação corretamente.
2. Apresentar foco e cronograma de forma clara e expansível.
3. Permitir baixar o plano em PDF.
4. Capturar leads de acompanhamento pago via CTA fixo "Fale com um profissional".

---

## 1. Calibração perfil × pontuação

Faixas (com a trava existente preservada):

| Pontuação | Perfil |
|---|---|
| 0–5 | Concierge Manual |
| 6–10 | Estruturado |
| 11–15 | Escalável |

**Trava**: se `q1` (caixa ≥ R$1.000) **OU** `q2` (≥10 h/semana) for `false`, força **Concierge** independentemente do score.

Local: `supabase/functions/generate-mvp-plan/index.ts → calcProfile()`. Já está nesta lógica — apenas reforçar a documentação inline e refletir os limites no UI (badge mostra "X/15 → faixa Y") para o usuário entender o porquê.

## 2. Entrega estruturada do MVP (tela de resultado)

Substituir o resultado atual (markdown solto) por blocos visuais:

### 2.1 Tabela "Onde focar e como"
Vem de um novo campo na resposta da IA: `foco_tabela: { area, por_que, como_fazer }[]` (4–6 linhas).
Renderizar como `<Table>` shadcn com colunas: **Área de foco | Por que importa | Como fazer**.

### 2.2 Cronograma expansível
Reaproveita `cronograma[]` (já tem `semana, tarefa, criterio_sucesso, custo_rs`).
Pedir à IA também: `passo_a_passo: string[]` (3–6 itens) por semana.
Renderizar como `<Accordion>` shadcn:
- Header: `Semana N — {tarefa}`
- Conteúdo: passo a passo numerado + critério de sucesso + custo estimado.

### 2.3 Botão "Baixar MVP em PDF"
Client-side com **jsPDF + html2canvas** (sem custo, sem edge function).
- Adicionar `bun add jspdf html2canvas`.
- Helper `src/lib/exportMvpPdf.ts` que pega o container `#mvp-result` e gera PDF A4 paginado.
- Inclui cabeçalho com perfil, score, veredito, tabela de foco e cronograma completo.

## 3. CTA "Fale com um profissional"

### 3.1 UI
Botão fixo no canto inferior esquerdo da tela do dashboard (apenas quando o painel está em `step === "result"`), cor de destaque (vermelho `--primary` do CTA, hsl `0 84% 60%`), com leve pulse.

### 3.2 Popover
Ao clicar abre `<Popover>` shadcn ancorado ao botão com:
- Headline: "Quer que eu implante seu MVP com você?"
- Subhead curto: 2 frases sobre acompanhamento 1:1 (definição de escopo, execução semanal, ajustes com IA).
- Bullet points (3): "Diagnóstico aprofundado", "Roadmap semanal comigo", "Suporte direto via WhatsApp".
- Faixa de investimento: "A partir de R$ 1.997 / sprint de 30 dias" (placeholder editável).
- **CTA primário**: botão WhatsApp com mensagem pré-preenchida contendo perfil + score + nome do negócio do usuário.
- **CTA secundário**: "Quero que entrem em contato" → grava em tabela nova `mvp_consulting_leads`.

### 3.3 Tabela nova `mvp_consulting_leads`
Campos: `id, user_id (nullable), simulation_id, full_name, email, phone, profile, score, business_description, created_at`.
RLS:
- INSERT público com check: `length(email) <= 255 AND email regex válido`.
- SELECT só admin (`has_role(auth.uid(),'admin')`).
- Trigger de validação (lengths + regex de email/telefone) e UPDATE/DELETE bloqueados.

WhatsApp: número placeholder `5511999999999` → coloco TODO bem visível pra você trocar.

## 4. Mudanças no edge function

`supabase/functions/generate-mvp-plan/index.ts`:
- Adicionar ao schema da tool `deliver_mvp_plan`:
  - `foco_tabela: { area, por_que, como_fazer }[]` (required, min 3 max 6).
  - Em cada item de `cronograma`: `passo_a_passo: string[]` (3–6).
- Reforçar no `SYSTEM_PROMPT` que cada semana precisa ter passo a passo executável e que `foco_tabela` é prioridade de execução por ordem de impacto.

## 5. Arquivos a criar / editar

**Criar**
- `src/components/dashboard/MvpResultStructured.tsx` (tabela de foco + cronograma accordion + botões)
- `src/components/dashboard/TalkToProBubble.tsx` (botão fixo + popover + form)
- `src/lib/exportMvpPdf.ts` (PDF client-side)
- Migration: tabela `mvp_consulting_leads` + trigger + RLS.

**Editar**
- `src/components/dashboard/MVPSimulatorPanel.tsx` — usar novo `MvpResultStructured` no `step === "result"`; renderizar `TalkToProBubble` quando há resultado; mostrar badge "Score X/15 · Faixa Y–Z".
- `supabase/functions/generate-mvp-plan/index.ts` — campos novos no schema + prompt.

**Dependências**: `bun add jspdf html2canvas`.

## Detalhes técnicos

- PDF: `html2canvas(element, { backgroundColor: '#0a0f1c', scale: 2 })` → `jsPDF('p','mm','a4')`, paginação por altura.
- Backwards compat: se uma simulação antiga não tiver `foco_tabela` ou `passo_a_passo`, mostrar fallback amigável ("Refaça a simulação para ver o plano estruturado").
- WhatsApp link: `https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent(...)}`.
- Sem mudanças em rotas, sidebar, mapa de ideias.

## Decisões assumidas (você pulou as perguntas)

- Faixas **0–5 / 6–10 / 11–15** com a trava de caixa/tempo já existente.
- CTA com **WhatsApp + formulário backup**, valor exibido como "a partir de R$ 1.997 / sprint" (placeholder).
- PDF **client-side** com jsPDF + html2canvas.
- Número de WhatsApp e valor ficam como TODO destacado no código pra você ajustar rapidinho.