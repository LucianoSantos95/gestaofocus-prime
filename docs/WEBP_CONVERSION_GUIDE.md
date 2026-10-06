# Guia de Conversão de Imagens para WebP

## Por que WebP?

O formato WebP oferece:
- **25-35% menor** tamanho de arquivo comparado a JPEG/PNG
- **Melhor performance** de carregamento da página
- **Suporte nativo** em todos os navegadores modernos
- **Core Web Vitals** otimizados (LCP, CLS)

## Como Converter Imagens para WebP

### Método 1: Usando ferramentas online

1. **Squoosh.app** (Recomendado)
   - Acesse: https://squoosh.app/
   - Arraste suas imagens
   - Selecione WebP como formato de saída
   - Ajuste qualidade (80-90 recomendado)
   - Download

2. **CloudConvert**
   - Acesse: https://cloudconvert.com/jpg-to-webp
   - Upload em lote
   - Converte múltiplas imagens

### Método 2: Usando linha de comando

#### Instalar cwebp (Google WebP)

**macOS:**
```bash
brew install webp
```

**Linux:**
```bash
apt-get install webp
```

**Windows:**
- Download: https://developers.google.com/speed/webp/download

#### Converter imagens

**Converter uma imagem:**
```bash
cwebp -q 85 input.jpg -o output.webp
```

**Converter todas as imagens em uma pasta:**
```bash
for file in public/lovable-uploads/*.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

### Método 3: Usando Node.js (Automatizado)

Crie um script `convert-to-webp.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/lovable-uploads';
const supportedFormats = ['.jpg', '.jpeg', '.png'];

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  
  if (supportedFormats.includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = inputPath.replace(ext, '.webp');
    
    sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath)
      .then(() => console.log(`✓ Convertido: ${file}`))
      .catch(err => console.error(`✗ Erro: ${file}`, err));
  }
});
```

Instalar e executar:
```bash
npm install sharp
node convert-to-webp.js
```

## Como Usar WebP no Projeto

### Opção 1: Componente OptimizedImage

```tsx
import { OptimizedImage } from "@/components/OptimizedImage";

<OptimizedImage 
  src="/lovable-uploads/hero.jpg"
  webpSrc="/lovable-uploads/hero.webp"
  alt="Hero image"
  width={1920}
  height={1080}
  loading="lazy"
/>
```

### Opção 2: Picture Element Manual

```tsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img 
    src="/image.jpg" 
    alt="Fallback" 
    width={800}
    height={600}
    loading="lazy"
  />
</picture>
```

## Imagens Prioritárias para Conversão

### Alta Prioridade (Above-the-fold)
1. Logo principal (`/lovable-uploads/focus-logo.png`)
2. Imagens hero das páginas principais
3. Imagens da seção "trusted by"

### Média Prioridade
1. Imagens de cards de serviço
2. Imagens de testimonials
3. Imagens de produtos

### Baixa Prioridade
1. Imagens de blog (já com lazy loading)
2. Imagens decorativas
3. Ícones (considerar SVG em vez de WebP)

## Checklist de Implementação

- [x] Criar componente OptimizedImage
- [x] Adicionar preload para recursos críticos
- [x] Otimizar carregamento de fontes com font-display: swap
- [ ] Converter imagens hero para WebP
- [ ] Converter logo principal para WebP
- [ ] Converter imagens de produtos para WebP
- [ ] Converter imagens de blog para WebP
- [ ] Implementar lazy loading para todas as imagens
- [ ] Testar em diferentes browsers

## Boas Práticas

1. **Sempre forneça fallback**: Use `<picture>` com fonte JPEG/PNG
2. **Mantenha originais**: Não delete os JPG/PNG originais
3. **Qualidade**: Use 80-85 para fotos, 90-95 para gráficos
4. **Dimensões**: Sempre especifique width e height
5. **Alt text**: Sempre forneça alt text descritivo
6. **Lazy loading**: Use `loading="lazy"` exceto para above-the-fold

## Resultados Esperados

Após implementação completa:
- **Redução de 25-35%** no peso das páginas
- **LCP melhorado** em 1-2 segundos
- **PageSpeed Score** +10-15 pontos
- **Menor consumo** de dados móveis
- **Core Web Vitals** no verde

## Ferramentas de Teste

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **Chrome DevTools**: Network tab > Size column
- **Lighthouse**: Chrome DevTools > Lighthouse tab

## CDN e Automação (Produção)

Para produção, considere usar um CDN com transformação automática:
- **Cloudflare Images**: Converte automaticamente
- **Imgix**: Otimização automática de imagens
- **Cloudinary**: Transformações em tempo real
- **Vercel Image Optimization**: Se hospedado na Vercel

Exemplo com CDN:
```tsx
<img 
  src="https://cdn.example.com/image.jpg?format=webp&width=800"
  alt="Auto-convertido para WebP"
/>
```
