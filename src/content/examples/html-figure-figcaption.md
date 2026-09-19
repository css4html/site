---
title: "Figure e figcaption"
description: "Imagem com legenda semântica agrupada."
tags: ["figure","img","midia"]
difficulty: "iniciante"
track: "html"
order: 103
html: |
    <figure>
      <img
        src="https://placehold.co/480x240/1e293b/94a3b8?text=Diagrama"
        width="480"
        height="240"
        alt="Diagrama simplificado do fluxo HTML → CSS → JS"
      />
      <figcaption>Figura 1 — Ordem sugerida: estrutura, estilo, comportamento.</figcaption>
    </figure>
css: |
    figure {
      margin: 0;
      max-width: 480px;
      font-family: system-ui, sans-serif;
    }
    img { display: block; width: 100%; height: auto; border-radius: 8px; }
    figcaption {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: #555;
    }
---

Troque o alt e a legenda — eles devem se complementar, não repetir.
