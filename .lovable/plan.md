## Problemas identificados

1. **Hero muito espaçado** — `.snj-hero` tem `min-height: 100vh` + `.snj-hero__center { padding: 80px 0 }` + `.snj-display` com `font-size: clamp(56px, 9vw, 128px)` e `line-height: 0.95`. No desktop 1450px isso gera ~123px por linha do título (Clareza / Precisão / Operação) + folga central grande, resultando no vazio da print.

2. **Botão da lâmpada não muda o tema** — O toggle está setando `html.light` corretamente e o `index.css` tem tokens de tema claro (`--bg`, `--text`, etc.), mas várias seções ignoram os tokens e usam cores dark hardcoded, então tudo continua escuro:
   - `.snj-hero` → `linear-gradient(180deg, #050507 → #0a0a0e → #050507)` fixo
   - `.snj-hero::before` → linhas de grade `rgba(255,255,255,0.02)` (invisíveis no claro)
   - `.snj-talk` → `rgba(15,15,20,0.85)` fixo
   - `.snj-pill` → `rgba(0,0,0,0.4)` fixo
   - `.snj-btn-primary` (herdando `var(--text)` como fundo) — no light `--text: #0C0C10`, então o botão continua preto com texto claro (isso está OK; verificar contraste)
   - `.focus-marquee` provavelmente com fundo escuro fixo
   - Cards de módulos e outras seções que usam `#0b0b0e` diretamente (ex.: bloco de imagem do Hub antigo)

## Alterações (só CSS + pequeno ajuste no hero da home)

### 1. `src/index.css` — hero compacto
- `.snj-hero`: remover `min-height: 100vh`, trocar padding para `120px 32px 40px`.
- `.snj-hero__center`: reduzir padding de `80px 0` para `40px 0`.
- `.snj-display`: reduzir escala de `clamp(56px, 9vw, 128px)` para `clamp(48px, 7vw, 104px)` e manter `line-height: 0.95`.
- `.snj-hero__bottom`: `gap: 24px`.

### 2. `src/index.css` — cores do hero passam a usar tokens
- `.snj-hero` background → usar `var(--bg)` como base + gradientes com `var(--accent2)` em vez de `rgba(30,64,175,...)` cru em cima de preto; no light o fundo fica claro naturalmente.
- `.snj-hero::before` linhas → `var(--line)` (já reage ao tema).
- `.snj-talk` → `background: var(--bg2)` + `border: 1px solid var(--line2)`.
- `.snj-pill` → `background: var(--bg2)`.
- `.focus-marquee` (checar) → fundo `var(--bg2)`, texto `var(--text2)`.

### 3. `src/index.css` — bloco `html.light` reforça overrides de seções críticas
Adicionar dentro do bloco `html.light` os ajustes que não podem sair só dos tokens:
- `.snj-hero { background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,64,175,0.08), transparent 60%), var(--bg); }` (versão clara sem o degradê preto).
- `.snj-talk__avatar` mantém azul (ok em ambos os temas).
- Qualquer cor `#050507`, `#0a0a0e`, `#0b0b0e`, `rgba(15,15,20,...)` restante substituída por token.

### 4. Sweep rápido de hardcodes em `src/pages` e `src/components`
Buscar `#0b0b0e`, `#050507`, `#0a0a0e`, `rgba(15,15,20`, `rgba(11,11,14` e trocar por `var(--bg2)` / `var(--bg3)` para que reajam ao tema. Sem alterar layout — só cor.

### Fora de escopo
- Não mexer em auth, Supabase, Stripe, Resend, edge functions.
- Não redesenhar seções — só ajustar tokens/cores hardcoded e compactar o hero.
- Não trocar tipografia nem estrutura das páginas.

## Detalhes técnicos

O toggle da lâmpada em `src/components/ThemeToggle.tsx` já:
- Lê `localStorage.focus-theme`
- Aplica/remove `html.light` e `html.dark`
- Persiste

O `index.html` já injeta o script inicial anti-flash. Ou seja, o mecanismo está OK — o problema é **CSS ignorando as variáveis**. Fixando os hardcodes, a lâmpada passa a alternar o site inteiro.
