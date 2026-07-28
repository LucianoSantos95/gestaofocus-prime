## 1. Toggle de tema (lâmpada ao lado do "Diagnóstico gratuito")

- Adicionar um `ThemeProvider` leve (classe `light` no `<html>`, persistência em `localStorage`).
- Criar `src/components/ThemeToggle.tsx` — ícone `Lightbulb` (lucide-react), 36×36, ao lado do botão "Diagnóstico gratuito" no `Navigation.tsx` (desktop + mobile).
- Em `src/index.css`, definir variáveis para tema claro dentro de `html.light { --bg, --bg2, --bg3, --text, --text2, --text3, --line, --line2 }`, invertendo a paleta atual (fundos off-white `#F7F7F5`/`#EFEFEC`, texto `#0C0C10`, mantendo azul `#1E40AF` e verde `#9DE89D` como accents). Todos os componentes já usam essas variáveis, então herdam automaticamente.
- Ajustes pontuais onde há cores hardcoded (ex.: `text-white` no logo/nav) — trocar por `var(--text)` quando necessário para não quebrar o modo claro.

## 2. Formulário no lugar dos CTAs "Diagnóstico gratuito" / "Quero um sistema Lovable"

- Criar `src/components/LeadFormModal.tsx` — modal glassmorphism com 3 campos obrigatórios (validação Zod):
  - Nome (2–80 chars)
  - E-mail (formato válido)
  - "Qual é o maior gargalo da sua operação hoje?" (textarea, 10–500 chars)
- Ao submeter: validação client-side → tela de sucesso dentro do modal com botão **"Abrir WhatsApp"** que abre `wa.me/5511916742443` com mensagem prefixada:
  > "Olá, sou {nome}. Meu maior gargalo hoje é: {resposta}"
- Sem persistência em banco (o usuário não pediu). Apenas `trackEvent("lead_form_submit", …)` para GA/Clarity mensurarem leads quentes.
- Substituir todos os `<a href={WA_LINK}>` dos CTAs "Diagnóstico gratuito" / "Quero um sistema Lovable" por `<button onClick={() => setOpen(true)}>` nas páginas: `Index.tsx`, `SolucoesSobMedida.tsx`, `HubEmpresarial.tsx`, `AboutFocus.tsx`. O botão flutuante do WhatsApp e links do rodapé continuam diretos.

## 3. Refazer os 4 blocos com imagens em `/hub-empresarial` (grid de ícones)

Baseado na imagem anexada — cards limpos com ícone circular em mint, categoria em caps, título e descrição. Manter **exatamente** o texto atual dos blocos.

- Em `HubFocusModules.tsx` (ou equivalente que renderiza os 4 cards com screenshots), remover imagens e trocar por grid de cards:
  - Ícone (lucide) em um quadrado arredondado com fundo `rgba(157,232,157,0.10)` e ícone `#9DE89D`
  - Label da categoria em mono uppercase mint (`FINANÇAS`, `CLIENTES`, `PROJETOS`, `TAREFAS`, etc.)
  - Título bold
  - Descrição em `var(--text2)`
- Layout: grid 3 colunas desktop / 2 tablet / 1 mobile. Borda `var(--line)`, raio 16px, padding 32px, hover sutil (translateY -2px + border mais clara).
- Mapeamento de ícones: `DollarSign` (Finanças), `Users` (Clientes), `FolderKanban` (Projetos), `CheckSquare` (Tarefas). Se hoje existem apenas 4 blocos, mantenho 4 — não vou inventar novos.

## 4. Animações inspiradas em Mobbin / landing.love

Adições focadas, sem exagero, respeitando o dark B2B:

- **Scroll-reveal com stagger** — expandir `useScrollReveal` para aceitar `delay` por item; aplicar nos cards das seções "Como funciona" e "Módulos".
- **Magnetic hover nos CTAs principais** — leve deslocamento do botão em direção ao cursor (implementação em ~30 linhas, sem libs).
- **Text reveal por palavra no `<h1>` do hero** — palavras sobem em cascata (fade + translateY) no primeiro paint, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Marquee infinito** na faixa "Lovable Partner Oficial · Consultoria · Hub Empresarial · …" abaixo do hero (padrão landing.love).
- **Cursor spotlight sutil** nos cards de módulo — radial gradient seguindo o mouse (efeito Aceternity-style, muito usado em landing.love).
- **Number count-up** nos indicadores da seção Sobre (já existe `useCountUp`, ativar com IntersectionObserver onde ainda não está).
- **Page transition fade** — envelope `<AnimatePresence>` no `App.tsx` para suavizar troca de rotas (150ms fade), em complemento ao `PageLoader`.

Tudo em CSS/Framer Motion (já instalado indiretamente? senão, animações puras em CSS + `requestAnimationFrame` para magnetic/spotlight — sem adicionar dependência).

## Detalhes técnicos

- Nada muda em auth, Supabase, Stripe, Resend, edge functions ou MCP.
- Zod já é dependência do projeto.
- Nenhuma nova tabela nem edge function.
- Se `framer-motion` não estiver instalado, uso CSS puro para não introduzir dependência (posso confirmar durante o build).
