import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get Focus contact info",
  description: "Return canonical contact channels and key URLs for Focus Gestão.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      company: "Focus Gestão",
      positioning: "Lovable Partner Oficial",
      site: "https://focusinteligente.com.br",
      about: "https://focusinteligente.com.br/sobre",
      helpCenter: "https://focusinteligente.com.br/central-ajuda",
      services: {
        focusCustom: "https://focusinteligente.com.br/solucoes-sob-medida",
      },
      billing: "Consultoria por projeto fechado (valor sob consulta).",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
