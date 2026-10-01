---
title: "Props"
description: "Passar dados de pai para filho com props."
order: 2
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-props-card"]
relatedSnippets: ["react-props-destructure", "react-children-compose"]
---

**Props** são os argumentos do componente. Fluem de cima para baixo e são somente leitura.

<aside class="tip tip-react"><strong>DICA REACT</strong> — Desestruture props na assinatura: `function Card({ title, children })`.</aside>

```tsx
function Card({ title }: { title: string }) {
  return <article><h2>{title}</h2></article>;
}

function App() {
  return <Card title="Bem-vindo" />;
}
```

Para conteúdo aninhado, use a prop especial `children`.
