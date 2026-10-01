---
title: "React Query: mutation local"
description: "useMutation + invalidateQueries em lista mock."
tags: ["react-query","mutation","cache"]
difficulty: "avancado"
track: "react"
order: 307
html: |
    
css: |
    .wrap { font-family: system-ui, sans-serif; max-width: 380px; }
    form { display: flex; gap: .5rem; margin-bottom: .75rem; }
    input {
      flex: 1; padding: .45rem .6rem; border-radius: 8px; border: 1px solid #cbd5e1;
    }
    button {
      padding: .45rem .75rem; border-radius: 8px; border: 1px solid #38bdf8;
      background: #61dafb; cursor: pointer;
    }
    li { padding: .3rem 0; border-bottom: 1px solid #e2e8f0; }
js: |
    import { useState } from 'react';
    import {
      QueryClient,
      QueryClientProvider,
      useMutation,
      useQuery,
      useQueryClient,
    } from '@tanstack/react-query';

    const client = new QueryClient();
    let seq = 3;
    let db = [
      { id: 1, title: 'Estudar hooks' },
      { id: 2, title: 'Praticar Query' },
    ];

    async function listTodos() {
      await new Promise((r) => setTimeout(r, 200));
      return [...db];
    }

    async function addTodo(title) {
      await new Promise((r) => setTimeout(r, 250));
      const item = { id: ++seq, title };
      db = [...db, item];
      return item;
    }

    function TodoApp() {
      const qc = useQueryClient();
      const [text, setText] = useState('');
      const { data = [], isPending } = useQuery({ queryKey: ['todos'], queryFn: listTodos });
      const mutation = useMutation({
        mutationFn: addTodo,
        onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
      });

      return (
        <div className="wrap">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!text.trim()) return;
              mutation.mutate(text.trim());
              setText('');
            }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Nova tarefa"
              aria-label="Nova tarefa"
            />
            <button type="submit" disabled={mutation.isPending}>
              Adicionar
            </button>
          </form>
          {isPending ? <p>Carregando…</p> : (
            <ul>
              {data.map((t) => (
                <li key={t.id}>{t.title}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    function App() {
      return (
        <QueryClientProvider client={client}>
          <TodoApp />
        </QueryClientProvider>
      );
    }
---

Após mutar, invalide a query para a lista refletir o novo estado.
