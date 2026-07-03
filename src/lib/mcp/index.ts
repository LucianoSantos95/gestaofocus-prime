import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import searchBlogTool from "./tools/search-blog";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "focus-gestao-mcp",
  title: "Focus Gestão MCP",
  version: "0.1.0",
  instructions:
    "Tools to explore Focus Gestão (Lovable Partner Oficial): list services (Focus Custom sob medida e Hub Empresarial SaaS), search blog articles, and retrieve official contact URLs.",
  tools: [listServicesTool, searchBlogTool, getContactTool],
});
