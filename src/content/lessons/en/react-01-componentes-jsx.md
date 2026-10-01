---
title: "Components and JSX"
description: "Functions that return UI, JSX, a Vite tree, and the HTML that mounts React."
order: 1
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-hello-jsx"]
relatedSnippets: ["react-functional-component", "react-conditional-render"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; early paragraphs stay in Portuguese. The Vite tree and HTML-shell sections below are in English.

React organiza a interface em **componentes** — funções que recebem dados e devolvem elementos descritivos.

<aside class="tip tip-react"><strong>REACT TIP</strong> — JSX parece HTML, mas é JavaScript. Use `className` em vez de `class`, e feche tags como `<img />`.</aside>

## Um componente mínimo

```tsx
function App() {
  return <h1>Olá, React</h1>;
}
```

No playground, nomeie o componente de topo como `App`: ele é montado automaticamente em `#root`.

## Vite + React project tree

In real apps (Vite), JSX lives in files and an entry HTML boots the app. Typical tree:

```text
my-app/
├── index.html          ← document: has #root and loads /src/main.tsx
├── public/             ← static assets (favicon, robots…) at site root
└── src/
    ├── main.tsx        ← createRoot(#root).render(<App />)
    ├── App.tsx         ← top-level component
    ├── index.css
    ├── components/     ← reusable UI
    ├── hooks/          ← custom hooks
    ├── pages/          ← screens / routes
    └── services/       ← API clients
```

<aside class="tip tip-react"><strong>TIP</strong> — Day-to-day lean view: `public/` · `src/main.tsx` · `App.tsx`. Folders like `components/`, `hooks/`, `pages/`, and `services/` grow with the app.</aside>

### `index.html` → `main.tsx` → `#root`

Vite’s root HTML usually looks like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Boot in `src/main.tsx`:

```tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
```

Flow: browser opens `index.html` → finds `#root` → module script loads `main.tsx` → `createRoot` mounts `<App />` into `#root`.

## Playground HTML (no local Vite)

This site has no local bundler: the playground injects a document with an **import map** ([esm.sh](https://esm.sh)) + **Sucrase**, same idea (`#root` + mount `App`):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>/* CSS from the CSS tab */</style>
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
  <!-- HTML tab: optional markup outside React -->

  <script type="module">
    import { createRoot } from 'react-dom/client';
    import { transform } from 'https://esm.sh/sucrase@3.35.0';

    // 1) Sucrase turns the TSX tab into JavaScript
    // 2) The module defines function App() { ... }
    // 3) createRoot mounts App into #root
    const mount = document.getElementById('root');
    createRoot(mount).render(/* <App /> */);
  </script>
</body>
</html>
```

### What each part does (playground)

1. **`<div id="root">`** — the single node React owns (same as Vite).
2. **Import map** — resolves `react` / `react-dom/client` via esm.sh.
3. **Sucrase** — compiles TypeScript + JSX in the browser (Vite’s role in local dev).
4. **`App` → `createRoot(...).render(...)`** — same bridge as `main.tsx`.

The playground **HTML** tab only edits *extra* markup (after `#root`). Open the “HTML shell” panel in the React playground to see the injected document again.

## Expressões

Entre chaves você coloca expressões JS: `{nome}`, `{1 + 1}`, `{condicao && <p>Oi</p>}`.
