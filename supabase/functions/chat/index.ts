import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, mode } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // System prompt especializado para recomendações de produtos
    const recommendationPrompt = `Você é um consultor da Focus Inteligente. Seu objetivo é entender a necessidade do visitante e recomendar O PRODUTO CERTO.

PRODUTOS DISPONÍVEIS:
1. Hub Empresarial PRO (/hub-empresarial) - R$349
   Para: Pequenas empresas, MEIs que querem gestão completa
   Inclui: CRM, projetos, financeiro, processos, dashboards
   
2. Controle Financeiro PRO (/controle-financeiro-pro) - R$297
   Para: Quem precisa organizar finanças da empresa
   Inclui: Fluxo de caixa, categorias, relatórios, contratos
   
3. Sprint de Produtividade (/sprint-produtividade) - R$37,90
   Para: Pessoas que querem organizar rotina pessoal
   Inclui: Sistema de 7 dias, templates, metodologia

4. Sistemas Gratuitos (/sistemas-gratuitos) - Grátis
   Para: Quem quer começar sem investir
   Inclui: Templates básicos de vários tipos

INSTRUÇÕES:
- Faça 1-2 perguntas curtas para entender a necessidade
- Seja direto e amigável
- Ao recomendar, SEMPRE inclua o link no formato [Nome do Produto](/url)
- Se a pessoa não sabe o que quer, pergunte se é para empresa ou pessoal
- Respostas curtas e objetivas (máximo 3-4 linhas por mensagem)`;

    const generalPrompt = `Você é um assistente virtual da Focus Inteligente, especializado em produtividade, gestão empresarial e Notion. 
Seja prestativo, claro e conciso em suas respostas em português brasileiro.
Ajude os usuários com dúvidas sobre organização, sistemas de gestão, templates do Notion e métodos de produtividade.
Se não souber algo, seja honesto e sugira que o usuário entre em contato com a equipe Focus.`;

    const systemPrompt = mode === "recommendation" ? recommendationPrompt : generalPrompt;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Muitas requisições. Por favor, aguarde um momento e tente novamente." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos insuficientes. Por favor, adicione créditos à sua conta." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Erro ao processar sua mensagem. Tente novamente." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
