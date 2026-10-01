---
title: "Contador com useState"
description: "Estado local, eventos e re-render."
tags: ["usestate","estado","eventos"]
difficulty: "iniciante"
track: "react"
order: 303
html: |
    
css: |
    .wrap { font-family: system-ui, sans-serif; }
    button {
      margin-right: .35rem; padding: .45rem .8rem;
      border-radius: 8px; border: 1px solid #cbd5e1; cursor: pointer;
      background: #fff;
    }
    button.primary { background: #61dafb; border-color: #38bdf8; }
    strong { font-size: 1.5rem; }
js: |
    import { useState } from 'react';

    function App() {
      const [count, setCount] = useState(0);
      return (
        <div className="wrap">
          <p>Valor: <strong>{count}</strong></p>
          <button type="button" onClick={() => setCount((c) => c - 1)}>−</button>
          <button type="button" className="primary" onClick={() => setCount((c) => c + 1)}>+</button>
          <button type="button" onClick={() => setCount(0)}>Reset</button>
        </div>
      );
    }
---

Compare com o contador em JavaScript puro da trilha JS — aqui o React atualiza a UI por você.
