---
title: "Lists and keys"
description: "Render arrays with map and stable keys."
order: 5
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-lista-filtravel"]
relatedSnippets: ["react-map-keys"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

Para listas, use `.map()` e uma **key** estável (id). Keys ajudam o React a reconciliar itens.

<aside class="tip tip-react"><strong>REACT TIP</strong> — Evite `key={index}` se a lista puder reordenar, filtrar ou inserir no meio.</aside>

```tsx
const items = [{ id: 'a', label: 'Alpha' }, { id: 'b', label: 'Beta' }];

function App() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}
```
