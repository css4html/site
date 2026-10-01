---
title: "Componentes y JSX"
description: "Funciones que devuelven UI, JSX, árbol Vite y el HTML que monta React."
order: 1
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-hello-jsx"]
relatedSnippets: ["react-functional-component", "react-conditional-render"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; los primeros párrafos siguen en portugués. Las secciones del árbol Vite y del esqueleto HTML están en español.

React organiza a interface em **componentes** — funções que recebem dados e devolvem elementos descritivos.

<aside class="tip tip-react"><strong>CONSEJO REACT</strong> — JSX parece HTML, mas é JavaScript. Use `className` em vez de `class`, e feche tags como `<img />`.</aside>

## Um componente mínimo

```tsx
function App() {
  return <h1>Olá, React</h1>;
}
```

No playground, nomeie o componente de topo como `App`: ele é montado automaticamente em `#root`.

## Árbol de un proyecto Vite + React

En apps reales (Vite), el JSX vive en archivos y un HTML de entrada arranca la app. Árbol típico:

```text
mi-app/
├── index.html          ← documento: tiene #root y carga /src/main.tsx
├── public/             ← estáticos (favicon, robots…) en la raíz
└── src/
    ├── main.tsx        ← createRoot(#root).render(<App />)
    ├── App.tsx         ← componente de nivel superior
    ├── index.css
    ├── components/     ← UI reutilizable
    ├── hooks/          ← hooks personalizados
    ├── pages/          ← pantallas / rutas
    └── services/       ← clientes de API
```

<aside class="tip tip-react"><strong>CONSEJO</strong> — Vista corta del día a día: `public/` · `src/main.tsx` · `App.tsx`. Carpetas como `components/`, `hooks/`, `pages/` y `services/` crecen con la app.</aside>

### `index.html` → `main.tsx` → `#root`

El HTML en la raíz de Vite suele ser:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Boot en `src/main.tsx`:

```tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
```

Flujo: el navegador abre `index.html` → encuentra `#root` → el script módulo carga `main.tsx` → `createRoot` monta `<App />` dentro de `#root`.

## El HTML del playground (sin Vite local)

En este sitio no hay bundler local: el playground inyecta un documento con **import map** ([esm.sh](https://esm.sh)) + **Sucrase**, misma idea (`#root` + montar `App`):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>/* CSS de la pestaña CSS */</style>
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
  <!-- pestaña HTML: markup opcional fuera de React -->

  <script type="module">
    import { createRoot } from 'react-dom/client';
    import { transform } from 'https://esm.sh/sucrase@3.35.0';

    // 1) Sucrase transforma el TSX de la pestaña en JavaScript
    // 2) El módulo define function App() { ... }
    // 3) createRoot monta App en #root
    const mount = document.getElementById('root');
    createRoot(mount).render(/* <App /> */);
  </script>
</body>
</html>
```

### Qué hace cada parte (playground)

1. **`<div id="root">`** — el único nodo que React controla (igual que Vite).
2. **Import map** — resuelve `react` / `react-dom/client` vía esm.sh.
3. **Sucrase** — compila TypeScript + JSX en el navegador.
4. **`App` → `createRoot(...).render(...)`** — el mismo puente que `main.tsx`.

La pestaña **HTML** solo edita markup *extra* (después de `#root`). Abre el panel “Esqueleto HTML” en el playground React para ver el documento inyectado.

## Expressões

Entre chaves você coloca expressões JS: `{nome}`, `{1 + 1}`, `{condicao && <p>Oi</p>}`.
