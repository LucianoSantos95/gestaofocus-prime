
# Simulador de MVP + Mapa Mental Obsidian-Style

Construir o "Simulador de MVP com IA" como **porta de entrada da área de cliente** (gate antes do login), e adicionar um **mapa mental interativo estilo Obsidian** dentro do dashboard após o login.

## Estratégia do funil

```text
TOPO  →  Simulador MVP (gratuito, gate de entrada)   /area-cliente
MEIO  →  Hub Empresarial (SaaS)                       /hub-empresarial
FIM   →  Solução Sob Medida (consultoria)             /solucoes-sob-medida
```

A página inicial (`/`) **continua intocada**. O simulador vive exclusivamente no fluxo da área de cliente.

## Decisões aprovadas

- **Posicionamento:** simulador aparece **antes do login**, como gate da área de cliente. Quem clica em "Área do cliente" cai no simulador. Quem já tem conta clica em "Já tenho conta" e vai direto para o dashboard.
- **Acesso:** Telas 1–4 do Simulador são públicas. O **resultado completo** fica atrás de paywall de signup (Google ou email/senha).
- **Login social:** habilitar Google OAuth gerenciado pela Lovable Cloud.
- **Pós-login:** dashboard mostra (1) resultado da última simulação e (2) **mapa mental interativo Obsidian-style** logo abaixo.
- **Fase 1 (Simulador):** fluxo completo + IA + mapa mental Markmap do plano + salvar simulação. Sem PDF, sem sequência de emails.
- **Fase 2 (Mapa de ideias do usuário):** canvas interativo de nós + sidebar de tickets/tags.

## Fluxo do usuário

```text
[Site / Notion / Banner "Área do cliente"]
              ↓
[/area-cliente — público, gate de entrada]
   ├─ Hero: "Antes de entrar, descubra qual MVP cabe no seu negócio"
   ├─ CTA principal: "Começar simulação gratuita (5 min)"
   └─ Link discreto: "Já tenho conta → Entrar"
              ↓
[Simulador — 4 telas públicas]
   1. Descreva seu negócio
   2. Diagnóstico SIM/NÃO (15 perguntas)
   3. Loading + IA (gemini-3-flash-preview)
   4. Veredito parcial + paywall
              ↓
[Paywall: criar conta para liberar plano completo]
   ├─ Google (1 clique)
   └─ Email + senha
              ↓
[/dashboard — área de cliente reformulada]
   ├─ Welcome
   ├─ Resultado da simulação (veredito + cronograma + mapa do plano via Markmap)
   ├─ ⭐ Mapa Mental de Ideias (canvas Obsidian-style)
   │     ├─ Nós ancorados nos blocos do plano (Problema, Cliente, Oferta, Canal, Métricas, Riscos)
   │     ├─ Clicar em nó vazio → popup para adicionar ideia
   │     ├─ Arrastar nós livremente, criar ligações
   │     ├─ Adicionar tickets/tags coloridas a cada ideia
   │     └─ Sidebar lateral: lista de tickets → expandir → ver ideias daquele ticket
   ├─ Próximos passos: Hub Empresarial (card upsell) / Solução Sob Medida
   └─ Meus Projetos (mantém área existente para clientes ativos)
```

## Arquitetura técnica

### Banco de dados

**Migration 1 — Simulador:**
- `mvp_simulations`: descrição, nicho, faturamento, respostas (jsonb), pontuação, perfil, resultado IA (jsonb), `anon_session_id` para casar simulação anônima → user pós-signup, `user_id` (nullable).
- RLS: INSERT público com `anon_session_id`; SELECT só do próprio user; UPDATE via service role no claim.
- Trigger de validação de tamanhos (padrão das outras tabelas).

**Migration 2 — Mapa mental:**
- `mind_map_nodes`: `user_id`, `simulation_id`, `parent_id` (nullable, autoref), `label`, `note` (texto livre da ideia), `category` (Problema | Cliente | Oferta | Canal | Métricas | Riscos | custom), `position_x`, `position_y`, `color`.
- `mind_map_edges`: `user_id`, `source_node_id`, `target_node_id`.
- `mind_map_tickets`: `user_id`, `name`, `color`, `description`.
- `node_tickets`: tabela de junção `node_id` ↔ `ticket_id`.
- RLS: tudo restrito a `auth.uid() = user_id`.

### Edge functions

1. **`generate-mvp-plan`** — recebe respostas, chama Lovable AI (Gemini Flash) com tool calling → JSON estruturado (veredito, mapa markdown, cronograma, tempos). Persiste na simulação.
2. **`claim-simulation`** — após signup, vincula `anon_session_id` → `user_id`. Cria os 6 nós-raiz iniciais do mapa mental a partir do resultado da IA (Problema, Cliente, Oferta, Canal, Métricas, Riscos).

