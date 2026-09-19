---
title: "Card com filter e backdrop-blur"
description: "Vidro fosco e profundidade com backdrop-filter + filter."
tags: ["filter","backdrop-filter","efeito"]
difficulty: intermediario
order: 18
html: |
    <div class="fundo">
      <div class="glass">
        <h2>Painel fosco</h2>
        <p>backdrop-filter borrão o fundo atrás do card.</p>
        <button type="button">Explorar</button>
      </div>
    </div>
css: |
    .fundo {
      min-height: 240px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      padding: 1.5rem;
      background:
        radial-gradient(circle at 20% 30%, #f472b6, transparent 40%),
        radial-gradient(circle at 80% 20%, #38bdf8, transparent 35%),
        radial-gradient(circle at 50% 80%, #a78bfa, transparent 40%),
        #0f172a;
    }
    
    .glass {
      width: min(100%, 280px);
      padding: 1.25rem;
      border-radius: 16px;
      color: #fff;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.28);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 12px 40px rgba(0,0,0,.35);
    }
    
    .glass h2 { margin: 0 0 0.4rem; font-size: 1.2rem; }
    .glass p { margin: 0 0 1rem; opacity: 0.9; font-size: 0.92rem; }
    
    .glass button {
      border: 0;
      border-radius: 999px;
      padding: 0.5rem 1rem;
      font-weight: 600;
      cursor: pointer;
      background: #fff;
      color: #0f172a;
      filter: drop-shadow(0 4px 10px rgba(0,0,0,.25));
      transition: transform .15s ease;
    }
    
    .glass button:hover { transform: translateY(-1px); }
---

`backdrop-filter` afeta o que está **atrás** do elemento; `filter` afeta o próprio elemento (e seus filhos).
