---
title: "Colunas e grid estilo masonry"
description: "Texto em múltiplas colunas e um mural com grid denso."
tags: ["columns","grid","layout"]
difficulty: intermediario
order: 19
html: |
    <section class="jornal">
      <h2>Colunas de texto</h2>
      <p>
        CSS columns divide o conteúdo em faixas verticais automaticamente.
        Ideal para revistas, FAQ longos e listagens densas sem media queries extras.
        Experimente redimensionar a área para ver o fluxo refluir entre as colunas.
      </p>
    </section>
    <div class="mural" aria-label="Mural masonry">
      <div class="tijolo alto">A</div>
      <div class="tijolo">B</div>
      <div class="tijolo medio">C</div>
      <div class="tijolo">D</div>
      <div class="tijolo alto">E</div>
      <div class="tijolo medio">F</div>
    </div>
css: |
    .jornal {
      column-count: 2;
      column-gap: 1.25rem;
      margin-bottom: 1.25rem;
      color: #0f172a;
    }
    
    .jornal h2 {
      column-span: all;
      margin: 0 0 0.75rem;
      font-size: 1.15rem;
    }
    
    .jornal p { margin: 0; line-height: 1.6; font-size: 0.95rem; }
    
    .mural {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 48px;
      gap: 0.5rem;
    }
    
    .tijolo {
      border-radius: 10px;
      display: grid;
      place-items: center;
      font-weight: 700;
      color: #fff;
      background: #3b82f6;
      grid-row: span 2;
    }
    
    .tijolo.medio { grid-row: span 3; background: #8b5cf6; }
    .tijolo.alto { grid-row: span 4; background: #059669; }
    
    @media (max-width: 480px) {
      .jornal { column-count: 1; }
      .mural { grid-template-columns: repeat(2, 1fr); }
    }
---

`column-count` cria fluxo jornalístico; no grid, `grid-row: span` simula alturas variadas (masonry-ish).
