

## Plano: Popup Automático de Plano de Ação com IA

### Dados de sessão (base para o timing)
- **Mediana de sessão**: 28.4 segundos
- **P25 (25% saem antes)**: 5.4 segundos
- **Média**: 106 segundos

**Decisão**: O popup aparecerá após **15 segundos** — tempo suficiente para o visitante ter visto o conteúdo, mas antes de metade deles saírem (mediana 28s). Não aparecerá se o usuário já viu neste session.

### O que será construído

Um popup com visual impactante que aparece automaticamente após 15 segundos na homepage. O visitante preenche 4 campos rápidos, a IA gera um plano de ação personalizado, e ele recebe o resultado na tela com opção de download em PDF.

### Fluxo do usuário

```text
Visitante entra na homepage
        │
   [15 segundos]
        │
        ▼
  Popup abre automaticamente
  "Descubra o que está travando sua empresa"
  "Responda 4 perguntas e receba um plano gratuito"
        │
        ▼
  Formulário (4 campos):
  • Segmento (Agência / Consultoria / Escritório / Outro)
  • Tamanho da equipe (Só eu / 2-5 / 6-15 / 16+)
  • Maior dor (checkboxes: Projetos atrasados, Financeiro bagunçado, Sem processos, Equipe desalinhada)
  • Email (para receber o plano)
        │
        ▼
  [Loading: "Analisando seu negócio..."]
        │
        ▼
  Edge Function generate-action-plan:
  • IA gera diagnóstico + ações imediatas
  • Salva lead na tabela diagnosis_leads
  • Retorna resultado em JSON
        │
        ▼
  Tela de resultado no próprio popup:
  • Score por área (barras visuais)
  • 3 ações imediatas
  • Botão: "Baixar PDF completo" (gera PDF no client com jsPDF)
  • CTA: "Quer automatizar tudo isso? Conheça [produto recomendado]"
```

### Implementação técnica

#### 1. Tabela `diagnosis_leads` (migration)
- id, email, segment, team_size, challenges (text[]), diagnosis_result (jsonb), recommended_product (text), created_at
- RLS: insert público, select apenas admin

#### 2. Edge Function `generate-action-plan`
- Recebe: segment, team_size, challenges
- Chama Lovable AI (gemini-2.5-flash) com prompt estruturado
- Retorna JSON com: score por área, 3 ações imediatas, recomendação de produto, projeção de resultado
- Salva lead no banco

#### 3. Componente `ActionPlanPopup.tsx`
- Popup com glassmorphism e animações (estilo similar ao ApplicationFormModal)
- Timer de 15 segundos + controle via sessionStorage
- Formulário step-by-step (2 steps: dados + loading/resultado)
- Geração de PDF no client usando jsPDF (instalação do pacote)
- Não aparece se o ExitIntentPopup ou TimeBasedPopup já foram exibidos

#### 4. Integração no `App.tsx`
- Renderizar `ActionPlanPopup` apenas na rota `/` (homepage)
- Coordenar com popups existentes via sessionStorage

### Arquivos envolvidos

| Arquivo | Ação |
|---|---|
| `supabase/migrations/` | Criar tabela `diagnosis_leads` |
| `supabase/functions/generate-action-plan/index.ts` | Edge Function com IA |
| `src/components/ActionPlanPopup.tsx` | Novo componente principal |
| `src/App.tsx` | Adicionar popup na homepage |
| `package.json` | Adicionar `jspdf` para geração de PDF no client |

### Coordenação de popups
O popup NÃO aparece se:
- Já foi exibido nesta sessão (`sessionStorage`)
- O ExitIntentPopup ou TimeBasedPopup já estão abertos
- O visitante está preenchendo o ApplicationFormModal

