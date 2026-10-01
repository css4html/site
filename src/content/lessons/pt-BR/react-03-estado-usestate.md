---
title: "Estado com useState"
description: "Memória local do componente que dispara re-render."
order: 3
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-contador-usestate"]
relatedSnippets: ["react-usestate-toggle"]
---

`useState` guarda um valor entre renders e agenda uma atualização da UI quando muda.

<aside class="tip tip-react"><strong>DICA REACT</strong> — Nunca mute o estado in-place. Sempre chame o setter (`setCount(c => c + 1)`).</aside>

```tsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      Cliques: {count}
    </button>
  );
}
```

Cada clique chama o setter → React re-renderiza `App` **dentro** do `#root` do documento HTML do playground. O esqueleto (import map, Sucrase, `createRoot`) não muda; só a árvore dentro de `#root`.
