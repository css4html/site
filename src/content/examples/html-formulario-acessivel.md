---
title: "Formulário acessível"
description: "Labels associados, required e botões com type correto."
tags: ["form","acessibilidade","label"]
difficulty: "iniciante"
track: "html"
order: 102
html: |
    <form>
      <div class="campo">
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" autocomplete="name" required />
      </div>
      <div class="campo">
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" autocomplete="email" required />
      </div>
      <fieldset>
        <legend>Assunto</legend>
        <label><input type="radio" name="assunto" value="duvida" checked /> Dúvida</label>
        <label><input type="radio" name="assunto" value="feedback" /> Feedback</label>
      </fieldset>
      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
css: |
    form { max-width: 22rem; font-family: system-ui, sans-serif; }
    .campo { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem; }
    label { font-weight: 600; font-size: 0.9rem; }
    input[type="text"], input[type="email"] {
      padding: 0.5rem 0.65rem; border: 1px solid #ccc; border-radius: 8px;
    }
    fieldset { border: 1px solid #ddd; border-radius: 8px; margin-bottom: 0.75rem; }
    button { margin-right: 0.5rem; padding: 0.5rem 0.9rem; border-radius: 8px; border: 0; cursor: pointer; }
    button[type="submit"] { background: #2563eb; color: #fff; }
---

Tente enviar vazio: a validação nativa do HTML aparece sem JavaScript.
