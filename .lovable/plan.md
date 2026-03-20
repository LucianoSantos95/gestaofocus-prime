

## Avaliação Completa do Blog — Aprovação Google AdSense

### Diagnóstico

---

### 1. INCONSISTÊNCIA DE ESTRUTURA (Problema Grave para AdSense)

Dos 48 artigos, existem **dois padrões completamente diferentes**:

**Padrão Novo (10 artigos)** — usa `SEOHead`, `ReadingProgressBar`, `TableOfContents`, `KeyTakeaways`, `ArticleEngagement`, `AuthorBio`, `InlineRelatedArticles`:
- ChecklistDiarioProdutividade, OrganizarRotinaSemanal, MetodoGTDGuia, MatrizEisenhower, ReunioesProdutivas, OrganizarTarefasDiaDia, PlanejamentoSemanalPassoPasso, MetodoPessoalProdutividade, OrganizacaoPessoalProfissional, ReduzirEstresseTrabalhoOrganizacao

**Padrão Antigo (18 artigos)** — usa `Helmet` diretamente, sem componentes de engajamento, sem `AuthorBio`, sem `ReadingProgressBar`, sem `TableOfContents` padronizado:
- PoderNotionEmpresas, TarefasVsIncendios, ProdutividadeFazerOqueImporta, PerdaTempoProfissionais, ProdutividadeAutonomosFreelancers, PararApagarIncendiosEmpresa, ProcessosInteligentesAutonomos, PararProcrastinarSistemasVisuais, SistemaProdutividadePassoPasso, PlanejamentoMensalSistema, TarefasSoltasEmResultados, SistemasNotionPequenasEmpresas, SistemaEstudosEficiente, OrganizarVidaDigital, RotinaMatinalPoderosa, SistemaCompletoNotion, PlanejamentoAnualZero, 150SistemasNotion

**Impacto AdSense:** Google avalia consistência e profissionalismo. Ter metade dos artigos com layout diferente sinaliza baixa qualidade editorial.

---

### 2. LINK QUEBRADO CONFIRMADO

- **BlogCTA (variant "download")** redireciona para `/sistemas-gratuitos` — essa rota **NÃO EXISTE** no `App.tsx`. É um link morto em todos os artigos que usam esse CTA. Isso é um fator de rejeição do AdSense.

---

### 3. PROBLEMAS DE SEO NOS ARTIGOS ANTIGOS

- **Sem Schema.org Article padronizado** — os artigos antigos usam `BlogPosting` manual, alguns com dados inconsistentes (ex: `PoderNotionEmpresas` usa "Focus Gestão Empresarial" como autor, outros usam "Focus Inteligente")
- **OG:image com caminho errado** — `RotinaMatinalPoderosa` usa `https://focusinteligente.com.br/assets/blog/rotina-matinal-poderosa.jpg` (caminho estático que não existe após build do Vite — deveria ser o hash do asset)
- **Canonical inconsistente** — alguns artigos definem canonical como URL completa, outros como path relativo

---

### 4. CONTEÚDO — AVALIAÇÃO DE PROFUNDIDADE

| Aspecto | Avaliação |
|---|---|
| Volume | 48 artigos — suficiente para AdSense |
| Tamanho médio | 300-500 linhas de TSX — bom (equivale a ~1500-2500 palavras) |
| Originalidade | Conteúdo parece original, não genérico |
| Profundidade | Artigos novos são bons (H2/H3, listas, exemplos). Artigos antigos são mais rasos |
| CTAs | Presente, mas link quebrado `/sistemas-gratuitos` prejudica |
| Categorização | 4 categorias bem definidas |

**Artigos de baixo valor:** Os artigos mais antigos sobre Notion especificamente (PoderNotionEmpresas, SistemaCompletoNotion, etc.) podem ser problemáticos pois você **não trabalha mais com Notion** — contradizem o posicionamento atual do site.

---

### 5. LINKS INTERNOS — VERIFICAÇÃO

- Links entre artigos (InlineRelatedArticles e RelatedArticles) usam slugs que correspondem às rotas no App.tsx — **corretos**
- Link `/blog` no breadcrumb — **correto**
- Link `/sistemas-gratuitos` no BlogCTA — **QUEBRADO**
- Links para `/produtos` mencionados na memória — rota **NÃO EXISTE** no App.tsx

---

### 6. SITEMAP vs ROTAS

O sitemap tem 48 artigos que correspondem às rotas do App.tsx — **consistente**.

---

## Plano de Melhoria para Aprovação AdSense

### Etapa 1 — Correções Críticas (Bloqueadoras)

1. **Corrigir link quebrado do BlogCTA** — mudar `/sistemas-gratuitos` para uma rota válida (ex: `/hub-empresarial` ou `/solucoes-sob-medida`)

2. **Migrar os 18 artigos antigos para o padrão novo** — trocar `Helmet` por `SEOHead`, adicionar `ReadingProgressBar`, `TableOfContents`, `KeyTakeaways`, `ArticleEngagement`, `AuthorBio`. Isso garante consistência editorial que o Google valoriza.

### Etapa 2 — SEO Técnico

3. **Corrigir OG:image nos artigos antigos** — usar import do asset (como os novos fazem) em vez de URLs estáticas hardcoded

4. **Padronizar nome do autor** — decidir entre "Focus Inteligente" ou "Focus Gestão Inteligente" e aplicar em todos

5. **Adicionar página "Sobre o Autor/Empresa"** — AdSense valoriza transparência. A página `/sobre-focus` já existe, mas verificar se tem informações de contato, CNPJ/responsável, e-mail.

### Etapa 3 — Conteúdo

6. **Revisar artigos sobre Notion** — como você não trabalha mais com Notion, os ~9 artigos da categoria "Notion para Empresas" contradizem seu posicionamento. Opções:
   - (a) Atualizar o conteúdo para falar de gestão empresarial de forma genérica
   - (b) Manter mas redirecionar os CTAs para seus serviços atuais
   - (c) Remover a categoria "Notion para Empresas" e recategorizar

7. **Adicionar página de Contato dedicada** — AdSense exige formas claras de contato

### Etapa 4 — Requisitos AdSense Técnicos

8. **Verificar páginas obrigatórias existem e estão completas:**
   - Política de Privacidade (`/privacidade`) — existe
   - Termos de Uso (`/termos`) — existe
   - Cookies (`/cookies`) — existe
   - Sobre (`/sobre-focus`) — existe
   - Contato — **verificar se existe formulário de contato**

### Resumo de Prioridades

```text
PRIORIDADE    AÇÃO                                      IMPACTO
─────────────────────────────────────────────────────────────
CRÍTICA       Corrigir link /sistemas-gratuitos          Link morto = rejeição
CRÍTICA       Migrar 18 artigos para padrão novo         Consistência editorial
ALTA          Corrigir OG:image hardcoded                SEO + compartilhamento
ALTA          Padronizar nome do autor                   Credibilidade
MÉDIA         Revisar artigos sobre Notion               Alinhamento de marca
MÉDIA         Página de contato dedicada                 Requisito AdSense
```

