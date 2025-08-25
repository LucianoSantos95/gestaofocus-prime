# Analytics Setup Guide

## ✅ Implementação Completa

O sistema de analytics foi implementado com sucesso usando Google Analytics 4 (GA4). Todas as funcionalidades estão configuradas e prontas para uso.

## 📊 O que foi implementado:

### 1. **Google Analytics 4 (GA4)**
- Script instalado no `index.html`
- Tracking de pageviews automático
- Eventos personalizados configurados

### 2. **Eventos rastreados automaticamente:**
- ✅ **Cliques no WhatsApp** - Todos os botões "Falar com Focus"
- ✅ **Cliques nos links do Notion** - Templates e demonstrações
- ✅ **Cliques no Stripe** - Botões de compra
- ✅ **Navegação entre páginas** - Menu e links internos
- ✅ **CTAs principais** - Todos os botões de conversão
- ✅ **Pageviews** - Mudanças de rota automáticas

### 3. **Localização dos eventos:**
- Header/Navigation
- Hero sections
- Seções de benefícios
- CTAs secundários
- Menu mobile

## 🔧 Configuração necessária:

### **PASSO OBRIGATÓRIO:**
Substitua `GA_MEASUREMENT_ID` no arquivo `index.html` pelo seu ID real do Google Analytics.

**Onde encontrar:**
1. Acesse [Google Analytics](https://analytics.google.com)
2. Crie uma propriedade GA4 
3. Copie o Measurement ID (formato: G-XXXXXXXXXX)
4. Substitua em **duas** linhas no `index.html`:
   - Linha ~21: `?id=GA_MEASUREMENT_ID`
   - Linha ~25: `gtag('config', 'GA_MEASUREMENT_ID')`

## 📈 Relatórios disponíveis:

### **Eventos principais para acompanhar:**
- `whatsapp_click` - Intenção de contato
- `notion_template_click` - Interesse em templates
- `stripe_purchase_click` - Intenção de compra
- `navigation_click` - Navegação pelo site
- `cta_click` - Engajamento geral

### **Parâmetros personalizados:**
- `event_category` - Tipo do evento
- `event_label` - Localização específica
- `custom_parameter_1` - Dados extras
- `custom_parameter_2` - Contexto adicional

## 🚀 Próximos passos:

1. **Configurar o Measurement ID** (obrigatório)
2. **Deploy da aplicação** para começar a coletar dados
3. **Configurar metas no GA4** baseadas nos eventos
4. **Criar dashboards personalizados**
5. **Configurar alertas** para eventos importantes

## 🔍 Verificação:

Após configurar o ID e fazer deploy:
1. Acesse o site
2. Abra o GA4 > Realtime
3. Navegue pelo site e clique nos botões
4. Verifique se os eventos aparecem em tempo real

## 📁 Arquivos modificados:

- `index.html` - Google Analytics script
- `src/lib/analytics.ts` - Funções de tracking
- `src/hooks/useAnalytics.tsx` - Hook para pageviews
- `src/App.tsx` - Provider de analytics
- `src/components/Navigation.tsx` - Tracking de navegação
- `src/components/HeroSection.tsx` - Tracking de CTAs
- `src/pages/HubEmpresarial.tsx` - Tracking específico da página

---

**⚠️ IMPORTANTE:** Sem o Measurement ID correto, os dados não serão coletados!