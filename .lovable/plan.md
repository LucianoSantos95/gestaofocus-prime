
# Reconstrução Premium — Estilo Obscur (Híbrido com Cores Focus)

Reconstruir Homepage, Soluções Sob Medida, Hub Empresarial e Sobre no padrão visual do Obscur (obscur-tech.framer.website), mantendo a estrutura técnica/minimalista premium B2B mas trocando o accent azul Obscur (#4F7EFF) pelo **azul Focus #1E40AF** e preservando o **CTA vermelho #EF4444** para conversão.

**Conteúdo, textos, rotas, lógica, Supabase, formulários, RLS, analytics e edge functions permanecem 100% intactos.** Apenas a camada visual e a composição das seções mudam.

## Paleta híbrida final

```text
--bg:    #060608    (fundo Obscur)
--bg2:   #0C0C10    (cards)
--bg3:   #111116    (elevado)
--line:  rgba(255,255,255,0.06)
--line2: rgba(255,255,255,0.10)
--text:  #EBEBEB
--text2: rgba(235,235,235,0.45)
--text3: rgba(235,235,235,0.25)
--accent:    #1E40AF   (azul Focus — substitui #4F7EFF do Obscur)
--accent-2:  rgba(30,64,175,0.12)
--accent-soft: #6D8FE8 (texto sobre tinted bg)
--cta:    #EF4444   (vermelho Focus — CTA de conversão preservado)
```

Atualizar:
- `src/index.css` — trocar `--accent-hex`, `--accent2`, ajustar tokens shadcn `--primary` para HSL do #1E40AF (`220 71% 40%`) e `--ring`; manter `--destructive`/`--cta` no vermelho.
- `tailwind.config.ts` — sem mudanças (tokens via HSL).
- Substituir cor azul `#4F7EFF` → `#1E40AF` em todas as classes utilitárias (`.hero-badge`, `.tc-featured`, `.pc-featured`, `.pc-popular`, `.sb-b`, `.media-strip`, `.mr-item::after`, dot do logo na navbar/footer).

## Etapas

### 1. Recalibrar tokens (paleta híbrida)
- Substituir todas as ocorrências de `#4F7EFF` / `rgba(79,126,255,*)` em `src/index.css` por `#1E40AF` / `rgba(30,64,175,*)`.
- Recalibrar `--primary` shadcn: `220 71% 40%` (#1E40AF).
- Verificar `Navigation.tsx` e `Footer.tsx` (dot do logo usa `var(--accent-hex)`) — já cascateia.
- Manter `--cta` / `--destructive` em vermelho intacto.

### 2. Reconstruir Homepage (`src/pages/Index.tsx`)
Manter todos os textos e CTAs existentes; reescrever a composição visual com seções no padrão Obscur:

```text
1. Hero       — grid decorativo + 4 corner marks + eyebrow mono
                "FOCUS · SISTEMAS PARA AGÊNCIAS" + headline atual com
                palavras-chave em <strong>/<em> + subtítulo + 2 CTAs
                (.btn-main "Falar com especialista" + .btn-ghost "Ver demonstração")
                + animações .anim-up sequenciais
2. Media strip — "EM PARCERIA COM" + Notion Partner · Lovable L4 ·
                 Lean Six Sigma · Stripe · Supabase (já existe StoryTrust)
3. Métricas   — .metrics-row 4 colunas com dot accent
4. Bento      — features principais em 12-col grid (5+4+3 / 4+4+4)
                com .card-num "01" "02" "03"
5. Mockup     — screenshot do produto em .mockup-outer + .browser-chrome
                URL "app.focusinteligente.com.br"
6. Comparativo — Sob Medida vs Hub Empresarial em 2 cards lado a lado
7. Depoimentos — 1 .tc-featured + 2 .tc
8. FAQ         — accordion existente reskinado com .card
9. CTA final   — bloco centralizado com 2 botões
```

### 3. Reconstruir Soluções Sob Medida (`src/pages/SolucoesSobMedida.tsx`)
Posicionamento **produto premium high-ticket**:

```text
1. Hero        — eyebrow "FOCUS CUSTOM · DESENVOLVIMENTO SOB MEDIDA"
                 + headline em peso 300 com palavra "sob medida" em italic 45%
                 + badge "VAGAS ESGOTADAS" em .hero-badge vermelho
                 + CTA .btn-cta "Entrar na Lista de Espera"
                 + .btn-ghost "Ver Hub Empresarial"
                 + grid + corner marks
2. Process     — 5 etapas em .card numerados 01-05 (linha vertical conectando)
3. Bento de    — Cases / Stack / Garantias em grid 12-col
   diferenciais
4. Mockup      — exemplo de produto sob medida em .mockup-outer
5. Pricing     — investimento a partir de X (.card destacado com .pc-featured)
6. Depoimentos — 2 .tc lado a lado (high-ticket social proof)
7. FAQ
8. Lista de espera CTA final
```

### 4. Reconstruir Hub Empresarial (`src/pages/HubEmpresarial.tsx`)
Posicionamento **SaaS B2B premium**:

```text
1. Hero        — eyebrow "HUB EMPRESARIAL · SAAS" + headline + 2 CTAs
                 (.btn-main "Começar agora" + .btn-ghost "Ver demonstração")
                 + grid hero + corner marks
2. Mockup      — screenshot do Hub em .mockup-outer com URL real
                 app.focusinteligente.com.br
3. Section     — "MÓDULOS" em .sec-label, bento 12-col com módulos
                 atuais (Financeiro, Projetos, Clientes, Equipe, etc.)
                 cada card com .card-num + ícone discreto + título + descrição
4. Métricas    — .metrics-row (clientes ativos, módulos, integrações, uptime)
5. Pricing     — 2 cards (mensal/anual) lado a lado, plano anual com
                 .pc-featured + .pc-popular "RECOMENDADO", lista com ↳
6. Depoimentos — 1 .tc-featured + 2 .tc
7. Comparativo — "Hub vs WhatsApp+Planilhas" em tabela minimal
8. FAQ
9. CTA final   — bloco centralizado vermelho de conversão
```

### 5. Reconstruir Sobre (`src/pages/AboutFocus.tsx`)
```text
1. Hero        — eyebrow "QUEM ESTÁ POR TRÁS" + headline + subtítulo
2. Bio grid    — 2 colunas: esquerda avatar central + 2 .sv-ring
                 rotacionando; direita bio do Luciano + badges
                 .sb-w "Notion Solutions Partner"
                 .sb-b "Lovable L4 Platinum"
                 .sb-y "Lean Six Sigma Yellow Belt"
3. Manifesto   — 3 .card com pilares (mantém texto atual)
4. CTA         — .btn-main "Fale com o Luciano" → /contato
```

### 6. Componentes auxiliares
- `Navigation.tsx` e `Footer.tsx` já em padrão Obscur; dot do logo passa a usar `#1E40AF`.
- `HeroSection.tsx`, `HubFocusHero.tsx` e demais subcomponentes legados das páginas que serão reescritas: aposentar/refatorar conforme necessário (apenas se ainda usados).
- Componentes globais (modais, popups, formulários) **não tocar** — herdam os tokens shadcn novos automaticamente.

## Detalhes técnicos

- Cada página vira praticamente um arquivo único (composição linear de seções) reaproveitando as classes utilitárias `.hero-grid`, `.corner`, `.hero-eyebrow`, `.sec-label`, `.card`, `.card-num`, `.bento`, `.mockup-outer`, `.metrics-row`, `.tc-featured`, `.pc-featured`, `.media-strip`, `.sb-*`.
- Textos: copiar fielmente do arquivo atual; só envolver com nova marcação.
- CTAs de conversão (Sob Medida → waitlist; contato; lead) mantêm `.btn-cta` vermelho. CTAs neutros usam `.btn-main` (claro).
- Imagens / screenshots: reaproveitar assets já em `/lovable-uploads/` (sem gerar novos).
- SEO `<Helmet>` e `<Schema>` existentes preservados sem mudança.
- Mobile: `bento` colapsa para 1 coluna, `.metrics-row` para 2 col, hero com padding reduzido (já no CSS).
- Animações: aplicar `.anim-up`, `.anim-up-1/2/3` apenas no hero de cada página para evitar excesso.
- Acessibilidade: manter `<h1>` único por página, `alt` em imagens, `aria-label` nos botões só de ícone.

## Arquivos editados

```text
src/index.css                       (substituição #4F7EFF → #1E40AF)
src/pages/Index.tsx                 (reconstrução)
src/pages/SolucoesSobMedida.tsx     (reconstrução)
src/pages/HubEmpresarial.tsx        (reconstrução)
src/pages/AboutFocus.tsx            (reconstrução)
```

Possíveis ajustes leves (se ainda referenciados):
```text
src/components/HeroSection.tsx
src/components/hub-focus/HubFocusHero.tsx
src/components/HeroTestimonial.tsx
```

## Fora de escopo

- Blog, FAQ standalone, Contato, ListaEspera, Cookies, Privacidade, TermosUso, Dashboard, AreaCliente, autenticação — herdam os tokens novos sem reestilização dedicada nesta passada.
- Nenhuma mudança em rotas, edge functions, RLS, formulários de captura, integrações analytics.
- Sem nova SSG/prerender (segue SPA atual).
