
# Plano: Landing Page Hub Empresarial (Estilo ExamAI)

## O que sera feito

Criar uma nova landing page para o Hub Empresarial no estilo visual do ExamAI (glassmorphism, glows radiais, tipografia bold) usando as cores do site Focus, e adiciona-la na navegacao ao lado de "Solucoes Sob Medida".

---

## Estrutura da Pagina

A pagina reutilizara o conteudo ja existente no `HubEmpresarial.tsx` (pain points, beneficios, modulos, depoimentos, FAQ) mas com o visual completamente refeito no estilo ExamAI, igual ao da pagina Solucoes Sob Medida.

**Secoes da landing page:**

1. **Hero** -- Badge "Sistema completo para sua empresa", H1 grande com gradient-text, subtitulo, CTA principal "Quero o Hub Empresarial PRO" (link Stripe), glow radial de fundo
2. **Problema/Agitacao** -- 6 cards com glassmorphism mostrando as dores (planilhas espalhadas, WhatsApp como CRM, etc.)
3. **Solucao** -- Card destacado com glow explicando o que e o Hub PRO
4. **Demo Visual** -- Video com poster e borda glow
5. **Beneficios** -- 6 cards com glassmorphism, icones com glow, hover com scale
6. **Modulos Inclusos** -- Grid de 7 modulos com listas detalhadas
7. **Prova Social** -- 3 depoimentos em cards glassmorphism
8. **Ancoragem de Preco** -- Card com glow: R$ 349 pagamento unico, garantia 7 dias
9. **FAQ** -- Accordion com estilo glassmorphism
10. **CTA Final** -- Glow radial centralizado + botao de compra

**Screenshot do app (referencia visual):** A imagem enviada sera usada apenas como referencia de como o Hub funciona, nao sera embutida na pagina.

---

## Detalhes Tecnicos

### Arquivo a criar:
- Nenhum novo -- sera reescrito `src/pages/HubEmpresarial.tsx` com o visual ExamAI (classes `container-focus`, `section-padding`, `bg-card/50 backdrop-blur-sm`, `shadow-glow`, etc.)

### Arquivos a modificar:

1. **`src/App.tsx`**
   - Adicionar lazy import do `HubEmpresarial`
   - Adicionar rota `/hub-empresarial`
   - Adicionar `/hub-empresarial` na condicao `isSolucoes` para esconder Nav/Footer duplicados (a pagina tera seus proprios)

2. **`src/components/Navigation.tsx`**
   - Adicionar "Hub Empresarial" ao array `navItems` entre "Solucoes Sob Medida" e "Blog"

### Estilo Visual:
- Mesmo design system usado em `SolucoesSobMedida.tsx`:
  - Glow radial azul Focus (blur-3xl) nos heroes
  - Cards com `bg-card/50 backdrop-blur-sm border-card-border/30`
  - Botoes com `btn-hero animate-glow`
  - Separacao entre secoes com `section-padding bg-background-secondary`
  - Tipografia hero `text-5xl lg:text-7xl font-bold` com `bg-gradient-primary bg-clip-text text-transparent`

### CTA externo:
- Botao de compra continua apontando para o link Stripe existente: `https://buy.stripe.com/fZu28rbs8gN73ta6F7gUM0d`
