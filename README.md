# CSS4HTML — hub de aprendizado de CSS

MVP estático do hub [css4html.com.br](https://css4html.com.br): exemplos vivos (playground), biblioteca de snippets, trilha **CSS do zero ao layout** e blog — tudo em português.

## Stack

- [Astro](https://astro.build) (saída estática) + MDX
- Content Collections (`examples`, `snippets`, `lessons`, `blog`)
- [CodeMirror 6](https://codemirror.net) no playground HTML/CSS

## Requisitos

- Node.js **22.12+** (Astro 7)

## Como rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/content/examples/   # exemplos com html/css no frontmatter
src/content/snippets/   # snippets com tags
src/content/lessons/    # lições da trilha
src/content/blog/       # posts
src/components/Playground.astro
src/content.config.ts
public/                 # favicon, logo, CNAME
CNAME                   # css4html.com.br
```

## Deploy

Build estático em `dist/`. O arquivo `CNAME` (raiz e `public/`) aponta para `css4html.com.br` (GitHub Pages / provedor estático).

## Conteúdo v1

- Exemplos vivos editáveis
- Snippets filtráveis por tag
- Trilha com 7 lições
- Posts curtos no blog

Sem segredos no repositório. Não versionar `.env`.
