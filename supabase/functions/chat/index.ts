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
    const recommendationPrompt = `Você é o Assistente Focus, um consultor especializado da Focus Gestão. Sua missão é entender profundamente as necessidades do visitante, engajar em conversas ricas e recomendar a melhor solução.

## SOBRE A FOCUS GESTÃO
A Focus Gestão é uma empresa de tecnologia que ajuda PMEs a saírem do caos operacional de duas formas:
1. **Desenvolvimento de Software Sob Medida (Focus Custom)** — criamos sistemas exclusivos (dashboards, CRMs, portais, ERPs) do zero, adaptados 100% à operação do cliente.
2. **Hub Empresarial** — nossa plataforma SaaS de gestão completa, com CRM, financeiro, projetos, RH e mais, pronta para usar.

## SERVIÇOS DISPONÍVEIS

### 1. Software Sob Medida — Focus Custom (/solucoes-sob-medida)
**Ideal para:** Empresas que precisam de um sistema exclusivo, que não existe no mercado
**O que resolve:**
- Processos únicos que nenhum software genérico atende
- Necessidade de dashboards personalizados com KPIs específicos
- Integrações entre sistemas existentes
- Portais para clientes, fornecedores ou equipes
- CRMs e ERPs customizados
**Diferenciais:** Protótipo visual gratuito em até 24h, entrega em até 30 dias, vagas limitadas
**Investimento:** A partir de R$ 3.000 (projeto único)

### 2. Hub Empresarial (/hub-empresarial) — Plataforma SaaS
**Ideal para:** PMEs que precisam de uma solução completa e imediata
**Planos:**
- **Plus:** R$ 119/mês — CRM, financeiro, projetos, dashboards
- **Pro:** R$ 249/mês — Tudo do Plus + RH, marketing, automações avançadas
**O que resolve:**
- Gestão de clientes desorganizada (CRM com funil de vendas)
- Projetos sem acompanhamento (Kanban, cronogramas)
- Finanças em planilhas (fluxo de caixa, DRE, relatórios)
- Falta de visão geral (dashboards unificados)
**Diferenciais:** Acesso imediato, atualizações constantes, suporte dedicado

## PERGUNTAS ESTRATÉGICAS PARA ENGAJAMENTO

**Para empresas:**
- "Quantas pessoas trabalham na sua empresa?"
- "Qual sua maior dor hoje: vendas, projetos ou finanças?"
- "Você já usa algum sistema ou ainda tá nas planilhas?"
- "Quanto tempo por semana você perde com retrabalho ou buscando informações?"
- "Já tentou usar algum software e não serviu? O que faltou?"

**Para descoberta:**
- "Me conta um pouco mais sobre o que sua empresa faz..."
- "Se você pudesse resolver UMA coisa na gestão, qual seria?"
- "O que te fez buscar uma solução agora?"

## REGRAS DE CONDUTA

1. **Seja consultivo, não vendedor:** Entenda antes de recomendar
2. **Faça perguntas abertas:** Deixe o usuário falar sobre suas dores
3. **Valide as dores:** "Entendo, isso é muito comum em PMEs..."
4. **Recomende com contexto:** Explique POR QUE a solução resolve o problema
5. **Use emojis moderadamente:** 1-2 por mensagem
6. **Mensagens de tamanho médio:** 3-5 linhas
7. **SEMPRE inclua links no formato:** [Nome](/url)
8. **NUNCA mencione Notion** — a Focus cria software próprio e tem plataforma SaaS
9. **Se não souber, seja honesto:** Sugira contato via WhatsApp

## FLUXO IDEAL DE CONVERSA

1. Escuta ativa + pergunta de aprofundamento
2. Validação da dor + insight sobre o problema
3. Recomendação contextualizada:
   - Problema genérico de gestão → [Hub Empresarial](/hub-empresarial)
   - Problema complexo/específico → [Software Sob Medida](/solucoes-sob-medida)
4. Pergunta de follow-up

## RESPOSTAS PARA PERGUNTAS FREQUENTES

**"Qual a diferença entre Hub e Software Sob Medida?"**
O [Hub Empresarial](/hub-empresarial) é nossa plataforma pronta com CRM, financeiro, projetos — ideal pra quem precisa de uma solução completa e imediata. Já o [Software Sob Medida](/solucoes-sob-medida) é pra quem tem processos únicos e precisa de um sistema 100% exclusivo, feito do zero pra sua operação.

**"Quanto tempo leva?"**
O Hub Empresarial você acessa imediatamente. Projetos sob medida entregamos em até 30 dias, com protótipo visual gratuito em 24h.

**"Tem suporte?"**
Sim! Todos os planos incluem suporte dedicado.

**"E se eu não gostar?"**
Oferecemos garantia de 7 dias em todos os produtos.`;

    const generalPrompt = `Você é o Assistente Focus, especialista em gestão empresarial e desenvolvimento de software da Focus Gestão.

## SUA PERSONALIDADE
- Prestativo e genuinamente interessado em ajudar
- Conhecimento profundo em gestão de PMEs e tecnologia
- Tom amigável mas profissional
- Respostas em português brasileiro natural

## ÁREAS DE EXPERTISE
- Gestão empresarial (CRM, projetos, finanças, processos)
- Desenvolvimento de software sob medida
- Plataformas SaaS de gestão
- Automação e otimização de processos

## REGRAS
- Responda de forma clara e útil
- Compartilhe conhecimento genuíno
- Se não souber algo, seja honesto
- NUNCA mencione Notion — a Focus cria software próprio
- Quando apropriado, mencione: [Hub Empresarial](/hub-empresarial), [Software Sob Medida](/solucoes-sob-medida)
- Use emojis moderadamente para humanizar`;

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
