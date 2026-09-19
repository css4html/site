---
title: "Contador interativo"
description: "Estado simples, botões e atualização do DOM."
tags: ["dom","eventos","estado"]
difficulty: "iniciante"
track: "js"
order: 201
html: |
    <div class="card">
      <p>Valor: <strong id="valor">0</strong></p>
      <button type="button" data-acao="dec">−</button>
      <button type="button" data-acao="inc">+</button>
      <button type="button" data-acao="reset">Reset</button>
    </div>
css: |
    .card { font-family: system-ui, sans-serif; }
    button {
      margin-right: 0.35rem; padding: 0.45rem 0.8rem;
      border-radius: 8px; border: 1px solid #cbd5e1; cursor: pointer;
    }
    #valor { font-size: 1.5rem; }
js: |
    let contador = 0;
    const valor = document.querySelector('#valor');
    
    function render() {
      valor.textContent = String(contador);
    }
    
    document.querySelector('.card').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-acao]');
      if (!btn) return;
      const acao = btn.getAttribute('data-acao');
      if (acao === 'inc') contador += 1;
      if (acao === 'dec') contador -= 1;
      if (acao === 'reset') contador = 0;
      render();
    });
---

Padrão clássico: estado → render → eventos.
