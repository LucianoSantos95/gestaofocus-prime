## Objetivo
1. Animar a palavra **"escalar"** no H1 do Hub Empresarial igual à animação `animate-rotate-word-in` da página `https://app.focusinteligente.com.br`.
2. Refazer o bloco de **Planos** usando como base a página `https://app.focusinteligente.com.br/planos` (toggle Mensal/Anual com −20%, 3 cards Plus/Pro/Enterprise, "Mais popular" no Pro).

## 1. Animação no "escalar"

A referência usa: `<span class="gradient-text text-glow inline-block animate-rotate-word-in">escalar</span>` — uma entrada com rotação 3D + fade.

- **`tailwind.config.ts`**: adicionar keyframe + animation:
  ```ts
  keyframes: {
    "rotate-word-in": {
      "0%":   { opacity: "0", transform: "rotateX(-90deg) translateY(20px)" },
      "60%":  { opacity: "1", transform: "rotateX(15deg)  translateY(0)" },
      "100%": { opacity: "1", transform: "rotateX(0deg)   translateY(0)" },
    },
  },
  animation: {
    "rotate-word-in": "rotate-word-in 0.9s cubic-bezier(0.34,1.56,0.64,1) both",
  },
  ```
- **`src/pages/HubEmpresarial.tsx`** (H1 atual: *"O sistema de gestão feito para agências e consultorias que querem escalar."*):
  - Quebrar o H1 para que apenas **"escalar"** receba o efeito.
  - Estrutura final:
    ```tsx
    <h1>
      O sistema de gestão feito para agências e consultorias que querem{" "}
      <span className="bg-gradient-primary bg-clip-text text-transparent inline-block animate-rotate-word-in" style={{ perspective: "800px" }}>
        escalar.
      </span>
    </h1>
    ```
  - Remover o gradient antigo da frase inteira para deixar apenas "escalar" colorida/gradiente como na referência.

## 2. Bloco de Planos baseado em `/planos`

Refatorar a seção `── PRICING ──` em `src/pages/HubEmpresarial.tsx` para replicar o layout da página de planos do app:

- **Título**: "Escolha o plano ideal"
- **Subtítulo**: "Desbloqueie todo o potencial da sua operação"
- **Toggle Mensal / Anual (−20%)** controlado por `useState<'mensal'|'anual'>`. Badge `-20%` ao lado de "Anual". Quando "Anual" estiver ativo, multiplica o preço mensal por `0.8` e mantém sufixo `/mês` (mesmo padrão da referência).
- **3 cards** lado a lado (`grid md:grid-cols-3`), centro destacado:
  - **Plus** — R$ 69/mês — features: Criar e editar dados em todos os módulos · Até 5 usuários por conta · Importação de planilhas (Excel/CSV/OFX) · Guia de Uso completo · Suporte por email
  - **Pro** — R$ 149/mês — badge **Mais popular** com sparkle; ring/sombra primary; features: Tudo do Plus · Exportar relatórios (PDF/Excel) · Análise de IA para Clientes · Assistente de IA integrado · Até 10 usuários por conta · Suporte prioritário
  - **Enterprise** — R$ 297/mês — features: Tudo do Pro · Integração Google Workspace · Automação WhatsApp (lembretes) · Usuários ilimitados · Suporte dedicado + onboarding
- **CTA de cada card**: botão `Assinar` apontando para `https://app.focusinteligente.com.br/planos` em nova aba, disparando o evento `hub_signup_intent` (categoria `conversion`, label `Pricing-<Plano>`) que já criamos.
- **Free** que adicionamos no turno anterior: **removido da grid** (a página de referência não tem plano grátis no bloco). A mensagem de "começar grátis até o limite da aba" permanece no hero e no FAQ.
- Manter a estética dark + glassmorphism existente (cards `bg-card/50 backdrop-blur-sm`, ring `border-primary/30` no Pro, sombra `shadow-glow`).

### Itens fora do escopo
- ❌ Não trocar o link externo (mantém `app.focusinteligente.com.br` / `/planos` em nova aba).
- ❌ Não adicionar vídeo.
- ❌ Não mexer em hero/FAQ/CTA final além das mudanças acima.

## Resultado
- Palavra "escalar" entra com rotação 3D + gradient como na home do app.
- Bloco de planos visualmente coerente com `/planos`, com toggle Mensal/Anual e link direto para a página real de planos do produto.
