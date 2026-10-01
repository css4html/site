---
title: "Componentes e JSX"
description: "Funções que retornam UI, JSX, árvore Vite e o HTML que monta o React."
order: 1
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-hello-jsx"]
relatedSnippets: ["react-functional-component", "react-conditional-render"]
---

React organiza a interface em **componentes** — funções que recebem dados e devolvem elementos descritivos.

<aside class="tip tip-react"><strong>DICA REACT</strong> — JSX parece HTML, mas é JavaScript. Use `className` em vez de `class`, e feche tags como `<img />`.</aside>

## Um componente mínimo

```tsx
function App() {
  return <h1>Olá, React</h1>;
}
```

No playground, nomeie o componente de topo como `App`: ele é montado automaticamente em `#root`.

## Árvore de um projeto Vite + React

Em apps reais (Vite), o JSX vive em arquivos e um HTML de entrada aponta para o boot. Árvore típica:

```text
meu-app/
├── index.html          ← documento: tem #root e carrega /src/main.tsx
├── public/             ← estáticos (favicon, robots…) servidos na raiz
└── src/
    ├── main.tsx        ← createRoot(#root).render(<App />)
    ├── App.tsx         ← componente de topo
    ├── index.css
    ├── components/     ← UI reutilizável
    ├── hooks/          ← hooks customizados
    ├── pages/          ← telas / rotas
    └── services/       ← chamadas de API, clientes
```

<aside class="tip tip-react"><strong>DICA</strong> — No dia a dia: `public/` · `src/main.tsx` · `App.tsx`. Pastas como `components/`, `hooks/`, `pages/` e `services/` crescem com o app.</aside>

### `index.html` → `main.tsx` → `#root`

O HTML na raiz do projeto Vite costuma ser assim:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

E o boot em `src/main.tsx`:

```tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
```

Fluxo: o browser abre `index.html` → encontra `#root` → o script de módulo carrega `main.tsx` → `createRoot` monta `<App />` dentro de `#root`. O Vite transpila TSX no desenvolvimento; no build, gera assets estáticos.

## O HTML do playground (sem Vite)

Aqui no site não há bundler local: o playground injeta um documento com **import map** ([esm.sh](https://esm.sh)) + **Sucrase**, espelhando a mesma ideia (`#root` + montar `App`):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>/* CSS da aba CSS */</style>
  <script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@19",
      "react/jsx-runtime": "https://esm.sh/react@19/jsx-runtime",
      "react-dom/client": "https://esm.sh/react-dom@19/client"
    }
  }
  </script>
</head>
<body>
  <div id="root"></div>
  <!-- aba HTML: markup opcional fora do React -->

  <script type="module">
    import { createRoot } from 'react-dom/client';
    import { transform } from 'https://esm.sh/sucrase@3.35.0';

    // 1) Sucrase transforma o TSX da aba em JavaScript
    // 2) O módulo define function App() { ... }
    // 3) createRoot monta App em #root
    const mount = document.getElementById('root');
    createRoot(mount).render(/* <App /> */);
  </script>
</body>
</html>
```

### O que cada parte faz (playground)

1. **`<div id="root">`** — único nó em que o React controla a UI (igual ao Vite).
2. **Import map** — resolve `react` / `react-dom/client` via esm.sh.
3. **Sucrase** — compila TypeScript + JSX no browser (papel parecido ao do Vite no dev).
4. **`App` → `createRoot(...).render(...)`** — mesma ponte `main.tsx` ↔ DOM.

Na aba **HTML** do playground você só edita markup *extra* (depois do `#root`). O esqueleto é injetado automaticamente — abra o painel “Esqueleto HTML” no playground React para vê-lo de novo.

## Expressões

Entre chaves você coloca expressões JS: `{nome}`, `{1 + 1}`, `{condicao && <p>Oi</p>}`.
