

# Plano Completo: Focus Gestao v3.0 + Portal do Cliente + Solucoes Sob Medida

---

## PARTE 1: Home Page Focus Gestao v3.0

### Fase 1: Remover rotas desnecessarias do App.tsx
- Remover rotas: `/sprint-produtividade`, `/controle-financeiro-pro`, `/metodofocus`, `/focus-pro`, `/focus-club`, `/sistemas-gratuitos`, `/lista-espera`, `/lista-espera/sucesso`, `/hub-empresarial`
- Manter blog posts, paginas institucionais, auth e dashboard

### Fase 2: Atualizar Navegacao (Header)
- Menu: Solucoes Sob Medida | Hub Empresarial | Recursos Gratuitos | Blog
- Botao direita: "Area do Cliente" com icone de cadeado (leva para `/auth/login`)
- Remover WaitlistFormModal da navegacao

### Fase 3: Reescrever Home Page (Index.tsx)
- Hero com escassez + CTA de aplicacao
- Secao "O Problema"
- Cards de solucoes (Focus Custom vs Hub Empresarial)
- Prova social
- Isca digital
- CTA final

### Fase 4: Criar ApplicationFormModal.tsx
- Formulario step-by-step (4 passos: Nome, WhatsApp, Email, Orcamento)
- Salva na tabela `consultation_leads`

### Fase 5: Atualizar Footer (3 colunas)
- Coluna 1: "Focus Gestao Inteligente. Especialistas em transformar processos manuais em Softwares de Alta Performance."
- Coluna 2: Links -- Home, Blog de Gestao, Termos de Uso, Politica de Privacidade
- Coluna 3: Contato -- Atendimento Online Brasil, contato@focusinteligente.com.br

### Fase 6: Criar WhatsAppButton.tsx (botao flutuante)

### Fase 7: Atualizar SEO
- Titulo: "Focus Gestao | Sistemas Sob Medida e Plataforma de Gestao"
- Descricao: "Transforme suas planilhas em um software proprio. Desenvolvimento de sistemas exclusivos com vagas limitadas ou acesso imediato ao Hub Empresarial."

---

## PARTE 2: Portal do Cliente

### Fase 8: Banco de Dados - Criar tabela `client_projects`

```text
client_projects
-----------------------------------------
id              | uuid (PK, default gen_random_uuid())
user_id         | uuid (FK -> auth.users, NOT NULL)
project_name    | text (NOT NULL)
description     | text
status          | text (default 'em_andamento')
progress        | integer (default 0, 0-100)
delivery_date   | date
cover_image_url | text
created_at      | timestamptz (default now())
updated_at      | timestamptz (default now())
```

RLS Policies:
- SELECT: Usuarios veem apenas seus proprios projetos
- INSERT/UPDATE/DELETE: Apenas admins

### Fase 9: Configurar E-mail de Boas-Vindas no Cadastro
- Edge function `send-welcome-email` via Resend
- Template HTML profissional (dark mode, estilo Focus)
- Chamada apos signup bem-sucedido
- Redirect para `/dashboard`

### Fase 10: Atualizar Tela de Login (dark mode)
- Visual minimalista com fundo dark (azul marinho/preto)
- Logo Focus centralizada
- Texto de apoio: "Acesse seus projetos exclusivos e nossa biblioteca de gestao."

### Fase 11: Atualizar Tela de Cadastro (dark mode + e-mail)
- Mesmo visual dark do Login
- Apos cadastro: chamar edge function de e-mail de boas-vindas
- Redirecionar para `/dashboard`

### Fase 12: Reescrever Dashboard (Estilo Netflix)
- Layout com Sidebar colapsavel (Inicio, Meus Projetos, Biblioteca, Suporte, Configuracoes)
- Hero Banner: "Domine o Financeiro da sua Empresa" + CTA Hub Empresarial
- Secao "Meus Projetos": Cards com barra de progresso, status, data de entrega (dados de `client_projects`)
- Secao "Biblioteca de Recursos": Carroseis horizontais (embla-carousel-react) com categorias de templates

### Fase 13: Criar paginas do Portal
- `/dashboard/suporte` -- Pagina de suporte (WhatsApp + FAQ)
- `/dashboard/configuracoes` -- Configuracoes da conta (nome, senha, logout)
- Todas envoltas em `ProtectedRoute` com layout de Sidebar

