

# Plano: Reposicionar Blog para Nicho de Agências, Consultorias e Prestadores de Serviço

## Escopo

- 1 página principal do Blog (`src/pages/Blog.tsx`)
- 48 artigos individuais em `src/pages/blog/`
- Atualização do `public/sitemap.xml` com datas atuais
- SEO técnico com `react-helmet-async` em todos os arquivos

São muitos arquivos. Vamos dividir em **6 etapas**.

---

## Etapa 1 — Página Principal do Blog + Categorias

**Arquivo:** `src/pages/Blog.tsx`

| Item | De | Para |
|---|---|---|
| H1 | "Blog Focus — Gestão empresarial, produtividade e Notion na prática" | "Blog Focus — Gestão para Agências, Consultorias e Prestadores de Serviço" |
| Meta title | genérico | "Blog Focus \| Gestão para Agências, Consultorias e Prestadores de Serviço" |
| Meta description | genérico | "Artigos práticos sobre gestão de projetos, financeiro, CRM e produtividade para agências, consultorias e prestadores de serviço." |
| Keywords | genérico | "gestão para agências, sistema para consultoria, produtividade prestadores de serviço" |
| Categorias | "Gestão Empresarial", "Produtividade", "Notion para Empresas", "Inteligência Artificial" | "Gestão para Agências", "Produtividade Operacional", "Sistemas e Processos", "Crescimento e Escala" |

- Atualizar todos os `category` dos 48 posts no array `blogPosts` para as novas categorias
- Reescrever títulos e excerpts dos posts no array para linguagem do nicho
- Atualizar `featuredSlugs` para destacar os 3 artigos mais relevantes para o nicho

---

## Etapa 2 — Artigos de Gestão Empresarial (12 artigos)

Reescrever copy interno (H1, subtítulo, conteúdo, SEOHead) dos artigos que já falam de gestão, contextualizando para agências/consultorias:

1. `PararApagarIncendiosEmpresa.tsx`
2. `OrganizarProjetosCaoticos.tsx`
3. `MapeamentoProcessos.tsx`
4. `OrganizarDocumentosEmpresa.tsx`
5. `ErroSilenciosoProdutividade.tsx`
6. `TarefasVsIncendios.tsx`
7. `MetasInteligentesSmart.tsx`
8. `ReunioesProdutivas.tsx`
9. `ProcessosInteligentesAutonomos.tsx`
10. `OrganizacaoFinanceiraPessoal.tsx`
11. `PlanejamentoAnualZero.tsx`
12. `CriarHabitosDuram.tsx`

**Padrão de mudança por artigo:**
- SEOHead: meta title com keyword do nicho (≤60 chars), description (≤155 chars), keywords nichadas
- H1: contextualizar para agências/consultorias
- Conteúdo: trocar exemplos genéricos por cenários de agências (ex: "projetos de clientes", "entregas atrasadas", "pipeline de vendas")
- Alt text: descritivo e com keyword do nicho
- BlogBreadcrumb: manter
- Categoria: atualizar para nova nomenclatura

---

## Etapa 3 — Artigos de Notion/Sistemas (12 artigos)

Reescrever para posicionar Notion como ferramenta para agências/consultorias:

1. `PoderNotionEmpresas.tsx`
2. `GestaoProjetosNotion.tsx`
3. `SistemaCompletoNotion.tsx`
4. `NotionVsPlanilhas.tsx`
5. `SistemasNotionPequenasEmpresas.tsx`
6. `ClarezaProjetosNotion.tsx`
7. `150SistemasNotion.tsx`
8. `ConfiarSistemasProducao.tsx`
9. `CaosRotinaProdutiva.tsx`
10. `OrganizacaoPessoalTecnologia.tsx`
11. `SistemaProdutividadePassoPasso.tsx`
12. `TarefasSoltasEmResultados.tsx`

---

## Etapa 4 — Artigos de Produtividade Parte 1 (12 artigos)

Reescrever com contexto de produtividade para equipes de serviço:

1. `ErrosProdutividade.tsx`
2. `PerdaTempoProfissionais.tsx`
3. `ProdutividadeFazerOqueImporta.tsx`
4. `ChecklistDiarioProdutividade.tsx`
5. `OrganizarRotinaSemanal.tsx`
6. `ProdutividadeAutonomosFreelancers.tsx`
7. `PararProcrastinarSistemasVisuais.tsx`
8. `PlanejamentoMensalSistema.tsx`
9. `GuiaFocoEvitarDistracoes.tsx`
10. `MetodosProdutividade2025.tsx`
11. `RotinaMatinalPoderosa.tsx`
12. `MelhorarConcentracaoDistracoes.tsx`

---

## Etapa 5 — Artigos de Produtividade Parte 2 (12 artigos)

1. `MapasMentaisOrganizarIdeias.tsx`
2. `GestaoTempoQuemViveOcupado.tsx`
3. `SistemaEstudosEficiente.tsx`
4. `MetodoGTDGuia.tsx`
5. `MatrizEisenhower.tsx`
6. `OrganizarTarefasDiaDia.tsx`
7. `PlanejamentoSemanalPassoPasso.tsx`
8. `MetodoPessoalProdutividade.tsx`
9. `OrganizacaoPessoalProfissional.tsx`
10. `ReduzirEstresseTrabalhoOrganizacao.tsx`
11. `OrganizarVidaDigital.tsx`
12. `TecnicaPomodoroGuia.tsx`

---

## Etapa 6 — Sitemap + Validação Final

- Atualizar `public/sitemap.xml` com `lastmod` de hoje em todos os artigos
- Verificar que todos os 48 artigos + página Blog usam `react-helmet-async`
- Confirmar H1 único por página, alt text em imagens, canonical URLs corretas
- Validar que categorias novas estão consistentes entre `Blog.tsx` e cada artigo

---

## SEO Técnico — Aplicado em Todas as Etapas

Cada artigo será atualizado com:
- `react-helmet-async` via componente `SEOHead` (já migrado)
- Meta title ≤ 60 chars com keyword do nicho
- Meta description ≤ 155 chars
- Keywords: variações de "agências", "consultorias", "prestadores de serviço"
- H1 único e nichado
- Alt text descritivo em todas as imagens
- Canonical URL correta
- Structured data Article (já existe no SEOHead)

---

## O que NÃO muda

- Layout/design dos artigos (mesma estrutura visual)
- Componentes de blog (ReadingProgressBar, TableOfContents, KeyTakeaways, AuthorBio, etc.)
- URLs/slugs dos artigos (manter para não quebrar indexação existente)
- Sistema de paginação (4 artigos + "Ver mais")

---

## Fluxo de Execução

Ao aprovar, começo pela **Etapa 1** (página principal do Blog). Ao finalizar, indico "Etapa 1 concluída — diga 'próxima etapa' para continuar com a Etapa 2."

