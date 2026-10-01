---
title: "Componentes e JSX"
description: "Funções que retornam UI e a sintaxe JSX."
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
function Hello() {
  return <h1>Olá, React</h1>;
}
```

O playground auto-monta um componente chamado `App` em `#root`.

## Expressões

Entre chaves você coloca expressões JS: `{nome}`, `{1 + 1}`, `{condicao && <p>Oi</p>}`.
