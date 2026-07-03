import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import blogRoutes from "../../../../scripts/blog-routes.json";

type Route = { loc: string; lastmod?: string };

const SITE = "https://focusinteligente.com.br";

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default defineTool({
  name: "search_blog",
  title: "Search Focus blog",
  description:
    "Search Focus Gestão's blog articles by keyword in the URL slug. Returns matching post titles and absolute URLs.",
  inputSchema: {
    query: z.string().trim().min(1).describe("Keyword to match against the article slug."),
    limit: z.number().int().min(1).max(25).optional().describe("Max results (default 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.toLowerCase();
    const max = limit ?? 10;
    const results = (blogRoutes as Route[])
      .filter((r) => r.loc.startsWith("/blog/"))
      .filter((r) => r.loc.toLowerCase().includes(q))
      .slice(0, max)
      .map((r) => {
        const slug = r.loc.replace("/blog/", "");
        return {
          title: slugToTitle(slug),
          url: `${SITE}${r.loc}`,
          lastmod: r.lastmod,
        };
      });

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
