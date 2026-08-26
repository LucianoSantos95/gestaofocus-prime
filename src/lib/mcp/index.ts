import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactTool from "./tools/get-contact";

// Issuer must be the direct supabase.co host, built from the project ref so it
// stays import-safe (no runtime env read). The fallback keeps the string well-
// formed during the throwaway manifest-extract eval.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "focus-gestao-mcp",
  title: "Focus Gestão MCP",
  version: "0.1.0",
  instructions:
    "Tools to explore Focus Gestão (Lovable Partner Oficial): list services (Focus Custom sob medida) and retrieve official contact URLs. Requires OAuth sign-in.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listServicesTool, getContactTool],
});
