

# Plano Consolidado de Ajustes — 4 Paginas

## Resumo

Ajustes na Pagina Inicial, Solucoes Sob Medida, Hub Empresarial, Formulario de Aplicacao e Rodape. Todas as mudancas estao detalhadas abaixo.

---

## 1. Pagina Inicial (Index.tsx)

### 1.1 Barra de Escassez (linha 69-74)
- **Mover** para logo abaixo do menu de navegacao (atualmente ja esta, mas ajustar o `pt` do hero para acomodar)
- **Alterar texto:** "Projetos de Alta Complexidade" para **"Projetos Sob Medida"**

### 1.2 Hero — Botoes (linhas 95-118)
- **Botao primario:** "Conhecer Solucoes Sob Medida" — Link para `/solucoes-sob-medida` (nao abre modal)
- **Botao secundario:** "Conheca o Hub Empresarial" — Link para `/hub-empresarial`

### 1.3 Card Focus Custom (linhas 194-233)
- **Remover** "Entrega em ate 30 dias" da lista de beneficios
- **Remover** o bloco de preco (R$ 4.000, pagamento unico)
- **Substituir** por texto consultivo: "Projeto sob medida com escopo personalizado. Solicite um diagnostico gratuito."
- Botao continua abrindo o ApplicationFormModal (sem mudanca)

### 1.4 Card Hub Empresarial (linhas 236-279)
- **Titulo:** "Hub Empresarial" (remover "PRO")
- **Subtitulo:** Trocar "Sistema pronto em Notion" por "Plataforma de Gestao para PMEs"
- **Lista de beneficios:** Atualizar para: Financeiro completo, Recursos Humanos, Marketing, Gestao de Projetos, e mais
- **Preco:** Trocar "R$ 349 (acesso vitalicio)" por "A partir de R$ 119/mes"
- **Botao:** Link interno para `/hub-empresarial` (remover link Hotmart)
- **Texto do botao:** "Conhecer Hub Empresarial"

### 1.5 CTA Final (linhas 388-429)
- Atualizar texto para remover referencia a "Hub Empresarial PRO"
- Manter os dois botoes mas ajustar labels para "Conhecer Solucoes Sob Medida" e "Conhecer Hub Empresarial"

---

## 2. Formulario de Aplicacao (ApplicationFormModal.tsx)

Redesign visual para ficar mais bonito e interativo, mantendo a mesma logica de 4 steps:

- **Fundo com glassmorphism** — `bg-card/50 backdrop-blur-xl` no DialogContent
- **Icone animado por step** (User, Phone, Mail, Wallet) com glow circular
- **Titulo contextual:** "Vamos comecar!", "Como falar com voce?", "Qual seu email?", "Faixa de investimento?"
- **Subtitulo descritivo** abaixo de cada pergunta
- **Progress bar estilizada** com gradiente azul Focus e animacao suave
- **Inputs maiores** com `py-4 rounded-2xl` e icone inline
- **Opcoes de investimento** como cards maiores com hover scale e glow na selecao
- **Tela de sucesso** com icone maior e animacao de entrada

---

## 3. Solucoes Sob Medida (SolucoesSobMedida.tsx)

### 3.1 Barra de Aviso (linha 46-53)
- **Alterar** "Projetos de Alta Complexidade" para **"Projetos Sob Medida"**

### 3.2 Secao de Preco "Quanto custa ter paz mental na gestao?" (linhas 238-267)
- **Remover** o card com valor "A partir de R$ 4.000"
- **Remover** as comparacoes de custo riscadas (R$ 15.000, R$ 2.000)
- **Substituir** por texto incentivando o preenchimento do formulario: "Cada projeto e unico. O valor depende do escopo e da complexidade. Preencha a aplicacao para receber uma proposta personalizada."
- **Adicionar botao** "Solicitar Proposta" que abre o ApplicationFormModal

---

## 4. Hub Empresarial (HubEmpresarial.tsx)

### 4.1 Hero — Logo (linha 242-244)
- **Substituir** o icone generico (LayoutDashboard) pela imagem do logo do Hub (image-76.png) copiada para `src/assets/hub-logo.png`

### 4.2 Hero — Numeros (linha 269)
- **Reduzir** "2.847+ empresas ativas" para **"127+ empresas ativas"** (numero mais realista para um lancamento recente)

### 4.3 Hero — CTA (linha 280-285)
- **Alterar link** de `/auth/signup` para `https://app.focusinteligente.com.br/auth`
- Manter como link externo com `target="_blank"`

### 4.4 Mockup do App (secao linhas 297-411)
- **Substituir** o mockup CSS construido manualmente pela imagem real do dashboard (image-77.png) copiada para `src/assets/hub-dashboard-mockup.png`
- Manter o estilo visual (borda arredondada, sombra, chrome de janela com os 3 dots)

### 4.5 Prova Social (linha 455)
- **Alterar** "+2.000 Empresas Ja Confiam no Hub" para **"+100 Empresas Ja Confiam no Hub"**

### 4.6 Pricing — Planos (linhas 177-202)
- **Plano Gratuito:** Manter como esta
- **Plano Pro renomeado para "Plus":** R$ 119/mes (era Pro R$ 97/mes)
- **Plano Enterprise renomeado para "Pro":** R$ 249/mes com features avancadas
- Badge "Mais Popular" fica no plano Plus

Recomendacao: Manter 3 planos (Gratuito, Plus R$ 119, Pro R$ 249) em vez de incluir Enterprise a R$ 497. Tres opcoes claras com progressao de valor sao mais eficazes para conversao neste estagio do lancamento. O Enterprise pode ser adicionado futuramente quando houver demanda.

### 4.7 CTA Final (linhas 619-623)
- **Alterar link** de `/auth/signup` para `https://app.focusinteligente.com.br/auth`
- Manter como link externo com `target="_blank"`

### 4.8 FAQ — Atualizar precos
- Ajustar resposta da pergunta "Quanto custa?" para refletir novos valores (Plus R$ 119, Pro R$ 249)

---

## 5. Rodape (Footer.tsx)

- **Remover** o item WhatsApp (linhas 57-66) da coluna de Contato
- Manter apenas "Atendimento Online -- Brasil" e o email

---

## Detalhes Tecnicos

### Arquivos de imagem a copiar:
- `user-uploads://image-76.png` para `src/assets/hub-logo.png` (logo do Hub)
- `user-uploads://image-77.png` para `src/assets/hub-dashboard-mockup.png` (screenshot do dashboard)

### Arquivos a modificar:

| Arquivo | Mudancas |
|---|---|
| `src/pages/Index.tsx` | Barra escassez (texto), Hero CTAs, card Focus Custom (remover preco/30 dias), card Hub (SaaS), CTA final |
| `src/components/ApplicationFormModal.tsx` | Redesign visual glassmorphism, icones por step, inputs maiores |
| `src/pages/SolucoesSobMedida.tsx` | Barra escassez (texto), secao preco (remover valor, incentivar formulario) |
| `src/pages/HubEmpresarial.tsx` | Logo Hub, numeros reduzidos, link externo CTA, mockup real, pricing atualizado |
| `src/components/Footer.tsx` | Remover WhatsApp |

### Nenhum arquivo novo sera criado (apenas imagens copiadas para assets).

