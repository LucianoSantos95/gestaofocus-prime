

# Plano: Area "Meus Projetos" com Sprints

## Resumo

Criar uma pagina dedicada `/dashboard/projetos` onde o cliente ve seus projetos contratados com andamento por sprints. Voce (admin) informa os dados do projeto e atualizacoes de sprint diretamente pelo chat, e eu atualizo o banco de dados. A barra de progresso sobe automaticamente conforme as sprints sao concluidas.

---

## Fluxo de Trabalho

```text
1. Voce me avisa: "Crie o projeto CRM para o Flavio, 5 sprints"
   -> Eu insiro no banco: client_projects + 5 registros em project_sprints

2. Voce me avisa: "Sprint 1 do CRM do Flavio foi concluida"
   -> Eu atualizo: sprint 1 = concluida, sprint 2 = em_andamento, current_sprint = 2
   -> Progresso sobe automaticamente: 1/5 = 20%

3. Voce me avisa: "Sprint 2 concluida"
   -> Atualizo: sprint 2 = concluida, sprint 3 = em_andamento, current_sprint = 3
   -> Progresso: 2/5 = 40%

... e assim por diante ate 100%
```

O campo `progress` sera calculado automaticamente: `(sprints concluidas / total de sprints) * 100`.

---

## Modelo de Dados

### Tabela existente: `client_projects` -- Novas colunas

- `total_sprints` (integer, default 1)
- `current_sprint` (integer, default 1)
- `client_name` (text) -- nome do cliente exibido no card

### Nova tabela: `project_sprints`

| Coluna | Tipo | Descricao |
|---|---|---|
| id | UUID PK | Identificador |
| project_id | UUID FK | Referencia ao client_projects |
| sprint_number | INTEGER | Numero da sprint (1, 2, 3...) |
| title | TEXT | Ex: "Sprint 1 - Estrutura do CRM" |
| description | TEXT | O que sera feito nessa sprint |
| status | TEXT | `pendente`, `em_andamento`, `concluida` |
| start_date | DATE | Data de inicio |
| end_date | DATE | Data de fim |

### RLS
- Cliente ve apenas sprints dos seus projetos
- Somente admin insere/atualiza/deleta

---

## Frontend

### 1. Pagina `/dashboard/projetos`

- Lista os projetos do cliente em cards
- Cada card mostra: nome do projeto, nome do cliente, status, barra de progresso
- Ao expandir: **timeline vertical de sprints**
  - Sprint concluida: check verde
  - Sprint ativa: indicador pulsante roxo
  - Sprint pendente: circulo cinza
  - Cada sprint mostra titulo, descricao e datas

### 2. Dashboard (tela inicial)

- Secao "Meus Projetos" mostra cards resumidos
- Cada card exibe: nome do projeto + "Sprint 2 de 5" + barra de progresso
- Clicar no card navega para `/dashboard/projetos`

### 3. Calculo automatico do progresso

Quando eu atualizar as sprints no banco, o campo `progress` sera recalculado:

```text
progress = (sprints concluidas / total de sprints) * 100
```

Exemplo com 5 sprints:
- 0 concluidas = 0%
- 1 concluida = 20%
- 3 concluidas = 60%
- 5 concluidas = 100%

---

## Detalhes Tecnicos

### Migracao de banco:

```sql
ALTER TABLE public.client_projects
  ADD COLUMN total_sprints INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN current_sprint INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN client_name TEXT;

CREATE TABLE public.project_sprints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.client_projects(id) ON DELETE CASCADE,
  sprint_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pendente',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(project_id, sprint_number)
);

-- RLS: cliente ve sprints dos seus projetos, admin gerencia tudo
```

### Arquivos a criar:

| Arquivo | Descricao |
|---|---|
| `src/pages/dashboard/Projects.tsx` | Pagina com timeline de sprints |

### Arquivos a modificar:

| Arquivo | Mudanca |
|---|---|
| `src/pages/dashboard/Dashboard.tsx` | Cards clicaveis com info de sprint |
| `src/components/dashboard/ProjectCard.tsx` | Exibir "Sprint X de Y", tornar clicavel |
| `src/App.tsx` | Rota `/dashboard/projetos` |

### Nenhuma dependencia nova necessaria.

