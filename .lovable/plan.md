

# Atualizar Homepage: De "Notion-first" para "Plataforma de Gestao + Notion"

## Contexto

A homepage atual menciona "Notion" muitas vezes e posiciona a Focus quase exclusivamente como empresa de templates Notion. Com o Hub Focus (SaaS) em beta, a pagina precisa refletir que Notion e templates continuam existindo, mas a Focus agora e uma plataforma de gestao mais ampla.

## Mudancas por Secao

### 1. SEO Head (meta tags)

| Campo | Antes | Depois |
|-------|-------|--------|
| description | "Organize sua empresa com sistemas em Notion, IA e produtividade..." | "Plataforma de gestao empresarial com IA. Organize financas, projetos, clientes e equipe. Templates em Notion, sistemas prontos e o Hub Focus Beta gratuito." |
| keywords | Apenas Notion | Adicionar: "plataforma de gestao, software gestao empresarial, gestao online, hub focus, SaaS gestao" mantendo os de Notion |

### 2. HERO (H1)

| Elemento | Antes | Depois |
|----------|-------|--------|
| H1 | "Gestao empresarial inteligente com **Notion e IA**" | "Gestao empresarial inteligente com **IA**" |
| Subtitulo | "Sistemas prontos em Notion, templates gratuitos e uma futura area Pro..." | "Plataforma de gestao para pequenas empresas. Organize financas, projetos e processos com mais produtividade -- com templates em Notion e o Hub Focus." |
| CTA primario | "Ver sistemas para empresas" (vai para /hub-empresarial) | "Comece Gratis" (link externo appfocus.lovable.app) |
| CTA secundario | "Baixar templates gratuitos" | "Ver templates em Notion" (mantido para /sistemas-gratuitos) |
| Badge inferior | **MANTER**: "Criador destaque no marketplace oficial do Notion Brasil" | Sem alteracao |
| Imagem alt | **MANTER**: "Dashboard de gestao empresarial em Notion - Hub Empresarial PRO Focus" | Sem alteracao |

### 3. PARA QUEM (H2)

| Elemento | Antes | Depois |
|----------|-------|--------|
| Subtitulo da secao | "Sistemas em Notion e templates para quem quer organizar..." | "Ferramentas e sistemas para quem quer organizar a gestao do negocio de forma simples" |
| Card 1 texto | "...Nossos sistemas em Notion ajudam voce..." | "...Nossas ferramentas ajudam voce a ter clareza sobre o que esta acontecendo no seu negocio, sem planilhas confusas." |
| Card 3 texto | "...Os sistemas em Notion da Focus foram pensados..." | "...As solucoes da Focus foram pensadas para quem precisa de organizacao sem burocracia." |

### 4. SOLUCOES DIGITAIS (H2)

| Elemento | Antes | Depois |
|----------|-------|--------|
| H2 | "Solucoes digitais em Notion para gestao empresarial" | "Solucoes digitais para gestao empresarial" |
| Subtitulo | "...sistemas prontos em Notion, pensados para pequenas empresas..." | "...sistemas e ferramentas pensados para pequenas empresas que querem gestao inteligente, com foco em produtividade e clareza." |
| H3 | "Sistemas empresariais em Notion (produtos pagos)" | "Sistemas empresariais (produtos pagos)" |

### 5. TEMPLATES GRATIS (H2)

| Elemento | Antes | Depois |
|----------|-------|--------|
| H2 | "Templates e sistemas gratis em Notion para comecar hoje" | "Templates e sistemas gratis para comecar hoje" |
| Subtitulo | "...veja como sistemas em Notion podem transformar sua gestao." | "...veja como sistemas organizados podem transformar sua gestao." |

### 6. FOCUS PRO / LISTA DE ESPERA -> HUB FOCUS

Substituir secao de lista de espera por apresentacao do Hub Focus (produto ja existe em beta):

| Elemento | Antes | Depois |
|----------|-------|--------|
| Badge | "Em breve" | "Beta Gratuito" |
| H2 | "Focus Pro -- sua area de gestao, IA e aprendizado" | "Hub Focus -- sua plataforma de gestao completa" |
| Subtitulo | "...sera uma area exclusiva com trilhas..." | "Organize financas, projetos, clientes e equipe em um so lugar. 8 modulos integrados, acesso gratuito durante o Beta." |
| Items | Trilhas, conteudos IA, materiais, integracao Notion, atualizacoes | Modulos: Financas, Projetos, CRM, RH, Marketing, Atividades, Processos, Guia |
| Formulario | Lista de espera (nome, email, negocio) | CTA direto "Comece Gratis" para appfocus.lovable.app + CTA secundario "Ver todos os modulos" para /focus-pro |

### 7. POR QUE USAR (H2)

| Elemento | Antes | Depois |
|----------|-------|--------|
| H2 | "Por que usar Notion e IA na gestao da sua empresa" | "Por que usar ferramentas inteligentes na gestao da sua empresa" |
| Item 1 texto | "...Com sistemas em Notion, tudo fica organizado..." | "...Com as ferramentas certas, tudo fica organizado e acessivel." |
| Item 2 texto | "...Notion para empresas permite criar fluxos..." | "...Ferramentas de gestao permitem criar fluxos de trabalho que sua equipe consegue seguir." |
| Item 4 texto | "...Sistemas de gestao em Notion eliminam..." | "...Sistemas de gestao bem estruturados eliminam a necessidade de refazer tarefas e melhoram a produtividade." |

### 8. BLOG (H2)

| Elemento | Antes | Depois |
|----------|-------|--------|
| H2 | "Conteudos sobre gestao empresarial, produtividade e Notion" | "Conteudos sobre gestao empresarial e produtividade" |

### 9. FAQ (H2)

| Elemento | Antes | Depois |
|----------|-------|--------|
| H2 | "Perguntas frequentes sobre gestao com Notion e Focus" | "Perguntas frequentes sobre a Focus" |
| FAQ 1 pergunta | "Preciso saber usar o Notion..." | "Preciso de conhecimento tecnico para usar as solucoes da Focus?" |
| FAQ 1 resposta | Atualizar para mencionar templates Notion E a plataforma Hub Focus |
| FAQ 2 resposta | "...sistemas em Notion, templates e a futura area Focus Pro" | "...templates em Notion, a plataforma Hub Focus e conteudos sobre gestao." |
| FAQ 4 | Sobre Focus Pro "quando sera lancada" | Trocar para: "O que e o Hub Focus?" com resposta sobre o beta gratuito |

### 10. CTA FINAL

| Elemento | Antes | Depois |
|----------|-------|--------|
| H2 | "Comece hoje a organizar a gestao do seu negocio com Notion e IA" | "Comece hoje a organizar a gestao do seu negocio" |
| CTA primario | "Ver sistemas empresariais em Notion" | "Comece Gratis no Hub Focus" (link externo appfocus.lovable.app) |
| CTA secundario | "Baixar templates gratis" | "Ver templates gratis" (mantido) |

---

## Resumo tecnico

- **Arquivo alterado**: `src/pages/Index.tsx` (unico arquivo)
- **Nenhum componente novo** precisa ser criado
- **SEO**: H1 mais amplo captura keywords de "gestao empresarial com IA". Keywords de Notion permanecem em textos secundarios e meta keywords
- **Conversao**: CTAs primarios direcionam para o Hub Focus, secundarios mantidos para templates Notion
- **Secao 5 transformada**: de lista de espera para apresentacao do Hub Focus beta

