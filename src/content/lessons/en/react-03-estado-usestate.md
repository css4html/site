---
title: "State with useState"
description: "Local component memory that triggers re-renders."
order: 3
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-contador-usestate"]
relatedSnippets: ["react-usestate-toggle"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

`useState` guarda um valor entre renders e agenda uma atualização da UI quando muda.

<aside class="tip tip-react"><strong>REACT TIP</strong> — Nunca mute o estado in-place. Sempre chame o setter (`setCount(c => c + 1)`).</aside>

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

**HTML shell note:** each click updates state → React re-renders `App` **inside** the playground `#root`. The outer document (import map, Sucrase, `createRoot`) stays the same.
