---
title: "Props"
description: "Pasar datos del padre al hijo con props."
order: 2
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-props-card"]
relatedSnippets: ["react-props-destructure", "react-children-compose"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

**Props** são os argumentos do componente. Fluem de cima para baixo e são somente leitura.

<aside class="tip tip-react"><strong>CONSEJO REACT</strong> — Desestruture props na assinatura: `function Card({ title, children })`.</aside>

```tsx
function Card({ title }: { title: string }) {
  return <article><h2>{title}</h2></article>;
}

function App() {
  return <Card title="Bem-vindo" />;
}
```

Para conteúdo aninhado, use a prop especial `children`.
