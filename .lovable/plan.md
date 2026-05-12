## Objetivo
Reformular a área do cliente para focar no funil de topo (MVP gratuito), removendo seções não essenciais e tornando o Mapa de Ideias mais imersivo.

## Mudanças

### 1. Sidebar (`DashboardSidebar.tsx`)
Remover itens do menu:
- "Meus Projetos" (`/dashboard/projetos`)
- "Biblioteca" (`/dashboard#templates`)
- "Lighthouse" (admin)

Manter apenas: **Início**, **Suporte**, **Configurações**.

### 2. Dashboard (`Dashboard.tsx`)
Reorganizar para mostrar somente:
- Saudação ("Olá, {nome}")
- **Simulador de MVP** (componente novo embutido — mesmo fluxo de `AreaCliente.tsx`, mas já dentro do dashboard pós-login; se o usuário já tem simulação salva, mostra o resultado direto)
- **Mapa de Ideias** (com novo fundo imersivo)

Remover:
- `HeroBanner`
- Seção "Meus Projetos"
- Seção "Templates Gratuitos"

### 3. Simulador embutido pós-login
Criar `src/components/dashboard/MVPSimulatorPanel.tsx`:
- Ao montar, busca a última simulação do usuário em `mvp_simulations`
- Se existe → mostra resultado (markdown, timeline, custos)
- Se não existe → renderiza o mesmo state machine de `AreaCliente.tsx` (info do negócio → 15 perguntas → loading → resultado)
- Reaproveita `generate-mvp-plan` edge function e `mvpSimulator.ts`

### 4. Mapa de Ideias imersivo (`IdeaCanvas.tsx`)
Criar fundo espacial alinhado à paleta (deep navy `hsl(210 15% 3%)` + acentos azul `#1E40AF`):
- Background com gradient radial deep navy → preto + camada de "estrelas" (CSS puro: múltiplos `box-shadow` em pseudo-elemento, ou SVG com pontos aleatórios)
- Sutil nebulosa azul (radial-gradient com baixa opacidade do primary)
- Animação suave de parallax/twinkle (CSS keyframes)
- Substituir o `background` padrão do React Flow (`<Background />`) ou customizar via CSS sobre o container
- Nós com leve glow para destacar contra o fundo escuro
- Manter performance (sem libs pesadas; CSS + SVG)

Atualizar copy da seção no Dashboard: remover menção "estilo Obsidian".

### 5. Remover Assistente Focus
- Remover `<DashboardChatButton />` de onde estiver renderizado (verificar `DashboardLayout` ou `Dashboard`)
- Manter o componente no repo (não usado) ou deletar o import

### 6. Rotas
Manter `/dashboard/projetos` e `/dashboard/lighthouse` registradas (caso acessadas direto), apenas removidas da navegação. Confirmar com usuário se prefere remover as rotas também.

## Arquivos afetados
- `src/components/dashboard/DashboardSidebar.tsx` — remover itens do menu
- `src/components/dashboard/DashboardLayout.tsx` — remover ChatButton se estiver aqui
- `src/pages/dashboard/Dashboard.tsx` — reestruturar conteúdo
- `src/components/dashboard/MVPSimulatorPanel.tsx` — **novo**
- `src/components/mindmap/IdeaCanvas.tsx` — fundo espacial + glow nos nós
- `src/index.css` — keyframes/utilitário para estrelas e nebulosa (se necessário)

## Fora do escopo
- Mudanças no banco de dados
- Edge functions (reaproveita `generate-mvp-plan` e `claim-simulation`)
- Página pública `/area-cliente` (continua igual para topo de funil pré-login)
