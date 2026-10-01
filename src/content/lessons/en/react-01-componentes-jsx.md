---
title: "Components and JSX"
description: "Functions that return UI and JSX syntax."
order: 1
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-hello-jsx"]
relatedSnippets: ["react-functional-component", "react-conditional-render"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

React organiza a interface em **componentes** — funções que recebem dados e devolvem elementos descritivos.

<aside class="tip tip-react"><strong>REACT TIP</strong> — JSX parece HTML, mas é JavaScript. Use `className` em vez de `class`, e feche tags como `<img />`.</aside>

## Um componente mínimo

```tsx
function Hello() {
  return <h1>Olá, React</h1>;
}
```

O playground auto-monta um componente chamado `App` em `#root`.

## Expressões

Entre chaves você coloca expressões JS: `{nome}`, `{1 + 1}`, `{condicao && <p>Oi</p>}`.
