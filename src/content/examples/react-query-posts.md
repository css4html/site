---
title: "React Query: lista remota"
description: "useQuery + cache com JSONPlaceholder."
tags: ["react-query","fetch","cache"]
difficulty: "intermediario"
track: "react"
order: 306
html: |
    
css: |
    .wrap { font-family: system-ui, sans-serif; }
    li { margin-bottom: .4rem; }
    .status { color: #64748b; }
    .err { color: #b91c1c; }
js: |
    import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

    const client = new QueryClient();

    function Posts() {
      const { data, isPending, isError, error, refetch, isFetching } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.json();
        },
      });

      if (isPending) return <p className="status">Carregando…</p>;
      if (isError) return <p className="err">{String(error)}</p>;

      return (
        <div className="wrap">
          <button type="button" onClick={() => refetch()} disabled={isFetching}>
            {isFetching ? 'Atualizando…' : 'Refetch'}
          </button>
          <ul>
            {data.map((p) => (
              <li key={p.id}><strong>#{p.id}</strong> {p.title}</li>
            ))}
          </ul>
        </div>
      );
    }

    function App() {
      return (
        <QueryClientProvider client={client}>
          <Posts />
        </QueryClientProvider>
      );
    }
---

A `queryKey` identifica o cache. `refetch` força uma nova busca.
