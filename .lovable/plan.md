

# Plano: Criar Capas Minimalistas Dark para os Templates

## Resumo

Gerar 7 imagens de capa no estilo minimalista dark usando IA, com fundo escuro, tipografia grande e icone central representando cada template. As capas seguem a identidade visual do site (dark theme + gradientes roxos).

---

## Capas a Criar

Para cada template, sera gerada uma imagem via IA com o seguinte padrao:

- **Fundo**: Escuro (preto/cinza muito escuro) com sutil gradiente roxo
- **Icone central**: Representativo do tema do template
- **Titulo**: Tipografia bold em branco
- **Aspecto**: 16:9 para encaixar nos cards Netflix

| # | Template | Icone/Tema Visual |
|---|---|---|
| 1 | Hub Empresarial Free | Icone de empresa/predio |
| 2 | Controle Financeiro | Icone de cifrao/graficos |
| 3 | Hub Vida Pessoal | Icone de pessoa/coracao |
| 4 | Central Social Media | Icones de redes sociais |
| 5 | Facilitador de Treino | Icone de halteres/fitness |
| 6 | Easy Travel | Icone de aviao/mala |
| 7 | Biblioteca Digital | Icone de livro/estante |

---

## Implementacao

### Passo 1 -- Gerar as 7 imagens
- Usar a IA de geracao de imagens (Gemini) para criar cada capa
- Prompt padrao: "Dark minimalist cover, black background with subtle purple gradient, large white bold title '[NOME]', centered [ICONE] icon, premium modern style, 16:9 aspect ratio, clean and professional"

### Passo 2 -- Salvar as imagens
- Substituir as imagens atuais em `public/lovable-uploads/` pelos novos arquivos gerados
- Manter os mesmos nomes de arquivo para nao precisar alterar codigo

### Arquivos substituidos:
- `public/lovable-uploads/hub-empresarial-free.jpg`
- `public/lovable-uploads/controle-financeiro.jpg`
- `public/lovable-uploads/hub-vida-pessoal.jpg`
- `public/lovable-uploads/central-social-media.jpg`
- `public/lovable-uploads/facilitador-treino.jpg`
- `public/lovable-uploads/easy-travel.jpg`
- `public/lovable-uploads/biblioteca-digital.jpg`

### Nenhuma alteracao de codigo necessaria
Os cards ja referenciam essas imagens pelo caminho atual. Basta substituir os arquivos.

