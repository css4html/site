---
title: "Lista filtrável com keys"
description: "map + filter + keys estáveis."
tags: ["listas","keys","usestate"]
difficulty: "intermediario"
track: "react"
order: 305
html: |
    
css: |
    .wrap { font-family: system-ui, sans-serif; max-width: 360px; }
    input {
      width: 100%; box-sizing: border-box; padding: .5rem .65rem;
      border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: .75rem;
    }
    li { padding: .35rem 0; border-bottom: 1px solid #e2e8f0; }
    .muted { color: #94a3b8; }
js: |
    import { useMemo, useState } from 'react';

    const ALL = [
      { id: '1', name: 'React' },
      { id: '2', name: 'Query' },
      { id: '3', name: 'Zustand' },
      { id: '4', name: 'JSX' },
      { id: '5', name: 'Hooks' },
    ];

    function App() {
      const [q, setQ] = useState('');
      const items = useMemo(
        () => ALL.filter((i) => i.name.toLowerCase().includes(q.toLowerCase())),
        [q],
      );
      return (
        <div className="wrap">
          <input
            placeholder="Filtrar…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Filtrar lista"
          />
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {items.length === 0 && <p className="muted">Nada encontrado.</p>}
        </div>
      );
    }
---

Keys estáveis (`id`) sobrevivem a filtros sem “embaralhar” o estado dos itens.
