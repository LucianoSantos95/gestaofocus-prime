import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SERVICES = [
  {
    id: "focus-custom",
    name: "Focus Custom — Software Sob Medida",
    url: "https://focusinteligente.com.br/solucoes-sob-medida",
    positioning: "Lovable Partner Oficial",
    pricing: "Valor sob consulta (projeto fechado, 50% assinatura + 50% entrega)",
    description:
      "Desenvolvimento de sistemas exclusivos (dashboards, CRMs, portais, ERPs, agentes de IA, playbooks) construídos sobre a Lovable, adaptados 100% à operação do cliente.",
    idealFor:
      "Agências, consultorias e prestadores de serviço com processos únicos que nenhum SaaS genérico atende.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List Focus services",
  description:
    "List Focus Gestão's services (Focus Custom sob medida) with positioning, pricing and target audience.",
  inputSchema: {
    id: z
      .enum(["focus-custom"])
      .optional()
      .describe("Optional service id to return only one service."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const items = id ? SERVICES.filter((s) => s.id === id) : SERVICES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