### Frontend

**Rota pública `/area-cliente`** (substitui o redirecionamento atual da "área de cliente"):
- Não exige auth.
- Hero + simulador embutido (state machine das 5 telas).
- Botão "Já tenho conta" no canto → `/auth/login`.

**Rota pública `/auth/login` e `/auth/signup`:**
- Adicionar botão "Continuar com Google" (via `supabase--configure_social_auth`).
- Após signup com `anon_session_id` na URL/localStorage → chama `claim-simulation`.

**`/dashboard` reformulado:**
1. Bloco "Seu plano de MVP" (resultado da última simulação) com Markmap embutido.
2. **Mapa Mental Interativo (componente `IdeaCanvas`)** — usa **React Flow** (`reactflow`):
   - Nós customizados: círculos coloridos por categoria/ticket (estilo Obsidian).
   - Click em nó vazio (com `+`) → modal para escrever ideia.
   - Click em nó preenchido → modal de edição (texto, tickets, cor).
   - Drag livre, criar conexões arrastando handle.
   - Mini-map e zoom controls.
   - Salvar posições com debounce em `mind_map_nodes.position_x/y`.
3. **Sidebar de Tickets** (drawer lateral à direita do canvas):
   - Lista de tickets do usuário com cor.
   - Clique no ticket → expande lista de ideias (nós) marcadas com ele.
   - Botão "+ Novo ticket" → modal (nome + cor).
4. CTAs: "Próximo passo: Hub Empresarial" e "Quero ajuda do Luciano (Solução sob medida)".
5. Seção "Meus Projetos" mantida ao final para clientes ativos.

### Bibliotecas a instalar

- `reactflow` (canvas de mapa mental, suporta drag, conexões, mini-map)
- `markmap-lib` + `markmap-view` (visualização do plano gerado pela IA)
- Já temos: `zod`, `framer-motion`, `lucide-react`, shadcn (Drawer, Dialog, Popover)

### Atualizações de rotas e navegação

- `App.tsx`: adicionar rota pública `/area-cliente`.
- Sidebar do dashboard: adicionar item "Mapa de Ideias" e "Meu Plano MVP".
- `NotionReferrerBanner` e `/proximo-passo`: passar a apontar para `/area-cliente`.
- Botões de "Login/Área do cliente" no header do site: redirecionar para `/area-cliente` (não direto ao `/auth/login`).

## Etapas de implementação

### Fase A — Simulador (gate de entrada)
1. Migration `mvp_simulations` + RLS + trigger de validação.
2. Edge function `generate-mvp-plan` (Lovable AI + tool calling).
3. Habilitar Google OAuth + botão "Continuar com Google" no signup/login.
4. Página `/area-cliente` com 4 telas + paywall.
5. Edge function `claim-simulation` + redirect pós-signup.
6. Atualizar Banner Notion e Próximo Passo para apontar para `/area-cliente`.

### Fase B — Pós-login no Dashboard
7. Reformular `/dashboard`: bloco "Seu Plano MVP" com Markmap do resultado.
8. Migrations `mind_map_nodes`, `mind_map_edges`, `mind_map_tickets`, `node_tickets` + RLS.
9. Componente `IdeaCanvas` com React Flow (nós, drag, conexões, mini-map).
10. Modais de criar/editar ideia + atribuir tickets.
11. Sidebar de Tickets (Drawer) com lista expandível de ideias por ticket.
12. CTAs de upsell para Hub Empresarial e Solução Sob Medida.
13. Instrumentar analytics: `simulador_iniciado`, `simulador_concluido`, `paywall_visto`, `signup_pos_simulador`, `mapa_no_criado`, `ticket_criado`.

## Não entra agora (futuras fases)
- Geração de PDF
- Sequência de emails (D+1, D+3, D+7)
- LinkedIn OAuth (não suportado nativamente)
- Webhook WhatsApp para Luciano
- Compartilhamento público do mapa mental
- Confetti / gamificação

## Riscos e mitigações
- **Performance do canvas com muitos nós:** React Flow lida bem até centenas de nós; usar `nodesDraggable` controlado e debounced save.
- **Custo IA:** Gemini Flash é barato; cachear por `anon_session_id`.
- **Quebrar fluxo de clientes existentes:** Dashboard mantém "Meus Projetos" intacto.
- **Atrito no paywall:** Google 1-clique reduz; veredito parcial cria curiosidade.

Confirma esse plano para eu começar pela Fase A?
