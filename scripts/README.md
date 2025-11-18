# Scripts de Automação

## generate-sitemap.js

Script que gera automaticamente o `sitemap.xml` baseado nos arquivos de blog existentes.

### Como usar:

1. **Executar manualmente:**
```bash
node scripts/generate-sitemap.js
```

2. **Integrar no processo de build:**

Adicione ao seu `package.json`:
```json
{
  "scripts": {
    "generate:sitemap": "node scripts/generate-sitemap.js",
    "prebuild": "npm run generate:sitemap"
  }
}
```

Isso fará com que o sitemap seja gerado automaticamente antes de cada build.

### O que o script faz:

- ✅ Lê automaticamente todos os arquivos `.tsx` em `src/pages/blog/`
- ✅ Converte nomes de arquivos para slugs (ex: `NotionVsPlanilhas.tsx` → `notion-vs-planilhas`)
- ✅ Obtém a data de última modificação de cada arquivo
- ✅ Inclui páginas estáticas principais (home, sistemas-notion, etc.)
- ✅ Gera `public/sitemap.xml` no formato correto para Google
- ✅ Cria `scripts/blog-routes.json` com lista de rotas para referência

### Adicionar novo artigo:

Agora é simples:
1. Crie o arquivo do artigo em `src/pages/blog/NovoArtigo.tsx`
2. Adicione a rota no `App.tsx`
3. Execute `node scripts/generate-sitemap.js`
4. Faça deploy - o sitemap será atualizado automaticamente!

### Configuração:

Edite as constantes no início do arquivo se precisar:
- `DOMAIN`: URL do seu site
- `BLOG_DIR`: Diretório dos arquivos de blog
- `OUTPUT_FILE`: Local do sitemap.xml
- `staticPages`: Lista de páginas estáticas
