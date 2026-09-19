---
title: "Seletor :has() no pai"
description: "Estilize o container com base no que tem dentro — CSS moderno."
tags: [":has","seletores","moderno"]
difficulty: intermediario
order: 16
html: |
    <form class="card">
      <label>
        <span>E-mail</span>
        <input type="email" placeholder="voce@email.com" required />
      </label>
      <label class="check">
        <input type="checkbox" />
        Aceito os termos
      </label>
      <button type="submit">Enviar</button>
    </form>
    <p class="dica">Marque o checkbox e veja o card mudar.</p>
css: |
    .card {
      padding: 1.25rem;
      border-radius: 12px;
      border: 2px solid #cbd5e1;
      background: #f8fafc;
      display: grid;
      gap: 0.85rem;
      transition: border-color .2s, background .2s;
    }
    
    .card:has(input[type="checkbox"]:checked) {
      border-color: #16a34a;
      background: #f0fdf4;
    }
    
    .card:has(input:invalid:not(:placeholder-shown)) {
      border-color: #dc2626;
    }
    
    label { display: grid; gap: 0.35rem; font-weight: 600; font-size: 0.9rem; }
    .check { display: flex; align-items: center; gap: 0.5rem; font-weight: 500; }
    input[type="email"] {
      padding: 0.55rem 0.7rem;
      border: 1px solid #94a3b8;
      border-radius: 8px;
    }
    button {
      justify-self: start;
      background: #2563eb;
      color: #fff;
      border: 0;
      padding: 0.55rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }
    .dica { color: #64748b; font-size: 0.9rem; }
---

`:has()` permite que o pai reaja ao estado dos filhos — útil para formulários, cards e menus.
