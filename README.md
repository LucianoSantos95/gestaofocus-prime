# Site Focus

Site institucional da [Focus Inteligente](https://focusinteligente.com.br):
consultoria de operações com IA para agências, consultorias e prestadores de
serviço. A home apresenta a oferta de **sistemas sob medida** e leva ao pedido
de diagnóstico gratuito.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | home e captura de contato |
| `/solucoes-sob-medida` | a oferta de consultoria |
| `/sobre` | quem está por trás |
| `/faq`, `/ajuda`, `/status` | perguntas frequentes, central de ajuda e status |
| `/privacidade`, `/termos`, `/cookies` | páginas legais |
| `/login` | entrar ou criar conta (e-mail e senha ou Google) |

As páginas de produtos e o blog foram retirados do ar em agosto de 2026
(`/blog/*`, `/hub-empresarial`, `/cases` e outras): essas rotas redirecionam para
a home ou para a oferta atual, para aproveitar o tráfego já indexado. A lista
completa está em `src/App.tsx`.

## Stack

React 18, TypeScript, Vite 5, React Router 6, Tailwind CSS 3 com shadcn/ui,
TanStack Query e Framer Motion. Backend em Supabase (autenticação e Edge
Functions). Construído com a plataforma Lovable.

## SEO e visibilidade em IAs

- `public/sitemap.xml`, gerado por `scripts/generate-sitemap.js`
  (`node scripts/generate-sitemap.js`).
- `public/robots.txt`.
- `public/llms.txt` e `public/llms-full.txt`: descrição do site e da oferta em
  texto simples, para assistentes de IA.
- Metadados por página e rastreamento de eventos em `src/lib/analytics.ts`.

## Estrutura

```
src/
  pages/         páginas (home, oferta, sobre, FAQ, ajuda, status, legais)
  components/    seções, navegação, rodapé e ui (shadcn)
  lib/           analytics, modal de contato e ferramentas MCP
  integrations/  clientes do Supabase e da Lovable
supabase/
  functions/     Edge Functions
  migrations/    esquema do banco
scripts/         geração do sitemap
docs/            guias técnicos (analytics, performance, imagens)
  historico/     registros das fases de implementação anteriores
```

Parte das Edge Functions (`generate-mvp-plan`, `generate-action-plan`,
`claim-simulation`, `chat`) é herança de funcionalidades já retiradas da home
e não é usada pelas páginas atuais.

## Rodando localmente

Pré-requisitos: Node 20+ (ou Bun).

```bash
bun install        # ou: npm install
bun run dev        # ou: npm run dev
```

O `.env` versionado contém apenas chaves **públicas** do Supabase (URL, chave
publishable e ID do projeto). Segredos entram em `.env.local`, que o Git
ignora, ou no painel do Lovable/Supabase, e nunca no repositório.

## Scripts

| Comando | O que faz |
|---|---|
| `bun run dev` | servidor de desenvolvimento |
| `bun run build` | build de produção |
| `bun run preview` | serve o build localmente |
| `bun run lint` | ESLint |

## Qualidade

O site é de conteúdo e não tem regra de negócio própria, então a verificação é o
build de produção e a checagem de tipos (`tsc -p tsconfig.app.json --noEmit`).

## Documentação

- [`docs/ANALYTICS_SETUP.md`](docs/ANALYTICS_SETUP.md): configuração de analytics.
- [`docs/PERFORMANCE_OPTIMIZATIONS.md`](docs/PERFORMANCE_OPTIMIZATIONS.md):
  otimizações de performance aplicadas.
- [`docs/WEBP_CONVERSION_GUIDE.md`](docs/WEBP_CONVERSION_GUIDE.md): conversão de
  imagens para WebP.
- [`docs/historico/`](docs/historico): registros das fases 1 e 3.
