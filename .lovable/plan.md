
# Redesign Visual Global — Estilo Obscur

Reformulação completa da identidade visual da Focus Inteligente, mantendo **100% do conteúdo, textos, rotas, lógica e integrações Supabase intactos**. Apenas tokens, tipografia, espaçamentos, cards, navbar, hero e footer mudam.

## Escopo

Aplicar o design system Obscur (tipografia DM Sans/DM Mono, paleta dark #060608, accent azul #4F7EFF, grid decorativo, bento, mockup de browser, métricas em strip, badges mono) de forma consistente em todo o site.

## Etapas

### 1. Fundação (tokens + tipografia)
- `index.html`: trocar Google Fonts atual (Plus Jakarta Sans) por `DM Sans` (300/400/500/700 + itálico 300) e `DM Mono` (400/500).
- `src/index.css`:
  - Substituir `:root` pelas variáveis `--bg`, `--bg2`, `--bg3`, `--line`, `--line2`, `--text`, `--text2`, `--text3`, `--accent`, `--accent2`.
  - Mapear esses valores também nas variáveis HSL do shadcn (`--background`, `--card`, `--border`, `--primary` etc.) para preservar todos os componentes existentes.
  - Hierarquia tipográfica (h1/h2/h3/body/labels) conforme especificação.
  - Adicionar `body::before` com textura de ruído SVG (opacity 0.025).
- `tailwind.config.ts`: registrar `fontFamily.sans = ['DM Sans', ...]` e `fontFamily.mono = ['DM Mono', ...]`.

### 2. Classes utilitárias globais (`@layer components`)
Adicionar no `index.css` para reuso:
- `.hero-grid`, `.corner` + variantes `tl/tr/bl/br`
- `.hero-eyebrow`, `.sec-label`, `.card-num`
- `.btn-main`, `.btn-ghost` (manter `.btn-hero`, `.btn-cta` como aliases visualmente atualizados)
- `.card` (background `var(--bg2)`, border `var(--line)`)
- `.bento` grid 12 colunas, 180px rows
- `.mockup-outer` + `.browser-chrome` + 3 dots macOS
- `.metrics-row` + `.mr-item` + `.mr-num` + `.mr-label` (dot no canto)
- `.tc-featured`, `.tc` (depoimentos)
- `.pc-featured`, `.pc-popular`, `.pc-list li::before` (pricing)
- `.media-strip`, `.ms-label`, `.ms-logos`, `.ms-logo`
- `.sv-ring`, `.sb`, `.sb-w`, `.sb-b`, `.sb-y` (página Sobre)
- `@keyframes fadeUp` + classes `.anim-up`, `.anim-up-1`, `.anim-up-2`, `.anim-up-3` para entrada do hero

### 3. Componentes globais
- `Navigation.tsx`: altura 60px, fundo `rgba(6,6,8,0.88)` blur 24px, logo com bolinha accent + "Focus", links em DM Sans 13px, tag mono "São Paulo · BR" antes do CTA, botão "Área do Cliente" no padrão `.btn-main` discreto.
- `Footer.tsx`: borda topo `var(--line)`, layout horizontal, logo com bolinha, links 12px `var(--text3)`, copyright em DM Mono 10px.

### 4. Hero das páginas principais
Aplicar grid decorativo + cornermarks + eyebrow mono + headline 300/700 + CTA `.btn-main` em:
- `src/pages/Index.tsx` (homepage)
- `src/pages/HubEmpresarial.tsx`
- `src/pages/SolucoesSobMedida.tsx`
- `src/pages/AboutFocus.tsx`
- `src/components/HeroSection.tsx`
- `src/components/hub-focus/HubFocusHero.tsx`

Textos permanecem; só envolver com marcação nova e classes.

### 5. Seções repetidas
- Substituir títulos "Serviços", "Depoimentos", "Planos" etc. pelo padrão `.sec-label` (mantendo o texto original).
- Cards de features/módulos: aplicar `.card` + `.card-num` (01, 02, 03…) onde já existem ícones numéricos implícitos. Ícones coloridos viram numeração mono.
- Bento grid na seção de módulos do Hub e features da home.
- Screenshot do produto envolvido em `.mockup-outer` + `.browser-chrome`.
- Strip de métricas (`HubFocusSocialProof`, métricas da home) virando `.metrics-row` horizontal.
- Depoimentos (`HeroTestimonial`, `TrustedBySection`) usando `.tc-featured` + `.tc`.
- Pricing do Hub Empresarial usando `.pc-featured` + `.pc-popular` + lista com `↳`.
- Adicionar `.media-strip` com labels: Notion Partner, Lovable L4, Lean Six Sigma, Stripe, Supabase (após hero da home ou antes do footer).

### 6. Página Sobre (`AboutFocus.tsx`)
- Layout grid 2 colunas.
- Lado esquerdo: avatar central + 2 `.sv-ring` rotacionando.
- Badges de credencial reescritas como `.sb-w`, `.sb-b`, `.sb-y`.

### 7. Espaçamento e responsividade
- Seções: `padding: 120px 48px` desktop / `80px 24px` mobile.
- Container interno `max-width: 1100px`.
- Bento collapse para 1 coluna em <768px.

## Detalhes técnicos

- **Sem alterações de conteúdo/lógica/Supabase**. Apenas markup estrutural mínimo (wrappers de classe) e CSS.
- Os tokens HSL do shadcn serão recalibrados para apontar para a nova paleta — assim Button, Card, Dialog, Input etc. herdam automaticamente sem precisar editar cada componente UI individual.
- `Plus Jakarta Sans` será removida do `index.html`.
- Os utilitários `.btn-hero` e `.btn-cta` existentes serão mantidos como aliases visuais do novo `.btn-main` para não quebrar dezenas de chamadas espalhadas (CTA vermelho do "Sob Medida" segue como destaque diferenciado).
- `noise overlay` via `body::before` com `z-index: 0` e `pointer-events: none`; verificar se algum `position: relative` em layout root precisa ajustar z-index (Navigation já é `fixed z-50`).
- Animações `fadeUp` substituem as atuais `fade-in`/`slide-up` no hero; demais keyframes existentes permanecem.

## Arquivos a editar (estimativa)

```text
index.html
tailwind.config.ts
src/index.css
src/components/Navigation.tsx
src/components/Footer.tsx
src/components/HeroSection.tsx
src/components/hub-focus/HubFocusHero.tsx
src/components/hub-focus/HubFocusModules.tsx
src/components/hub-focus/HubFocusSocialProof.tsx (se aplicável)
src/components/HeroTestimonial.tsx
src/components/TrustedBySection.tsx / TrustedByMini.tsx
src/components/ServiceCard.tsx
src/pages/Index.tsx
src/pages/HubEmpresarial.tsx
src/pages/SolucoesSobMedida.tsx
src/pages/AboutFocus.tsx
```

## Fora de escopo

- Páginas autenticadas (dashboard, área cliente) herdarão os tokens automaticamente via shadcn, sem reestilização adicional.
- Blog: herda tipografia e tokens; sem refator visual dedicado nesta passada.
- Nenhuma mudança em edge functions, RLS, formulários, redirecionamentos de waitlist.
