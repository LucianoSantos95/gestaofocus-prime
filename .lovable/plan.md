## Objetivo
Subir a página `/hub-empresarial` de **6.5 → 8.5/10** para tráfego pago, mantendo o CTA apontando para `https://app.focusinteligente.com.br` e sem incluir vídeo.

## Mudanças

### 1. Alinhar a mensagem do "Grátis" (crítico)
Hoje a página promete "grátis para sempre" mas a tabela começa em R$ 69 — quebra confiança no primeiro scroll. Vamos reposicionar como **"Free com limite de uso por aba"**, refletindo a regra real: o usuário usa até atingir o limite, depois é bloqueado e só libera assinando um plano.

Arquivos:
- `src/pages/HubEmpresarial.tsx`
  - Hero subtítulo: trocar `"Grátis para começar. Planos a partir de R$69/mês."` por algo como `"Comece grátis (uso limitado por aba). Planos completos a partir de R$ 69/mês."`
  - Botão hero: trocar `"Testar Grátis por 30 dias"` por `"Começar Grátis Agora"`.
  - Microcopy abaixo do botão: trocar `"Sem cartão de crédito • Cancele quando quiser"` por `"Sem cartão de crédito • Uso gratuito até o limite da aba"`.
  - Adicionar um 4º plano **"Free"** (R$ 0) na tabela `plans[]` com a descrição real do limite por aba, CTA "Começar Grátis" apontando para o mesmo link externo, e listando claramente o que está incluso até o bloqueio.
  - FAQ "🆓 Posso testar grátis?": reescrever para refletir a regra: uso gratuito até atingir o limite por aba; depois é necessário assinar para continuar. Remover "plano gratuito para sempre".
  - FAQ "❌ Posso cancelar...": remover menção a "30 dias" se existir; manter cancelamento sem multa.
- `src/components/hub/StickyMobileCTA.tsx`
  - Microcopy: trocar `"Sem cartão de crédito • Cancele quando quiser"` por `"Grátis até o limite da aba • Sem cartão"`.

### 2. Manter o link externo (decisão do usuário)
Sem alteração no `href`. Continua `https://app.focusinteligente.com.br` (corrigir também o `StickyMobileCTA.tsx` que aponta para `appfocus.lovable.app/auth` → trocar para `https://app.focusinteligente.com.br` para padronizar atribuição/branding). `target="_blank"` mantido.

### 3. Pixel de conversão de signup (crítico)
Hoje só rastreamos o clique no CTA; não sabemos quem efetivamente criou conta. Vamos disparar um evento `hub_signup_intent` no clique do CTA externo (já existe `trackCTAClick`, mas vamos adicionar um evento dedicado de conversão com `event_category: "conversion"` e label `hub_empresarial_cta`) em **todos** os CTAs da página: hero, sticky mobile, pricing cards, e qualquer CTA secundário. Isso permite plugar como Conversion Event no Google Ads / Meta Ads via GTM lendo o `gtag` que `trackEvent` já dispara.

Arquivos:
- `src/pages/HubEmpresarial.tsx`: substituir `handleCTA` por uma função que chama `trackEvent("hub_signup_intent", { event_category: "conversion", event_label: label })` além do `trackCTAClick`.
- `src/components/hub/StickyMobileCTA.tsx`: adicionar `onClick` disparando o mesmo evento.

### 4. Itens explicitamente fora do escopo
- ❌ Trocar o link/domínio do CTA (usuário pediu manter)
- ❌ Adicionar vídeo/demo (usuário pediu não incluir agora)
- ❌ Mexer no banner Notion Referrer, depoimentos, garantia, comparativos vs concorrente (ficam para iteração futura)

## Resultado esperado
- Mensagem coerente do começo ao fim (sem contradição grátis vs R$ 69).
- Tráfego pago com criativo "Grátis" para de vazar por inconsistência.
- Conversões de signup mensuráveis no GA/Ads via evento `hub_signup_intent`.
- Nota estimada: **8.5/10** para tráfego frio.
