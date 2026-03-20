

## Status Atual — Prontidão para Google AdSense

### O que já foi feito
- 18 artigos migrados para o padrão novo (SEOHead, ReadingProgressBar, etc.)
- BlogCTA corrigido para `/solucoes-sob-medida`
- Segurança reforçada (CSP, rate limiting, CORS)

### Problemas que ainda bloqueiam a aprovação

#### 1. Links quebrados para `/sistemas-gratuitos` (CRÍTICO)
O BlogCTA foi corrigido, mas **ainda existem 7 arquivos** com links para `/sistemas-gratuitos` — rota que **não existe** no App.tsx:
- `src/pages/blog/ReunioesProdutivas.tsx`
- `src/pages/blog/OrganizarTarefasDiaDia.tsx`
- `src/pages/blog/MatrizEisenhower.tsx`
- `src/pages/blog/GestaoProjetosNotion.tsx`
- `src/pages/ListaEsperaSucesso.tsx`
- `src/components/ServicesComparison.tsx`
- `src/components/AIRecommendationPopup.tsx`

Nota: a página `SistemasGratuitos.tsx` existe como arquivo, mas não tem rota no App.tsx.

#### 2. Sem página de Contato (MÉDIO)
Não existe rota `/contato` — o AdSense exige forma clara de contato.

---

### Plano de Correção

**1. Resolver `/sistemas-gratuitos`** — duas opções:
- (a) Adicionar a rota no App.tsx apontando para `SistemasGratuitos.tsx` (já existe o componente)
- (b) Substituir todos os links por `/solucoes-sob-medida`

Recomendo **(a)** — o componente já existe e funciona.

**2. Criar página de Contato** — página simples com formulário (nome, email, mensagem) e informações de contato (WhatsApp, email). Adicionar rota `/contato` no App.tsx.

**3. Adicionar link de Contato no Footer** — para facilitar a descoberta pelo Google.

### Arquivos a modificar
- `src/App.tsx` — adicionar rotas `/sistemas-gratuitos` e `/contato`
- `src/pages/Contato.tsx` — criar página de contato
- `src/components/Footer.tsx` — adicionar link para `/contato`
- `public/sitemap.xml` — adicionar `/contato` e `/sistemas-gratuitos`

### Após essas correções
O site estará em condições de ser submetido ao AdSense. Todos os requisitos principais estarão cobertos: conteúdo consistente, links válidos, páginas obrigatórias (Privacidade, Termos, Cookies, Sobre, Contato), SEO técnico, e estrutura editorial profissional.

