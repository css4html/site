---
title: "Validação de formulário"
description: "Checagem extra no submit com mensagem amigável."
tags: ["form","validacao","preventDefault"]
difficulty: "intermediario"
track: "js"
order: 204
html: |
    <form id="form" novalidate>
      <label for="email">E-mail</label>
      <input id="email" name="email" type="email" required />
      <p id="erro" class="erro" role="alert" hidden></p>
      <button type="submit">Continuar</button>
    </form>
    <p id="ok" hidden>Formulário válido — pronto para enviar.</p>
css: |
    form { font-family: system-ui, sans-serif; max-width: 20rem; }
    label { display: block; font-weight: 600; margin-bottom: 0.25rem; }
    input { width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid #cbd5e1; }
    .erro { color: #b91c1c; font-size: 0.9rem; }
    button { margin-top: 0.65rem; padding: 0.5rem 1rem; background: #2563eb; color: #fff; border: 0; border-radius: 8px; cursor: pointer; }
js: |
    const form = document.querySelector('#form');
    const email = document.querySelector('#email');
    const erro = document.querySelector('#erro');
    const ok = document.querySelector('#ok');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      erro.hidden = true;
      ok.hidden = true;
      const valor = email.value.trim();
      if (!valor || !valor.includes('@')) {
        erro.textContent = 'Informe um e-mail válido.';
        erro.hidden = false;
        email.focus();
        return;
      }
      ok.hidden = false;
    });
---

HTML required + JS para mensagens customizadas.
