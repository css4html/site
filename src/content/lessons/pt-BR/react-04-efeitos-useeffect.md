---
title: "Efeitos com useEffect"
description: "Sincronizar com o mundo externo após o render."
order: 4
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-efeito-document-title"]
relatedSnippets: ["react-useeffect-mount"]
---

`useEffect` roda **depois** do paint. Use para título do documento, subscriptions e timers — não para calcular UI.

<aside class="tip tip-react"><strong>DICA REACT</strong> — Declare dependências corretas. Array vazio (`[]`) = só na montagem; omitir o array = a cada render (quase nunca o que você quer).</aside>

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
