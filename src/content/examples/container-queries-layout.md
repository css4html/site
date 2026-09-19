---
title: "Layout com container queries"
description: "O card muda de layout conforme a largura do container, não da viewport."
tags: ["container-queries","responsivo","moderno"]
difficulty: avancado
order: 17
html: |
    <div class="shell">
      <article class="produto">
        <div class="thumb" aria-hidden="true"></div>
        <div class="info">
          <h2>Fone wireless</h2>
          <p>Áudio nítido, bateria longa e design leve.</p>
          <strong>R$ 249</strong>
        </div>
      </article>
    </div>
    <p class="dica">Redimensione a janela do preview (ou o painel) para ver o card empilhar/alinhar.</p>
css: |
    .shell {
      container-type: inline-size;
      container-name: vitrine;
      resize: horizontal;
      overflow: auto;
      max-width: 100%;
      min-width: 180px;
      width: 100%;
      border: 1px dashed #94a3b8;
      border-radius: 12px;
      padding: 0.5rem;
    }
    
    .produto {
      display: grid;
      gap: 0.75rem;
      padding: 0.75rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,.08);
    }
    
    .thumb {
      aspect-ratio: 16 / 10;
      border-radius: 8px;
      background: linear-gradient(135deg, #38bdf8, #6366f1);
    }
    
    .info h2 { margin: 0 0 0.35rem; font-size: 1.05rem; }
    .info p { margin: 0 0 0.5rem; color: #64748b; font-size: 0.9rem; }
    .info strong { color: #0f172a; }
    
    @container vitrine (min-width: 360px) {
      .produto {
        grid-template-columns: 120px 1fr;
        align-items: center;
      }
      .thumb { aspect-ratio: 1; }
    }
    
    .dica { color: #64748b; font-size: 0.85rem; margin-top: 0.75rem; }
---

Diferente de media queries, `@container` responde ao tamanho do **pai** — ideal para componentes reutilizáveis.
