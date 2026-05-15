## 1. Remover permanentemente a página de Cases

Como os cases atuais são fictícios, removemos a rota e todas as referências públicas. Quando você tiver cases reais, basta restaurar o arquivo (mantenho `caseStudiesData.ts` e `CaseStudyArticle.tsx` versionados, sem rota ativa, para reutilizar depois — ou removo tudo, se preferir; me avise).

**Arquivos a editar:**
- `src/App.tsx` — remover `import Cases` e a `<Route path="/cases" ... />`. Também remover `/cases` da condição `isSolucoes` que esconde nav/footer.
- `src/components/Navigation.tsx` — remover o item `{ name: "Cases", href: "/cases" }` do menu.
- `scripts/generate-sitemap.js` — remover entrada `/cases`.
- `public/sitemap.xml` — remover bloco `<url>` do `/cases` (será regenerado, mas atualizo manualmente também).
- `public/llms.txt` e `public/llms-full.txt` — remover linhas que mencionam `/cases`.
- `src/pages/Cases.tsx` — excluir arquivo.

Mantém-se `src/components/cases/*` no repositório (sem rota) para reuso futuro. Posso excluir tudo se preferir — me diga.

## 2. Ajustar tamanho da tela de login

Hoje o card de login tem largura fixa `max-w-md` (~448px) e fica visualmente pequeno em telas grandes, e em telas baixas pode cortar. Vou torná-lo responsivo:

- Container externo: trocar `min-h-screen flex items-center` por layout que respeita o viewport — `min-h-[100dvh]` (corrige o problema de altura em mobile com barra do navegador) e padding vertical adaptável (`py-8 md:py-12`).
- Card de login: largura adaptativa — `max-w-md` em mobile, `max-w-lg` em telas ≥ md (570px). Padding interno também responsivo (`p-6 md:p-8`).
- Espaçamento entre logo/título/card escala suavemente (`mb-6 md:mb-8`).
- Aplico as mesmas mudanças em `src/pages/auth/SignUp.tsx` e `src/pages/auth/ForgotPassword.tsx` para manter coerência visual entre as três telas de auth.

**Arquivos a editar:**
- `src/pages/auth/Login.tsx`
- `src/pages/auth/SignUp.tsx`
- `src/pages/auth/ForgotPassword.tsx`

## Detalhes técnicos

- `100dvh` (dynamic viewport height) evita o "corte" da tela em mobile que `100vh` causa quando a barra do Safari aparece/some.
- A rota `/cases` já some do sitemap antes do próximo build; o Google leva alguns dias para reindexar — opcionalmente posso adicionar redirect 301 de `/cases` para `/` via `public/_headers`, mas para uma página com pouco tráfego não é crítico.
- Nenhuma mudança em backend, banco de dados ou autenticação.
