---
title: "Lista com fetch mock"
description: "Simula fetch com Promise e renderiza uma lista."
tags: ["fetch","async","lista"]
difficulty: "intermediario"
track: "js"
order: 206
html: |
    <button type="button" id="carregar">Carregar cursos</button>
    <p id="status" aria-live="polite">Pronto.</p>
    <ul id="lista"></ul>
css: |
    body { font-family: system-ui, sans-serif; }
    button { padding: 0.5rem 0.9rem; border-radius: 8px; border: 0; background: #2563eb; color: #fff; cursor: pointer; }
    #status { color: #64748b; }
    li { margin: 0.35rem 0; }
js: |
    const cursosMock = [
      { id: 1, nome: 'HTML do zero' },
      { id: 2, nome: 'CSS do zero ao layout' },
      { id: 3, nome: 'JavaScript do zero ao DOM' },
    ];
    
    function fetchCursos() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(cursosMock), 600);
      });
    }
    
    const status = document.querySelector('#status');
    const lista = document.querySelector('#lista');
    
    document.querySelector('#carregar').addEventListener('click', async () => {
      status.textContent = 'Carregando…';
      lista.innerHTML = '';
      try {
        const dados = await fetchCursos();
        dados.forEach((c) => {
          const li = document.createElement('li');
          li.textContent = c.nome;
          lista.appendChild(li);
        });
        status.textContent = `${dados.length} cursos carregados.`;
      } catch (err) {
        status.textContent = 'Falha ao carregar.';
      }
    });
---

Troque o mock por fetch("/api/...") quando tiver backend.
