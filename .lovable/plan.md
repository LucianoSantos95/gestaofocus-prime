## Páginas a remover

**Auth (login e tudo dentro):**

- `src/pages/auth/Login.tsx`
- `src/pages/auth/SignUp.tsx`
- `src/pages/auth/ForgotPassword.tsx`
- `src/components/auth/GoogleSignInButton.tsx`

**Dashboard (área logada, depende de auth):**

- `src/pages/dashboard/Dashboard.tsx`, `Projects.tsx`, `Analytics.tsx`, `Support.tsx`, `Settings.tsx`, `Lighthouse.tsx`
- `src/pages/AreaCliente.tsx`
- `src/components/ProtectedRoute.tsx`, `src/components/AdminRoute.tsx`
- `src/components/dashboard/*` (DashboardLayout, Sidebar, HeroBanner, MVPSimulatorPanel, ProjectCard, ResourceCarousel, TemplateCard, TalkToProBubble, DashboardChatButton, MvpResultStructured)
- `src/hooks/useUserRole.tsx`

**Outras páginas:**

- `src/pages/Documentacao.tsx` (`/docs`)
- `src/pages/ParaIAs.tsx` (`/llms` e `/para-ias`)
- `src/pages/ProximoPasso.tsx` (`/proximo-passo`)
- `src/pages/SistemasGratuitos.tsx` (`/sistemas-gratuitos`)

## Ajustes no código

1. `**src/App.tsx**` — remover todos os imports lazy e `<Route>` correspondentes (auth, dashboard, docs, llms, para-ias, proximo-passo, sistemas-gratuitos); remover `DashboardChatButton` lazy import e flags `isDashboard`/`isAuth` (simplificar `AppLayout`).
2. `**src/components/Navigation.tsx**` — remover links/botões "Entrar", "Cadastrar", "Dashboard", "Próximo passo", "Sistemas gratuitos", "Docs", "Para IAs" se existirem.
3. `**src/components/Footer.tsx**` — idem (limpar links para rotas removidas).
4. Buscar e remover referências restantes (`rg`) em outros componentes (ex.: CTAs apontando para `/proximo-passo`, `/sistemas-gratuitos`, `/auth/*`, `/dashboard`) — substituir por `/contato` ou remover o botão conforme contexto.
5. `**scripts/generate-sitemap.js**` + `**public/sitemap.xml**` — remover `/sobre-focus` já não está; remover `/llms`, `/auth/login`, `/auth/signup`, e quaisquer entradas das páginas removidas; regenerar sitemap.
6. `**public/robots.txt**` / `**public/llms.txt**` / `**public/llms-full.txt**` — remover menções a `/llms`, `/para-ias`, `/docs`, `/proximo-passo`, `/sistemas-gratuitos`.
7. **NotFound** continua tratando rotas inválidas — qualquer link antigo cai em 404 limpo.

## Itens a confirmar

- **Edge functions** ligadas só ao dashboard (`generate-mvp-plan`, `claim-simulation`, `pagespeed`) ficam no projeto sem uso. Manter ou também deletar? - pode deletar
- **ChatWidget** e popups (HubFocusPopup, ActionPlanPopup, etc.) que abrem rotas removidas — devo redirecionar CTAs para `/contato`? - Sim
- Confirma que **não quer manter nenhuma forma de login** (remoção total de auth do site)? - Confirmado