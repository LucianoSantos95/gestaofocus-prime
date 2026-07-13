
# Plano: aumentar fluxo do site Focus Gestão

## Diagnóstico honesto (Semrush, base BR)

O site hoje tem **8 keywords indexadas no Brasil**, tráfego orgânico estimado em **~0/mês**, e nenhuma posição no top 10. Isso muda a estratégia: não é "otimizar tráfego existente" — é **construir tráfego do zero**. SEO real leva 3-6 meses para render. A parte social/distribuição pode gerar tráfego em semanas.

Melhores posições atuais:
- `hub empresarial` — posição 19 (90 buscas/mês) ← alvo #1, quase página 1
- `metodo focus tree` — posição 20 (210 buscas/mês) ← blog post ranqueando
- `focus business` — posição 52 (170/mês)

## O que vamos fazer

### 1. Conectar Google Search Console (conector Lovable)
Motivo: precisamos ver as **queries reais que geram impressão** no Google Search (Semrush só mostra top-100 ranqueados; Search Console mostra o que já aparece em busca mesmo sem clique). Isso vira base para otimização de títulos e novos posts.

Ação: acionar `standard_connectors--connect` com `google_search_console`. Após conectado:
- Criar dashboard admin em `/admin/seo` (restrito ao owner oluciano, seguindo memória de admin restriction)
- Listar top 20 queries por impressão, CTR, posição média
- Listar top páginas com impressão sem clique (oportunidade de reescrever título)
- Rodar via edge function (server-side, headers gateway)

### 2. Conectar LinkedIn para auto-distribuir blog posts
Motivo: você tem 50+ posts de blog parados sem distribuição. LinkedIn é onde estão agências, consultorias e prestadores de serviço (seu ICP).

Ação: acionar `standard_connectors--connect` com `linkedin`. Após conectado:
- Criar página admin `/admin/distribuir` com lista dos posts do blog
- Botão "Publicar no LinkedIn" que dispara edge function `publish-linkedin` chamando `POST v2/ugcPosts` via gateway
- Template: título do post + primeiro parágrafo + link canônico + hashtags fixas (#gestao #pme #consultoria)
- Log em nova tabela `linkedin_posts` (id, blog_slug, posted_at, linkedin_urn)

Nota: LinkedIn App User Connector requer scope `w_member_social`. Publicações saem da conta que você conectar.

### 3. Otimizações SEO imediatas (sem conector novo, usando Semrush)
Enquanto conectores acima são setados, atacar quick wins:

**a) Empurrar `/hub-empresarial` da posição 19 → top 10**
- Rodar `page_analysis` na URL para ver keyword cluster completo
- Reescrever `<title>` e meta description usando "hub empresarial" como termo principal (hoje o title provavelmente não bate)
- Adicionar seção H2 respondendo "o que é hub empresarial" (SEO on-page para o termo exato)

**b) Empurrar `/blog/metodo-pessoal-produtividade` da posição 20 → top 10**
- Mesma abordagem: analisar keywords secundárias, reforçar "método focus tree" no title/H1

**c) Rodar `competitive_analysis` para achar keyword gaps**
- Identificar 10-15 termos que concorrentes ranqueiam e você não → gerar pauta de novos posts

### 4. Newsletter recorrente (Resend, já integrado — opcional fase 2)
Você mencionou 3 prioridades e não escolheu newsletter. Deixando fora deste plano. Se quiser depois, só pedir.

## Ordem de execução

1. Trigger `connect` para Google Search Console → você aprova
2. Trigger `connect` para LinkedIn → você aprova
3. Criar edge functions + página admin `/admin/seo` (Search Console dashboard)
4. Criar edge function + página admin `/admin/distribuir` (LinkedIn posting)
5. Rodar Semrush `page_analysis` nas 2 páginas prioritárias e reescrever títulos/H1s
6. Rodar Semrush `competitive_analysis` e entregar lista de pautas

## Detalhes técnicos

- **Search Console**: chamadas via `https://connector-gateway.lovable.dev/google_search_console/webmasters/v3/searchanalytics/query`, filtrando por siteUrl retornado de `/sites`. Property precisa estar verificada na conta Google que conectar.
- **LinkedIn**: chamadas via `https://connector-gateway.lovable.dev/linkedin/v2/ugcPosts`. Precisa do URN do author (`GET /v2/userinfo`).
- **Admin gating**: reusar padrão `has_role(auth.uid(), 'admin')` já existente na base para as duas páginas admin.
- **Tabela nova**: `public.linkedin_posts` com RLS admin-only + GRANT authenticated/service_role conforme padrão do projeto.
- **Escopo LinkedIn**: reconfirmar `w_member_social` no client do connector (workspace admin faz isso).

## Fora de escopo (não vamos mexer)
- Google Ads / paid media (você não pediu, e memória `paid-ads-viability` diz só depois de reduzir bounce)
- Trocar stack de conteúdo (blog fica como está)
- Newsletter Resend (fase 2)
- Alterar copy dos serviços principais
