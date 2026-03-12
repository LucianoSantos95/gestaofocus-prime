

## Plano: Atualizar Hero e Formulário da página Soluções Sob Medida

### Alterações

**1. `src/pages/SolucoesSobMedida.tsx` — Hero Section**
- Título: "Do Caos na Gestão ao Seu Software Exclusivo em Recorde de Tempo."
- Subtítulo: texto fornecido sobre protótipo visual em 24h
- CTA: "QUERO MEU PROTÓTIPO GRATUITO"
- Texto abaixo do CTA: remover ou ajustar para algo como "Sem compromisso"

**2. `src/components/ApplicationFormModal.tsx` — Reformular formulário (5 etapas)**

| Etapa | Campo | Tipo |
|-------|-------|------|
| 1 | Nome | Input texto |
| 2 | E-mail | Input email |
| 3 | WhatsApp | Input tel |
| 4 | Nome da empresa/projeto | Input texto |
| 5 | Descreva o principal desafio | Textarea |
| 6 | Estimativa de investimento | Seleção (4 opções + Outro com campo livre) |

- Atualizar `formSchema` com os novos campos (company_name, challenge)
- Atualizar `stepConfig` para 6 etapas
- Atualizar `investmentOptions`: "Até R$ 3.000", "R$ 3.000 a R$ 7.000", "Acima de R$ 7.000", "Outro"
- Campo "Outro" exibe input adicional para valor customizado
- Na submissão, mapear os novos campos para as colunas existentes da tabela `consultation_leads`:
  - `company_name` → `business_type`
  - `challenge` → `additional_details`
  - `main_objective` → "software_sob_medida"
  - Campos não usados (`uses_notion`, `start_timeline`) → "a_definir"
- Mensagem de sucesso: ajustar para mencionar "protótipo em até 24h"

### Sem migração necessária
A tabela `consultation_leads` já tem todos os campos necessários — reutilizamos `business_type` para empresa e `additional_details` para o desafio.

