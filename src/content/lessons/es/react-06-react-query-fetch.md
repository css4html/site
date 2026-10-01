---
title: "React Query: fetching y caché"
description: "Obtener datos remotos con caché y estados de carga."
order: 6
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-query-posts"]
relatedSnippets: ["react-query-usequery"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

**TanStack Query** (React Query) gerencia fetching, cache e revalidação fora do componente.

<aside class="tip tip-react"><strong>CONSEJO REACT</strong> — Envolva a árvore com `QueryClientProvider`. A `queryKey` identifica o cache.</aside>

```tsx
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const client = new QueryClient();

function Lista() {
  const { data, isPending, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!res.ok) throw new Error('Falha');
      return res.json();
    },
  });
  if (isPending) return <p>Carregando…</p>;
  if (error) return <p>Erro</p>;
  return <ul>{data.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
}

function App() {
  return (
    <QueryClientProvider client={client}>
      <Lista />
    </QueryClientProvider>
  );
}
```
