

## Mapa de Calor de Cliques

Existem duas abordagens possíveis:

### Opção 1: Integração com ferramenta externa (Recomendado)
Ferramentas como **Microsoft Clarity** (gratuita) ou **Hotjar** (freemium) oferecem mapas de calor visuais profissionais com gravação de sessões. Basta adicionar um script no `index.html`.

- **Microsoft Clarity**: 100% gratuito, sem limite de tráfego, mapas de calor + gravações de sessão
- **Hotjar**: Plano gratuito com até 35 sessões/dia

### Opção 2: Mapa de calor próprio no dashboard
Criar um sistema interno que registra coordenadas de cliques na tabela `analytics_events` e renderiza um overlay visual. Funcional, mas muito mais trabalho e resultado inferior às ferramentas especializadas.

### Plano proposto: Integrar Microsoft Clarity

**1. `index.html`** — Adicionar o script do Clarity no `<head>` (basta o ID do projeto Clarity)

**2. `src/pages/dashboard/Analytics.tsx`** — Adicionar link/nota informando que o mapa de calor está disponível no painel do Clarity

### Pré-requisito
Você precisa criar uma conta gratuita em [clarity.microsoft.com](https://clarity.microsoft.com), criar um projeto e me passar o **Project ID** para eu adicionar o script.

### O que você ganha
- Mapa de calor de cliques, scroll e atenção
- Gravações de sessões reais dos visitantes
- Insights automáticos de UX
- Tudo gratuito e sem limite

