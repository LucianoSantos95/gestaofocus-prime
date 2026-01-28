

## Plano: Popup de IA com Recomendacao de Produtos

### Visao Geral

Criar um popup inteligente que aparece na homepage para iniciar uma conversa com IA. A IA faz perguntas ao visitante, entende suas necessidades e recomenda o produto mais adequado com link direto.

---

### Fluxo do Usuario

```text
1. Visitante entra na homepage
2. Apos 5-8 segundos, aparece popup com pergunta inicial
3. Visitante responde (texto ou opcoes rapidas)
4. IA processa e faz pergunta de follow-up se necessario
5. IA recomenda produto especifico com link
6. Visitante clica e vai para pagina do produto
```

---

### Arquivos a Criar/Modificar

#### 1. Novo Componente: `src/components/AIRecommendationPopup.tsx`

**Responsabilidades:**
- Popup modal que aparece automaticamente apos delay
- Interface de chat compacta integrada
- Pergunta inicial automatica da IA
- Streaming de respostas
- Botoes de opcao rapida para facilitar interacao
- Deteccao de produtos mencionados e exibicao de cards clicaveis

**Design:**
- Modal menor que o chat completo (max-w-md)
- Pergunta inicial ja exibida quando abre
- Input de texto + botoes de opcao rapida
- Cards de produto quando IA recomenda

---

#### 2. Modificar Edge Function: `supabase/functions/chat/index.ts`

**Novo System Prompt especializado para recomendacoes:**

```text
Voce e um consultor da Focus Inteligente. Seu objetivo e entender 
a necessidade do visitante e recomendar O PRODUTO CERTO.

PRODUTOS DISPONIVEIS:
1. Hub Empresarial PRO (/hub-empresarial) - R$349
   Para: Pequenas empresas, MEIs que querem gestao completa
   Inclui: CRM, projetos, financeiro, processos, dashboards
   
2. Controle Financeiro PRO (/controle-financeiro-pro) - R$297
   Para: Quem precisa organizar financas da empresa
   Inclui: Fluxo de caixa, categorias, relatorios, contratos
   
3. Sprint de Produtividade (/sprint-produtividade) - R$37,90
   Para: Pessoas que querem organizar rotina pessoal
   Inclui: Sistema de 7 dias, templates, metodologia

4. Sistemas Gratuitos (/sistemas-gratuitos) - Gratis
   Para: Quem quer comecar sem investir
   Inclui: Templates basicos de varios tipos

INSTRUCOES:
- Faca 1-2 perguntas curtas para entender a necessidade
- Seja direto e amigavel
- Ao recomendar, SEMPRE inclua o link no formato [Nome do Produto](/url)
- Se a pessoa nao sabe o que quer, pergunte se e para empresa ou pessoal
```

---

#### 3. Modificar: `src/pages/Index.tsx`

**Adicionar:**
- Importar AIRecommendationPopup
- Renderizar no final do componente
- Logica para nao conflitar com outros popups (TimeBasedPopup, ExitIntentPopup)

---

### Detalhes do Componente AIRecommendationPopup

#### Estados:
- `isOpen`: boolean - controla visibilidade
- `messages`: Message[] - historico da conversa
- `hasInteracted`: boolean - se usuario ja respondeu
- `recommendedProduct`: Product | null - produto recomendado

#### Opcoes Rapidas (Quick Replies):
```typescript
const quickReplies = [
  "Preciso organizar minha empresa",
  "Quero controlar minhas financas", 
  "Preciso ser mais produtivo",
  "Quero ver opcoes gratuitas"
];
```

#### Deteccao de Produtos:
- Regex para detectar links no formato `[texto](/url)`
- Extrair e exibir card de produto clicavel
- Produtos: Hub Empresarial, Controle Financeiro, Sprint, Gratuitos

#### Timing:
- Aparece apos 8 segundos na homepage
- Nao aparece se TimeBasedPopup ou ExitIntent ja apareceram
- Salva em sessionStorage se ja foi exibido

---

### Mensagem Inicial da IA

```text
Ola! 👋 

Sou o assistente da Focus. Em poucos segundos posso 
te ajudar a encontrar a melhor solucao para organizar 
sua gestao.

O que voce esta buscando hoje?
```

---

### Exemplo de Fluxo de Conversa

```text
IA: Ola! O que voce esta buscando hoje?

Usuario: Preciso organizar minha empresa

IA: Legal! Voce ja usa alguma ferramenta de gestao 
ou ainda esta no Excel/planilhas?

Usuario: Uso planilhas mas esta uma bagunca

IA: Entendi! Para empresas que querem sair das 
planilhas, recomendo o [Hub Empresarial PRO](/hub-empresarial).

Ele centraliza CRM, projetos, financeiro e processos 
em um unico sistema no Notion. Por R$349 voce tem 
acesso vitalicio + suporte.

[Card do Produto com botao "Ver Detalhes"]
```

---

### Prevencao de Conflitos de Popups

**Coordenacao com popups existentes:**
- TimeBasedPopup: 30 segundos ou 50% scroll
- ExitIntentPopup: ao mover mouse para sair
- AIRecommendationPopup: 8 segundos

**Estrategia:**
- Usar sessionStorage compartilhado
- Verificar se outros popups ja foram exibidos
- AI popup tem prioridade menor (nao aparece se outros ja apareceram)

---

### Tracking de Analytics

Eventos a rastrear:
- `ai_popup_shown`: Popup exibido
- `ai_popup_interaction`: Usuario enviou mensagem
- `ai_popup_product_recommended`: IA recomendou produto
- `ai_popup_product_clicked`: Usuario clicou no produto
- `ai_popup_closed`: Usuario fechou sem interagir

---

### Estimativa de Codigo

**AIRecommendationPopup.tsx:** ~250 linhas
- Componente principal
- Quick reply buttons
- Product card detection
- Chat interface compacta

**Modificacoes Index.tsx:** ~10 linhas
- Import e render do componente

**Edge Function chat/index.ts:** ~20 linhas
- System prompt atualizado com produtos

---

### Resumo Visual do Popup

```text
┌─────────────────────────────────┐
│  🤖 Assistente Focus        [X] │
├─────────────────────────────────┤
│                                 │
│  Ola! O que voce esta          │
│  buscando hoje?                │
│                                 │
│  [Organizar empresa]            │
│  [Controlar financas]           │
│  [Ser mais produtivo]           │
│  [Ver opcoes gratuitas]         │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Digite sua mensagem...   │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

---

### Beneficios Esperados

1. **Reducao de Bounce Rate**: Engaja visitantes antes de sairem
2. **Direcionamento Inteligente**: IA entende necessidade e direciona
3. **Experiencia Personalizada**: Cada visitante recebe recomendacao unica
4. **Conversao Mais Alta**: Usuario vai para pagina certa, ja qualificado

