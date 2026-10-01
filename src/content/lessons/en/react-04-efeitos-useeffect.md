---
title: "Effects with useEffect"
description: "Sync with the outside world after render."
order: 4
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-efeito-document-title"]
relatedSnippets: ["react-useeffect-mount"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

`useEffect` roda **depois** do paint. Use para título do documento, subscriptions e timers — não para calcular UI.

<aside class="tip tip-react"><strong>REACT TIP</strong> — Declare dependências corretas. Array vazio (`[]`) = só na montagem; omitir o array = a cada render (quase nunca o que você quer).</aside>

```tsx
import { useEffect, useState } from 'react';

function App() {
  const [titulo, setTitulo] = useState('React');
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
  return <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />;
}
```
