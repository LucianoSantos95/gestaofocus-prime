import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, segment, team_size, challenges, problem_description } = await req.json();

    if (!name || !email || !segment || !team_size || !challenges || !Array.isArray(challenges) || challenges.length === 0) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Input length & type validation to prevent prompt injection / token abuse
    const isStr = (v: unknown, max: number) => typeof v === "string" && v.length > 0 && v.length <= max;
    if (
      !isStr(name, 100) ||
      !isStr(email, 255) ||
      !isStr(segment, 100) ||
      !isStr(team_size, 50) ||
      (phone !== undefined && phone !== null && phone !== "" && (typeof phone !== "string" || phone.length > 20)) ||
      (problem_description !== undefined && problem_description !== null && problem_description !== "" && (typeof problem_description !== "string" || problem_description.length > 2000)) ||
      challenges.length > 10 ||
      !challenges.every((c: unknown) => typeof c === "string" && c.length <= 100)
    ) {
      return new Response(
        JSON.stringify({ error: "Entrada inválida." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Strip control chars that could break prompt structure
    const sanitize = (s: string) => s.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
    const safeName = sanitize(name);
    const safeSegment = sanitize(segment);
    const safeTeamSize = sanitize(team_size);
    const safeProblem = problem_description ? sanitize(problem_description) : "";

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const challengeLabels: Record<string, string> = {
      projetos_atrasados: "Projetos atrasados e sem visibilidade",
      financeiro_baguncado: "Financeiro desorganizado",
      sem_processos: "Falta de processos definidos",
      equipe_desalinhada: "Equipe desalinhada e sem padrão",
    };

    const challengeText = challenges.map((c: string) => challengeLabels[c] || c).join(", ");
    const firstName = name.split(" ")[0];

    const systemPrompt = `Você é um consultor especialista em gestão empresarial e produtividade operacional. Gere um diagnóstico PROFUNDO e ações práticas para empresas.

REGRAS:
- Responda APENAS com o JSON solicitado, sem markdown
- Use o nome "${firstName}" ao longo do diagnóstico para personalizar
- As ações devem ser ESPECÍFICAS para o segmento, tamanho da equipe E os problemas descritos pelo usuário
- Cada ação deve ter um passo-a-passo detalhado de implementação (5-7 etapas claras)
- O score deve refletir a gravidade real dos problemas baseado tanto nos desafios selecionados quanto na descrição livre
- A projeção deve ser realista e conservadora, mencionando o nome da pessoa
- recommended_product deve ser "hub-empresarial" para equipes de 2+ pessoas ou "solucoes-sob-medida" para casos complexos
- O campo greeting deve ser uma frase personalizada e empática para ${firstName}`;

    const userPrompt = `Gere um plano de ação profundo para:
- Nome: ${name}
- Segmento: ${segment}
- Equipe: ${team_size} pessoas
- Desafios selecionados: ${challengeText}
- Descrição detalhada dos problemas: ${problem_description || "Não informado"}

Retorne EXATAMENTE este JSON:
{
  "greeting": "<frase personalizada para ${firstName}, ex: '${firstName}, identifiquei pontos críticos que estão travando sua operação.'>",
  "scores": {
    "projetos": <0-100>,
    "financeiro": <0-100>,
    "processos": <0-100>,
    "equipe": <0-100>
  },
  "actions": [
    {
      "title": "<ação específica>",
      "description": "<resumo em 1-2 frases>",
      "timeframe": "<prazo: ex: 2 dias>",
      "steps": [
        "<passo 1 detalhado>",
        "<passo 2 detalhado>",
        "<passo 3 detalhado>",
        "<passo 4 detalhado>",
        "<passo 5 detalhado>"
      ]
    },
    {
      "title": "<ação específica>",
      "description": "<resumo>",
      "timeframe": "<prazo>",
      "steps": ["<passo 1>", "<passo 2>", "<passo 3>", "<passo 4>", "<passo 5>"]
    },
    {
      "title": "<ação específica>",
      "description": "<resumo>",
      "timeframe": "<prazo>",
      "steps": ["<passo 1>", "<passo 2>", "<passo 3>", "<passo 4>", "<passo 5>"]
    }
  ],
  "projection": "<resultado esperado em 30 dias, mencionando ${firstName} pelo nome>",
  "recommended_product": "<hub-empresarial ou solucoes-sob-medida>"
}`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "generate_action_plan",
              description: "Generate a structured business action plan with detailed steps",
              parameters: {
                type: "object",
                properties: {
                  greeting: { type: "string" },
                  scores: {
                    type: "object",
                    properties: {
                      projetos: { type: "number" },
                      financeiro: { type: "number" },
                      processos: { type: "number" },
                      equipe: { type: "number" },
                    },
                    required: ["projetos", "financeiro", "processos", "equipe"],
                  },
                  actions: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        description: { type: "string" },
                        timeframe: { type: "string" },
                        steps: { type: "array", items: { type: "string" } },
                      },
                      required: ["title", "description", "timeframe", "steps"],
                    },
                  },
                  projection: { type: "string" },
                  recommended_product: { type: "string", enum: ["hub-empresarial", "solucoes-sob-medida"] },
                },
                required: ["greeting", "scores", "actions", "projection", "recommended_product"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "generate_action_plan" } },
      }),
    });

    if (!aiResponse.ok) {
      const status = aiResponse.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Muitas solicitações. Tente novamente em instantes." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "Serviço temporariamente indisponível." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await aiResponse.text();
      console.error("AI gateway error:", status, errText);
      throw new Error("AI gateway error");
    }

    const aiData = await aiResponse.json();
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    
    let diagnosisResult;
    if (toolCall?.function?.arguments) {
      diagnosisResult = typeof toolCall.function.arguments === "string"
        ? JSON.parse(toolCall.function.arguments)
        : toolCall.function.arguments;
    } else {
      const content = aiData.choices?.[0]?.message?.content || "";
      diagnosisResult = JSON.parse(content);
    }

    // Save lead to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    await supabase.from("diagnosis_leads").insert({
      name,
      email,
      phone: phone || null,
      segment,
      team_size,
      challenges,
      problem_description: problem_description || null,
      diagnosis_result: diagnosisResult,
      recommended_product: diagnosisResult.recommended_product,
    });

    return new Response(JSON.stringify(diagnosisResult), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-action-plan error:", e);
    return new Response(
      JSON.stringify({ error: "Erro ao gerar o plano. Tente novamente." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
