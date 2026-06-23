import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração
const DOMAIN = 'https://focusinteligente.com.br';
const APP_FILE = path.join(__dirname, '../src/App.tsx');
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Páginas estáticas principais
const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/solucoes-sob-medida', priority: '0.9', changefreq: 'weekly' },
  { loc: '/hub-empresarial', priority: '0.9', changefreq: 'weekly' },
  { loc: '/blog', priority: '0.9', changefreq: 'weekly' },
  { loc: '/sobre', priority: '0.7', changefreq: 'monthly' },
  { loc: '/contato', priority: '0.7', changefreq: 'monthly' },
  { loc: '/faq', priority: '0.7', changefreq: 'monthly' },
  { loc: '/ajuda', priority: '0.5', changefreq: 'monthly' },
  { loc: '/status', priority: '0.4', changefreq: 'weekly' },
  { loc: '/privacidade', priority: '0.3', changefreq: 'yearly' },
  { loc: '/termos', priority: '0.3', changefreq: 'yearly' },
  { loc: '/termos-uso', priority: '0.3', changefreq: 'yearly' },
  { loc: '/cookies', priority: '0.3', changefreq: 'yearly' },
];

// Obter rotas de blog reais a partir de App.tsx
function getBlogPosts() {
  try {
    const content = fs.readFileSync(APP_FILE, 'utf8');
    const matches = [...content.matchAll(/path="(\/blog\/[^"]+)"/g)];
    const today = new Date().toISOString().split('T')[0];
    const seen = new Set();
    return matches
      .map(m => m[1])
      .filter(p => !seen.has(p) && seen.add(p))
      .map(loc => ({ loc, lastmod: today, changefreq: 'weekly', priority: '0.7' }));
  } catch (error) {
    console.error('Erro ao ler App.tsx:', error);
    return [];
  }
}

// Gerar XML do sitemap
function generateSitemapXML(pages) {
  const urls = pages.map(page => `  <url>
    <loc>${DOMAIN}${page.loc}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Função principal
function generateSitemap() {
  console.log('🚀 Gerando sitemap.xml...');
  
  // Obter posts do blog
  const blogPosts = getBlogPosts();
  console.log(`📝 Encontrados ${blogPosts.length} artigos do blog`);
  
  // Combinar páginas estáticas e posts do blog
  const allPages = [...staticPages, ...blogPosts];
  console.log(`📄 Total de ${allPages.length} páginas no sitemap`);
  
  // Gerar XML
  const sitemapXML = generateSitemapXML(allPages);
  
  // Salvar arquivo
  fs.writeFileSync(OUTPUT_FILE, sitemapXML, 'utf8');
  console.log(`✅ Sitemap gerado com sucesso em: ${OUTPUT_FILE}`);
  
  // Salvar lista de rotas em JSON para referência
  const routesFile = path.join(__dirname, 'blog-routes.json');
  fs.writeFileSync(routesFile, JSON.stringify(blogPosts, null, 2), 'utf8');
  console.log(`📋 Lista de rotas salva em: ${routesFile}`);
}

// Executar
try {
  generateSitemap();
} catch (error) {
  console.error('❌ Erro ao gerar sitemap:', error);
  process.exit(1);
}
