

# Landing Page Hub Focus MVP — Substituindo Focus Pro

## Resumo

Substituir a pagina Focus Pro (`/focus-pro`) por uma landing page do **Hub Focus MVP** seguindo o design system dark premium do site (fundo escuro, azul eletrico, gradientes, Inter font, glow effects).

## Estrutura da Pagina

A pagina sera criada reescrevendo `src/pages/FocusPro.tsx` com as seguintes secoes:

### 1. Hero Section
- Badge "Beta Gratuito" com borda `border-primary/30`
- H1: "Seu negocio organizado em um so lugar"
- Subtitulo com referencia ao template Notion (5k+ downloads)
- Dois botoes: "Comece Gratis" (link `/auth/signup`) e "Ver Modulos" (ancora `#modulos`)
- Background orbs com `blur-3xl` e gradiente `from-primary/5`

### 2. Social Proof Bar
- 3 metricas em cards horizontais: "5.000+ templates baixados", "8 modulos integrados", "100% gratuito no Beta"
- Estilo `bg-card/50 border-border/50` com icones `text-primary`

### 3. Secao de Modulos (Features)
- Grid 2x4 (mobile 1 coluna) com os 8 modulos: Financas, RH, Marketing, Projetos, Clientes, Atividades, Processos, Guia
- Cards com `service-card` style (gradient-card, shadow-elegant, hover glow)
- Badge "Mais Popular" em Financas e RH usando `Badge` do design system

### 4. Comparacao "Antes vs Depois"
- Layout 2 colunas
- Esquerda: "Planilhas e Notion" com icones `XCircle` vermelhos e fundo `bg-red-500/5`
- Direita: "Hub Focus" com icones `CheckCircle` verdes/primary e fundo `bg-primary/5`

### 5. FAQ Compacto
- Reutilizar Accordion existente com perguntas relevantes para novos visitantes do MVP
- Perguntas: "E gratuito mesmo?", "Preciso saber programar?", "Funciona no celular?", "Posso usar com minha equipe?", "Meus dados estao seguros?"

### 6. CTA Final
- Titulo: "Comece agora — e gratuito"
- Botao "Criar Conta Gratis" (link `/auth/signup`)
- Texto: "Sem cartao de credito. Cancele quando quiser."
- Fundo com gradiente `from-primary/5`

## Mudancas no Fluxo de Navegacao

- `ProtectedRoute.tsx`: redirecionar usuarios nao logados para `/focus-pro` ao inves de `/auth/login`
- As rotas `/focus-club` e `/metodofocus` continuam funcionando (ja redirecionam para FocusPro)

## Detalhes Tecnicos

### Arquivos a modificar

1. **`src/pages/FocusPro.tsx`** — Reescrever completamente com o conteudo do Hub Focus MVP
   - Remover WaitlistFormModal (nao e mais waitlist, e signup direto)
   - Manter SEO/Helmet atualizado para Hub Focus
   - Usar componentes existentes: Button, Card, Badge, Accordion
   - Seguir classes do design system: `bg-background`, `bg-card/30`, gradientes primary, `shadow-elegant`, `animate-fade-in`

2. **`src/components/ProtectedRoute.tsx`** — Alterar redirect de `/auth/login` para `/focus-pro`

3. **`src/App.tsx`** — Sem mudancas necessarias (rotas ja existem)

### Padroes visuais aplicados
- Cores: `--background: 210 15% 3%`, `--primary: 213 94% 68%`
- Tipografia: Inter, H1 `text-4xl md:text-5xl lg:text-6xl font-bold`, gradiente no destaque
- Cards: `bg-background/50 border-border/50 hover:border-primary/30`
- Secoes alternadas: `bg-background` e `bg-card/30`
- Espacamento: `py-20 px-4` por secao, `max-w-5xl` container
- Animacoes: `animate-fade-in`, `animate-slide-up`, hover `translateY(-4px)`
- Orbs decorativos: `bg-primary/10 rounded-full blur-3xl`

