
## Contexto
Você foi aprovado como Lovable Partner e passará a entregar soluções construídas na Lovable (não mais Notion como hub central). Além disso, o modelo comercial da consultoria muda de hora/hora (R$ 180/h) para **projeto fechado com "Valor sob consulta"**, já que Lovable + Claude Code aceleram a entrega.

Escopo: apenas a **página inicial** (`/`). Blog, páginas internas (`/hub-empresarial`, `/solucoes-sob-medida`, FAQ, etc.) e textos antigos sobre Notion ficam intocados nesta entrega — podem ser tratados em rodadas futuras se você quiser.

## Mudanças propostas em `src/pages/Index.tsx`

### 1. Hero — labels superiores (linha 29-33)
Trocar a label do meio:
- Antes: `/ Notion como Hub Empresarial`
- Depois: `/ Lovable como Hub Central` (adicionando o badge de Partner em outro ponto, ver item 4)

### 2. Seção "Como funciona" — passo 02 (linhas 147-153)
- Descrição antes: *"Implementamos automações sob medida no Notion + IA."*
- Descrição depois: *"Construímos soluções sob medida na Lovable + IA, com entrega rápida e código próprio."*
- Tags antes: `["Arquitetura", "Notion Hub", "Agentes IA", "Integrações"]`
- Tags depois: `["Arquitetura", "Lovable Partner", "Agentes IA", "Integrações"]`

### 3. Seção "Planos" — card Consultoria (linhas 448-498)
- Subtítulo antes: *"Diagnóstico e arquitetura da sua operação, hora a hora."*
- Subtítulo depois: *"Diagnóstico, arquitetura e construção da sua operação — entrega por projeto fechado."*
- Bloco de preço antes: `R$ 180 /hora`
- Bloco de preço depois: `Valor sob consulta` (texto único, sem sufixo `/hora`, mantendo a tipografia `snj-price-amount` mas em tamanho compatível)
- Lista de features antes:
  - Diagnóstico de processos
  - Mapeamento de fluxos
  - **Arquitetura no Notion**
  - Agentes de IA sob medida
  - **Pague apenas pelas horas usadas**
- Lista de features depois:
  - Diagnóstico de processos
  - Mapeamento de fluxos
  - **Arquitetura e desenvolvimento na Lovable** (Partner oficial)
  - Agentes de IA sob medida
  - **Escopo e preço fechados antes de começar**
  - Entrega acelerada (semanas, não meses)

### 4. SEO + badge Partner
- `keywords` (linha 20): trocar `consultoria notion` por `consultoria lovable, lovable partner, desenvolvimento sob medida`
- Adicionar uma label discreta `/ Lovable Partner Oficial` ao bloco do hero (junto às outras três labels mono) para sinalizar a credencial — pode virar 4 labels ou substituir uma das menos estratégicas.

### 5. Memory (`mem://`)
Atualizar duas memórias para refletir a nova posição:
- Core: trocar restrição "NEVER mention Notion … proprietary software developer" por "Position as **Lovable Partner**: solutions built on Lovable. Avoid recommending Notion as core architecture; mention Notion only in legacy blog content."
- Atualizar `mem://strategy/v3-business-model-pivot` e `mem://ai/infrastructure` para refletir Lovable como hub e cobrança por projeto fechado.

## Fora de escopo (sugestão para próximas rodadas)
- Reescrever `/solucoes-sob-medida` com o novo modelo (projeto fechado, Lovable Partner).
- Reescrever `/hub-empresarial` se quiser amarrar com a nova narrativa.
- Atualizar ROI Calculator (que ainda assume custo/hora) — não está renderizado na home atual, mas existe em `src/components/ROICalculator.tsx`.
- Limpeza geral de menções a Notion em páginas institucionais (FAQ, AboutFocus, CentralAjuda, FocusPro, ControleFinanceiroPro).
- Posts de blog: manter como estão (são conteúdo SEO sobre o tema Notion/produtividade e seguem trazendo tráfego).

Pode aprovar para eu implementar só a home agora, ou me diz se quer já incluir alguma das páginas extras nesta mesma rodada.
