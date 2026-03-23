

## Diagnóstico: Por que Instagram Pago não converte

### O Problema Central

Hoje: 27 visitas do Instagram, 41 mobile, 43 pageviews no Hub, **0 conversões**.

O funil está quebrado em um ponto específico: **todos os CTAs mandam o usuário direto para uma URL externa** (`app.focusinteligente.com.br/auth`). Isso causa:

1. **Perda de confiança** — o usuário do Instagram acabou de te conhecer, não está pronto para criar conta em outro site
2. **Perda do lead** — se ele não cria a conta, você perde o contato para sempre
3. **Sem aquecimento** — tráfego pago (Instagram) é tráfego frio. Pessoas não criam conta em SaaS na primeira visita

### O que falta: uma etapa intermediária de captura

```text
FUNIL ATUAL (quebrado):
  Instagram Ad → Hub Page → [CTA] → Site externo → PERDEU

FUNIL PROPOSTO:
  Instagram Ad → Hub Page → [CTA] → Modal de Lead → WhatsApp/Email capturado
                                                   → DEPOIS redireciona para auth
```

---

## Plano de Implementação

### 1. Criar Modal de Captura de Lead no Hub (Prioridade Máxima)

Em vez de mandar direto para `app.focusinteligente.com.br/auth`, os CTAs do Hub devem abrir um modal rápido que:
- Pede **nome** e **WhatsApp** (2 campos apenas — baixa fricção)
- Salva na tabela `consultation_leads` (já existe)
- **Depois** redireciona para a auth externa
- Tracking: `hub_lead_captured`

Novo componente: `src/components/hub/HubLeadModal.tsx`

### 2. Aplicar o Modal em todos os CTAs do Hub

Modificar `src/pages/HubEmpresarial.tsx`:
- Hero CTA → abre modal em vez de link direto
- Pricing CTAs → abre modal
- CTA Final → abre modal
- StickyMobileCTA → abre modal

### 3. WhatsApp Follow-up Automático

Após o lead ser capturado, exibir mensagem de sucesso com:
- Link direto para criar conta
- Botão WhatsApp pré-preenchido para iniciar conversa

### 4. UTM Tracking para Instagram

Adicionar detecção de `utm_source` na URL para saber exatamente quais leads vieram do Instagram pago vs orgânico. Salvar na tabela junto com o lead.

---

### Arquivos a criar/modificar

| Arquivo | Ação |
|---|---|
| `src/components/hub/HubLeadModal.tsx` | Criar — modal 2 campos (nome + WhatsApp) |
| `src/pages/HubEmpresarial.tsx` | Modificar — CTAs abrem modal |
| `src/components/hub/StickyMobileCTA.tsx` | Modificar — CTA abre modal |

### Impacto Esperado

- **Capturar leads mesmo sem conversão em conta** — você mantém o contato para follow-up
- **Reduzir fricção** — nome + WhatsApp é mais fácil que criar conta num site desconhecido
- **Habilitar remarketing** — com WhatsApp capturado, você pode fazer follow-up manual ou automatizado

