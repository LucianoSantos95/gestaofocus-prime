

# Plano: Reescrever Hub Empresarial como Landing Page SaaS (Estilo ExamAI)

## Contexto

O Hub Empresarial **nao e mais um template de Notion**. E uma **plataforma SaaS de gestao para PMEs** construida na Lovable. A pagina atual sera completamente reescrita do zero, seguindo fielmente a estrutura e o estilo visual do ExamAI (https://examai.lovable.app/), adaptado as cores Focus (azul HSL 213 94% 68%, fundo dark).

---

## Estrutura da Nova Pagina (inspirada no ExamAI)

### Secao 1 -- Hero (igual ao ExamAI)
- Logo Focus + nome "Hub Empresarial" no topo
- H1 gigante (text-5xl a text-7xl): "Gestao Completa para Pequenas e Medias Empresas"
- Badge "AO VIVO" com avatares e contador de usuarios ativos (ex: "2.847+ empresas ativas")
- Subtitulo: "CRM, Financeiro, Projetos e RH em uma unica plataforma. Para voce focar no que importa: crescer."
- CTA principal: "Comece Gratuitamente" (link para /auth/signup)
- Glow radial roxo/azul atras do titulo (estilo ExamAI)

### Secao 2 -- Mockup do App (igual ao ExamAI)
- Screenshot/mockup flutuante do dashboard do Hub Empresarial
- Borda arredondada com sombra e glow sutil
- Mostra sidebar + dashboard com cards de modulos (similar ao mockup do ExamAI)
- Construido em HTML/CSS puro (nao imagem), com cards representando o painel

### Secao 3 -- "Reimagine Seu Fluxo de Trabalho" (Features Showcase)
- H2: "Reimagine a Gestao da Sua Empresa"
- Subtitulo: "Mais que ferramentas. Uma forma completamente nova de gerenciar seu negocio."
- 5-6 feature cards interativos no estilo ExamAI:
  - **CRM Inteligente**: Funil visual, leads organizados, pipeline de vendas
  - **Financeiro Completo**: Fluxo de caixa, DRE, contas a pagar/receber
  - **Gestao de Projetos**: Kanban, tarefas, cronograma, responsaveis
  - **RH & Pessoas**: Onboarding, vagas, avaliacoes
  - **Dashboards em Tempo Real**: Metricas, graficos, saude do negocio
  - **Automacoes**: Processos no piloto automatico
- Cada card com mini-mockup visual inline (badges, barras de progresso, icones) como o ExamAI faz

### Secao 4 -- Prova Social (Marquee de Depoimentos)
- H2: "Confiam em nos 2.000+ Empresas"
- Subtitulo com badge animado
- Grid de depoimentos em marquee horizontal infinito (estilo ExamAI com 3 fileiras animadas)
- Cada depoimento: avatar (iniciais), nome, cargo, quote

### Secao 5 -- "Ferramentas Profissionais. Zero Complexidade."
- Grid de 4-6 cards com features tecnicas:
  - **Ultra Rapido**: Metricas de velocidade (criar orcamento 2min, gerar relatorio 30s)
  - **Modulos Prontos**: Lista dos 7 modulos inclusos
  - **Inteligencia de Dados**: Graficos e insights automaticos
  - **Seguranca Total**: Backup automatico, dados blindados
- Cada card com mini-visualizacao interativa (barras, numeros, icones)

### Secao 6 -- Pricing (Planos)
- H2: "Planos que crescem com voce"
- 2-3 cards de planos:
  - **Gratuito**: Ate 1 usuario, modulos basicos, "Comece Gratis"
  - **Pro** (destaque): Usuarios ilimitados, todos os modulos, suporte prioritario, R$ 97/mes
  - **Enterprise**: Customizacao, API, suporte dedicado, "Fale Conosco"
- Card Pro com borda glow e badge "Mais Popular"

### Secao 7 -- FAQ
- Estilo ExamAI com emojis nos titulos
- Perguntas adaptadas para SaaS:
  - "O que e o Hub Empresarial?"
  - "Quanto custa?"
  - "Posso testar gratis?"
  - "Meus dados estao seguros?"
  - "Funciona no celular?"
  - "Posso cancelar a qualquer momento?"

### Secao 8 -- CTA Final + Contato
- H2: "Pronto para transformar sua gestao?"
- CTA grande: "Comece Gratuitamente" (link /auth/signup)
- Cards de contato: Email, WhatsApp, Agendar Demo (estilo ExamAI)

---

## Detalhes Tecnicos

### Arquivo a reescrever:
- `src/pages/HubEmpresarial.tsx` -- Reescrita completa do zero

### Mudancas principais vs. versao atual:
1. **Remover todas as referencias ao Notion** -- nao e mais template
2. **Remover link Stripe de R$ 349** -- agora e SaaS com signup gratuito
3. **CTA principal aponta para `/auth/signup`** em vez de link externo Stripe
4. **Novo conteudo** -- textos, features, pricing adaptados para modelo SaaS
5. **Visual ExamAI** -- mockup flutuante do app, marquee de depoimentos, feature cards com mini-visualizacoes inline, glow roxo/azul

### Estilo Visual (fiel ao ExamAI):
- Fundo dark (bg-background)
- Glow radial atras do hero (blur-3xl, primary/20)
- Mockup do app com borda arredondada e sombra
- Cards com bg-card/50, backdrop-blur-sm, border sutil
- Marquee de depoimentos com animacao CSS infinita (3 fileiras)
- Feature cards com mini-UI inline (barras de progresso, badges, numeros)
- Tipografia hero extra-large com gradient-text
- Botoes com gradiente e hover glow

### Nenhum outro arquivo precisa ser alterado:
- A rota `/hub-empresarial` ja existe no App.tsx
- O item "Hub Empresarial" ja esta no Navigation.tsx
- Apenas o conteudo da pagina muda

