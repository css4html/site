---
title: "Card com props"
description: "Componente reutilizável recebendo title e children."
tags: ["props","componentes"]
difficulty: "iniciante"
track: "react"
order: 302
html: |
    
css: |
    .card {
      font-family: system-ui, sans-serif;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 1rem 1.25rem;
      max-width: 320px;
      box-shadow: 0 4px 14px rgba(15,23,42,.08);
    }
    .card h2 { margin: 0 0 .5rem; font-size: 1.1rem; }
    .card p { margin: 0; color: #475569; }
js: |
    function Card({ title, children }) {
      return (
        <article className="card">
          <h2>{title}</h2>
          {children}
        </article>
      );
    }

    function App() {
      return (
        <Card title="Props em ação">
          <p>Children fluem do pai para o filho.</p>
        </Card>
      );
    }
---

Props são somente leitura. Compose UI passando `children`.
