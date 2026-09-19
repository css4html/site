---
title: "Formulário acessível básico"
description: "Labels, foco visível e estados de campo sem JavaScript."
tags: ["formulario","acessibilidade","fundamentos"]
difficulty: iniciante
order: 9
html: |
    <form class="form" action="#">
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" placeholder="Seu nome" required />
    
      <label for="email">E-mail</label>
      <input id="email" name="email" type="email" placeholder="voce@email.com" required />
    
      <button type="submit">Enviar</button>
    </form>
css: |
    .form {
      display: grid;
      gap: 0.5rem;
      max-width: 320px;
    }
    
    label {
      font-weight: 600;
      margin-top: 0.5rem;
    }
    
    input {
      padding: 0.6rem 0.75rem;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font: inherit;
    }
    
    input:focus {
      outline: 2px solid #3b9eff;
      outline-offset: 2px;
      border-color: #3b9eff;
    }
    
    button {
      margin-top: 0.75rem;
      padding: 0.65rem 1rem;
      background: #1d4ed8;
      color: #fff;
      border: 0;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }
    
    button:focus-visible {
      outline: 2px solid #93c5fd;
      outline-offset: 2px;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
