---
title: "To-do básico"
description: "Lista de tarefas com adicionar e remover no DOM."
tags: ["projeto","dom","estado"]
difficulty: "intermediario"
track: "js"
order: 207
html: |
    <form id="form">
      <label for="tarefa">Nova tarefa</label>
      <input id="tarefa" type="text" required maxlength="80" />
      <button type="submit">Adicionar</button>
    </form>
    <ul id="lista"></ul>
css: |
    body { font-family: system-ui, sans-serif; max-width: 24rem; }
    label { display: block; font-weight: 600; margin-bottom: 0.25rem; }
    input { width: 70%; padding: 0.45rem; border-radius: 8px; border: 1px solid #cbd5e1; }
    button { padding: 0.45rem 0.75rem; border-radius: 8px; border: 0; background: #2563eb; color: #fff; cursor: pointer; }
    li { display: flex; justify-content: space-between; gap: 0.5rem; margin: 0.4rem 0; }
    li button { background: #64748b; }
js: |
    const form = document.querySelector('#form');
    const input = document.querySelector('#tarefa');
    const lista = document.querySelector('#lista');
    let itens = [];
    
    function render() {
      lista.innerHTML = '';
      itens.forEach((texto, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = texto;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Remover';
        btn.addEventListener('click', () => {
          itens = itens.filter((_, i) => i !== index);
          render();
        });
        li.append(span, btn);
        lista.appendChild(li);
      });
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const texto = input.value.trim();
      if (!texto) return;
      itens = [...itens, texto];
      input.value = '';
      render();
      input.focus();
    });
---

Estado em array + render completo a cada mudança.