### Fase 14: Esconder Nav/Footer no Portal
- Rotas `/dashboard/*` nao mostram Navigation e Footer do site publico
- Portal usa layout proprio com Sidebar

---

## PARTE 3: Pagina Solucoes Sob Medida (Focus Custom)

### Fase 15: Criar pagina `/solucoes-sob-medida`

Novo arquivo: `src/pages/SolucoesSobMedida.tsx`

**SEO:**
- Titulo: "Desenvolvimento de Software Sob Medida | Focus Custom"
- Meta Description: "Pare de adaptar sua empresa ao software. Criamos sistemas exclusivos -- dashboards, CRM, portais -- com entrega em ate 30 dias. Vagas limitadas."

---

#### Diretriz Visual: Estilo ExamAI adaptado as cores Focus

A pagina seguira o estilo visual do site ExamAI (https://examai.lovable.app/) mas usando a paleta de cores do Focus (azul primary HSL 213 94% 68%, fundo dark HSL 210 15% 3%). Os elementos visuais de referencia sao:

- **Hero com efeito de glow:** Gradiente radial azul Focus (blur-3xl) atras do titulo, criando um halo de luz que emana do centro da pagina
- **Tipografia hero grande e bold:** H1 com tamanho extra-large (text-5xl a text-7xl), peso bold, com destaque de cor no texto principal usando gradient-text azul Focus
- **Mockups flutuantes:** Imagens de dashboards/sistemas com bordas arredondadas e sombras, posicionadas com leve angulo e efeito de flutuacao (similar aos icones flutuantes do ExamAI)
- **Cards com glassmorphism:** Cards de secoes com fundo semi-transparente (bg-card/50), backdrop-blur, borda sutil (border-border/30), e efeito hover com elevacao e glow
- **Secoes com separacao por gradiente:** Transicoes suaves entre secoes usando gradientes verticais (from-transparent via-primary/5 to-transparent)
- **Botoes com gradiente e glow:** CTAs principais usando bg-gradient-primary com shadow-glow no hover e animacao de pulse sutil
- **Espacamento generoso:** Padding vertical de py-24 a py-32 entre secoes, max-w-7xl centralizado
- **Elementos decorativos:** Orbs de blur (blur-3xl) em azul com opacidade baixa posicionados em background para criar profundidade

---

**Barra de Aviso (Topo):**
- Fundo vermelho escuro ou azul marinho
- "AGENDA MARCO/2026: Restam apenas 2 vagas para Projetos de Alta Complexidade."

**Secao 1 -- Hero (A Promessa):**
- Fundo com glow radial azul Focus atras do titulo (estilo ExamAI)
- H1 grande e bold: "Pare de adaptar sua empresa ao software. Nos criamos o software perfeito para a sua empresa."
- Subtitulo sobre aplicativo proprio, controle total em ate 30 dias
- CTA com gradiente e glow: "APLICAR PARA CONSULTORIA" (abre ApplicationFormModal)
- Texto menor: "Analise gratuita de viabilidade do projeto"
- Mockup de dashboard flutuante abaixo do CTA (similar ao screenshot de app do ExamAI)

**Secao 2 -- O Filtro (Para Quem E?):**
- H2: "Para quem e a Focus Custom?"
- Cards com glassmorphism para checks verdes e X vermelhos
- 3 checks verdes: Empresas em Crescimento, Operacoes Complexas, Prestadores de Servico
- 3 X vermelhos: Procura planilha bonita, Quer preco de estagiario, Nao tem processos definidos

**Secao 3 -- A Comparacao (Por Que Mudar?):**
- H2: "Por que investir em um Software Proprio?"
- Dois cards lado a lado com glassmorphism:
  - Card esquerdo (vermelho sutil): "O CAOS DAS PLANILHAS" com 4 problemas
  - Card direito (azul Focus glow): "O PADRAO FOCUS CUSTOM" com 4 solucoes

**Secao 4 -- O Metodo (Como Funciona):**
- H2: "Do Diagnostico a Entrega em 4 Passos"
- Timeline visual com linha conectora e icones em circulos com glow azul
- Cada etapa em card com glassmorphism
- Diagnostico -> Prototipagem -> Sprint Agil -> Entrega & Treinamento

**Secao 5 -- Exemplos de Uso:**
- H2: "O que podemos construir para voce?"
- 3 cards com glassmorphism, icone com glow, efeito hover com scale e borda azul
- Financeiro Blindado, CRM & Vendas, Portal do Cliente

**Secao 6 -- Ancoragem de Preco:**
- Fundo com gradiente sutil (separacao visual)
- H2: "Quanto custa ter paz mental na gestao?"
- Comparacao: programador senior R$ 15.000/mes, 5 SaaS R$ 2.000/mes
- Destaque com glow: "Projetos Personalizados a partir de R$ 4.000 (Pagamento Unico)"
- Nota: "Parcelamento disponivel para empresas (CNPJ)"

**Secao 7 -- FAQ (3 perguntas):**
- Accordion com estilo glassmorphism nos items
- Mensalidade? / Mudar depois? / Quanto tempo?

**Secao 8 -- Chamada Final:**
- Fundo com glow radial centralizado (como o hero)
- H2: "Pronto para profissionalizar sua empresa?"
- Texto de escassez: "abrimos apenas 3 vagas por mes"
- CTA grande com gradiente e glow: "PREENCHER APLICACAO" (abre ApplicationFormModal)

### Fase 16: Adicionar rota e navegacao
- Nova rota `/solucoes-sob-medida` no App.tsx
- Link "Solucoes Sob Medida" no Navigation.tsx
- Reutiliza ApplicationFormModal (Fase 4) com `looking_for = "software_sob_medida"`

---

## Detalhes Tecnicos

### Arquivos a criar:
1. `src/components/ApplicationFormModal.tsx`
2. `src/components/WhatsAppButton.tsx`
3. `src/components/dashboard/DashboardLayout.tsx`
4. `src/components/dashboard/DashboardSidebar.tsx`
5. `src/components/dashboard/HeroBanner.tsx`
6. `src/components/dashboard/ProjectCard.tsx`
7. `src/components/dashboard/ResourceCarousel.tsx`
8. `src/pages/dashboard/Support.tsx`
9. `src/pages/dashboard/Settings.tsx`
10. `src/pages/SolucoesSobMedida.tsx`
11. `supabase/functions/send-welcome-email/index.ts`

### Arquivos a modificar:
1. `src/App.tsx` -- Remover rotas antigas, adicionar `/solucoes-sob-medida` e rotas do portal, esconder nav/footer no dashboard
2. `src/components/Navigation.tsx` -- Novo menu com 4 itens + botao Area do Cliente
3. `src/pages/Index.tsx` -- Reescrever completamente
4. `src/components/Footer.tsx` -- Reestruturar em 3 colunas
5. `src/pages/auth/Login.tsx` -- Reestilizar dark mode
6. `src/pages/auth/SignUp.tsx` -- Reestilizar + chamar edge function
7. `src/pages/dashboard/Dashboard.tsx` -- Reescrever (Netflix style)
8. `src/components/ProtectedRoute.tsx` -- Atualizar redirect

### Mantidos sem alteracao:
- Todos os blog posts (40+ artigos)
- Paginas institucionais (Termos, Privacidade, Cookies)
- Edge functions existentes
- Componentes UI base (shadcn)
- Tabelas existentes (profiles, user_roles, consultation_leads, waitlist, analytics_events)

### Tabela do banco:
- Criar `client_projects` com RLS
- Reutilizar `consultation_leads` para o formulario de aplicacao

---

## Ordem de Execucao

1. Migracao de banco: criar tabela `client_projects`
2. Criar edge function `send-welcome-email`
3. Criar componentes do portal (Sidebar, Layout, Cards, Carrossel)
4. Reescrever Dashboard com estilo Netflix
5. Criar paginas de Suporte e Configuracoes
6. Reestilizar Login e SignUp (dark mode + e-mail)
7. Criar `ApplicationFormModal.tsx` e `WhatsAppButton.tsx`
8. Criar `SolucoesSobMedida.tsx` (estilo ExamAI com cores Focus, 8 secoes)
9. Reescrever `Index.tsx` (Home Page v3.0)
10. Atualizar `Navigation.tsx` e `Footer.tsx`
11. Limpar rotas e adicionar novas em `App.tsx`
12. Atualizar SEO meta dados

