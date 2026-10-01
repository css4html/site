---
title: "useEffect no document.title"
description: "Sincronizar o título da aba com o estado."
tags: ["useeffect","efeitos"]
difficulty: "intermediario"
track: "react"
order: 304
html: |
    
css: |
    label { display: block; font-family: system-ui, sans-serif; margin-bottom: .35rem; }
    input {
      font: inherit; padding: .5rem .65rem; border-radius: 8px;
      border: 1px solid #cbd5e1; min-width: 220px;
    }
    p { color: #64748b; font-family: system-ui, sans-serif; }
js: |
    import { useEffect, useState } from 'react';

    function App() {
      const [titulo, setTitulo] = useState('React MVP');
      useEffect(() => {
        const prev = document.title;
        document.title = titulo;
        return () => { document.title = prev; };
      }, [titulo]);
      return (
        <div>
          <label htmlFor="t">Título da aba</label>
          <input id="t" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          <p>Olhe a aba do preview (quando o browser permitir).</p>
        </div>
      );
    }
---

Retorne uma função de limpeza para desfazer o efeito ao desmontar ou antes de reexecutar.
