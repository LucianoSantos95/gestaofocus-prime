

# Plano de Ajustes -- Area do Cliente (Dashboard)

## Resumo

Sete mudancas na area do cliente: remover modulo Hub, redesenhar templates como cards Netflix com links reais, formulario de suporte com tabela no banco, botao WhatsApp abrindo chat IA, layout full-width, e icone ajustado para Meus Projetos.

---

## 1. Dashboard (Dashboard.tsx) -- Remover "Modulos do Hub" e Redesenhar Templates

### Remover
- Eliminar o array `libraryResources` (Modulos do Hub) e o `ResourceCarousel` correspondente ("Modulos do Hub")

### Redesenhar "Templates Gratuitos"
- Substituir o `ResourceCarousel` de templates por uma grid de **cards estilo Netflix** (imagem de capa + titulo + descricao)
- Usar as imagens ja existentes em `public/lovable-uploads/` como capa de cada card
- Cada card abre o link Notion correspondente em nova aba
- Ordem e dados:

| Template | Imagem | Link |
|---|---|---|
| Hub Empresarial Free | hub-empresarial-free.jpg | https://www.notion.com/templates/hub-empresarial-free |
| Controle Financeiro | controle-financeiro.jpg | https://www.notion.com/templates/controle-financeiro-b-sico |
| Hub Vida Pessoal | hub-vida-pessoal.jpg | https://www.notion.com/templates/hub-vida-pessoal |
| Central Social Media | central-social-media.jpg | https://www.notion.com/templates/central-social-media-basic |
| Facilitador de Treino | facilitador-treino.jpg | https://www.notion.com/templates/facilitador-de-treino-b-sico |
| Easy Travel | easy-travel.jpg | https://www.notion.com/templates/easy-travel |
| Biblioteca Digital | biblioteca-digital.jpg | https://www.notion.com/templates/biblioteca-digital-588 |

### Visual dos Cards Netflix
- Grid responsiva: 2 colunas mobile, 3 tablet, 4 desktop
- Card com imagem de capa (aspect ratio 16:9), titulo sobreposto na parte inferior com gradiente escuro
- Hover: leve scale + borda primary
- Scroll horizontal nao sera usado; sera grid fixa visivel

---

## 2. Icone "Meus Projetos" na Sidebar

- Trocar o icone `FolderKanban` por `Briefcase` (lucide-react), que comunica melhor "projetos do cliente" vs "kanban generico"

---

## 3. Sidebar "Biblioteca"

- Manter o item "Biblioteca" no menu mas ajustar para apontar para a secao de templates no Dashboard (scroll ou rota separada)
- Como nao ha pagina `/dashboard/biblioteca` separada, a Biblioteca sera renderizada diretamente no Dashboard. O link da sidebar apontara para `/dashboard` com scroll automatico ate a secao de templates (via anchor `#templates`)

---

## 4. Suporte (Support.tsx) -- Reformulacao Completa

### Remover
- Card de WhatsApp inteiro

### Substituir por Formulario de Contato
- Campos obrigatorios: **Nome**, **Email**, **Mensagem**
- Validacao com zod
- Ao enviar, grava na tabela `support_tickets` no banco
- Mensagem de sucesso apos envio
- Manter a secao de FAQ abaixo

### Criar tabela `support_tickets`
```sql
CREATE TABLE public.support_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

-- Usuarios autenticados podem criar tickets
CREATE POLICY "Users can create tickets"
  ON public.support_tickets FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Usuarios podem ver seus proprios tickets
CREATE POLICY "Users can view own tickets"
  ON public.support_tickets FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
```

---

## 5. Botao WhatsApp -- Abrir Chat IA

### Mudanca no App.tsx
- Na area do dashboard (`isDashboard === true`), substituir o `WhatsAppButton` pelo botao que abre um modal/drawer com o componente `AIChatBot` ja existente
- Manter o visual do botao flutuante (circulo verde no canto inferior direito) mas com icone de chat/bot
- Ao clicar, abre um drawer/modal com o `AIChatBot`
- Fora do dashboard, manter o WhatsApp normal

### Novo componente: `DashboardChatButton.tsx`
- Botao flutuante (mesmo estilo do WhatsApp: canto inferior direito)
- Icone: `MessageCircle` ou `Bot` (lucide)
- Ao clicar, abre um Sheet/Drawer lateral com o `AIChatBot` dentro
- Fechar com X ou clicando fora

---

## 6. Layout Full-Width

### DashboardLayout.tsx
- Remover qualquer `max-w-*` do container principal -- o layout ja usa `flex-1`

### Dashboard.tsx
- Remover `max-w-6xl` do container `<div className="p-6 lg:p-8 max-w-6xl space-y-8">` para ocupar 100% da largura disponivel

### Support.tsx
- Remover `max-w-3xl` para ocupar largura completa

---

## Detalhes Tecnicos

### Arquivos a criar:
| Arquivo | Descricao |
|---|---|
| `src/components/dashboard/DashboardChatButton.tsx` | Botao flutuante + drawer com AIChatBot |
| `src/components/dashboard/TemplateCard.tsx` | Card Netflix para templates |

### Arquivos a modificar:
| Arquivo | Mudancas |
|---|---|
| `src/pages/dashboard/Dashboard.tsx` | Remover libraryResources, redesenhar templates com cards Netflix, remover max-w-6xl |
| `src/components/dashboard/DashboardSidebar.tsx` | Trocar icone FolderKanban por Briefcase, ajustar link Biblioteca |
| `src/pages/dashboard/Support.tsx` | Remover WhatsApp, adicionar formulario com nome/email/mensagem, gravar no banco |
| `src/App.tsx` | Renderizar DashboardChatButton em vez de WhatsAppButton quando na area do dashboard |
| `src/components/dashboard/DashboardLayout.tsx` | Garantir full-width (sem alteracao necessaria, ja esta correto) |

### Migracao de banco:
- Criar tabela `support_tickets` com RLS (usuarios criam e veem seus proprios tickets)

### Nenhuma dependencia nova necessaria.
