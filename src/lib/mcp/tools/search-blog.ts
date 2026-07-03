import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SITE = "https://focusinteligente.com.br";

// Curated catalog of Focus blog posts (slug + human title).
const POSTS: Array<{ slug: string; title: string; tags: string[] }> = [
  { slug: "poder-do-notion-empresas-produtivas", title: "O poder do Notion em empresas produtivas", tags: ["notion", "produtividade", "empresas"] },
  { slug: "mapeamento-processos-crescimento", title: "Mapeamento de processos para crescimento", tags: ["processos", "gestao"] },
  { slug: "5-erros-produtividade", title: "5 erros de produtividade", tags: ["produtividade", "erros"] },
  { slug: "gestao-projetos-notion", title: "Gestão de projetos", tags: ["projetos", "gestao"] },
  { slug: "sistema-completo-notion-automacao", title: "Sistema completo com automação", tags: ["sistema", "automacao"] },
  { slug: "matriz-eisenhower", title: "Matriz de Eisenhower", tags: ["priorizacao", "metodos"] },
  { slug: "metodo-gtd-guia", title: "Método GTD — Guia completo", tags: ["gtd", "metodos", "produtividade"] },
  { slug: "tecnica-pomodoro-guia", title: "Técnica Pomodoro — Guia", tags: ["pomodoro", "foco"] },
  { slug: "planejamento-semanal-passo-a-passo", title: "Planejamento semanal passo a passo", tags: ["planejamento", "semanal"] },
  { slug: "planejamento-mensal-sistema", title: "Sistema de planejamento mensal", tags: ["planejamento", "mensal"] },
  { slug: "planejamento-anual-do-zero", title: "Planejamento anual do zero", tags: ["planejamento", "anual"] },
  { slug: "reunioes-produtivas", title: "Reuniões produtivas", tags: ["reunioes", "gestao"] },
  { slug: "ia-pmes-automatizar-processos", title: "IA para PMEs automatizarem processos", tags: ["ia", "pmes", "automacao"] },
  { slug: "mapeamento-processos-agencias", title: "Mapeamento de processos para agências", tags: ["agencias", "processos"] },
  { slug: "notion-agencias-guia-2026", title: "Notion para agências — Guia 2026", tags: ["notion", "agencias"] },
  { slug: "150-sistemas-notion", title: "150 sistemas em Notion", tags: ["notion", "sistemas"] },
  { slug: "notion-vs-planilhas", title: "Notion vs Planilhas", tags: ["notion", "planilhas"] },
  { slug: "rotina-matinal-poderosa", title: "Rotina matinal poderosa", tags: ["rotina", "habitos"] },
  { slug: "metas-inteligentes-smart", title: "Metas inteligentes SMART", tags: ["metas", "smart"] },
  { slug: "organizar-tarefas-dia-a-dia", title: "Organizar tarefas do dia a dia", tags: ["tarefas", "organizacao"] },
  { slug: "gestao-tempo-quem-vive-ocupado", title: "Gestão de tempo para quem vive ocupado", tags: ["tempo", "gestao"] },
  { slug: "checklist-diario-produtividade", title: "Checklist diário de produtividade", tags: ["checklist", "produtividade"] },
];

export default defineTool({
  name: "search_blog",
  title: "Search Focus blog",
  description:
    "Search Focus Gestão's blog by keyword against titles, slugs and tags. Returns matching posts with absolute URLs.",
  inputSchema: {
    query: z.string().trim().min(1).describe("Keyword (e.g. 'notion', 'produtividade', 'gtd')."),
    limit: z.number().int().min(1).max(25).optional().describe("Max results (default 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.toLowerCase();
    const max = limit ?? 10;
    const results = POSTS.filter(
      (p) =>
        p.slug.includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)),
    )
      .slice(0, max)
      .map((p) => ({ title: p.title, url: `${SITE}/blog/${p.slug}`, tags: p.tags }));

    return {
      content: [
        {
          type: "text",
          text:
            results.length === 0
              ? `Nenhum artigo encontrado para "${query}".`
              : JSON.stringify(results, null, 2),
        },
      ],
      structuredContent: { results, count: results.length },
    };
  },
});
