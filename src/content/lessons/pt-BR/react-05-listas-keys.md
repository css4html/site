---
title: "Listas e keys"
description: "Renderizar arrays com map e keys estáveis."
order: 5
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-lista-filtravel"]
relatedSnippets: ["react-map-keys"]
---

Para listas, use `.map()` e uma **key** estável (id). Keys ajudam o React a reconciliar itens.

<aside class="tip tip-react"><strong>DICA REACT</strong> — Evite `key={index}` se a lista puder reordenar, filtrar ou inserir no meio.</aside>

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
