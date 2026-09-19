---
title: "Carrossel com scroll-snap"
description: "Slides que “encaixam” no scroll horizontal só com CSS."
tags: ["scroll-snap","carrossel","overflow"]
difficulty: intermediario
order: 15
html: |
    <div class="carrossel" tabindex="0" aria-label="Carrossel de cards">
      <article class="slide">Slide 1</article>
      <article class="slide">Slide 2</article>
      <article class="slide">Slide 3</article>
      <article class="slide">Slide 4</article>
    </div>
css: |
    .carrossel {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding: 0.5rem;
      scroll-padding: 0.5rem;
      background: #0f172a;
      border-radius: 12px;
    }
    
    .slide {
      flex: 0 0 78%;
      scroll-snap-align: center;
      min-height: 140px;
      border-radius: 10px;
      display: grid;
      place-items: center;
      font-weight: 700;
      color: #fff;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    }
    
    .slide:nth-child(2) { background: linear-gradient(135deg, #059669, #14b8a6); }
    .slide:nth-child(3) { background: linear-gradient(135deg, #db2777, #f97316); }
    .slide:nth-child(4) { background: linear-gradient(135deg, #4f46e5, #06b6d4); }
---

Deslize horizontalmente. `scroll-snap-type` + `scroll-snap-align` criam o efeito de carrossel sem JavaScript.
