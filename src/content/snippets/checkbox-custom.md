---
title: "Checkbox customizado"
description: "Visual próprio mantendo o input nativo acessível."
tags: ["formulario","checkbox","acessibilidade"]
language: html+css
code: |
    <label class="check">
      <input type="checkbox" />
      <span class="box" aria-hidden="true"></span>
      Aceito os termos
    </label>
    
    <style>
    .check {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      cursor: pointer;
      user-select: none;
    }
    .check input {
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
    }
    .box {
      width: 1.15rem;
      height: 1.15rem;
      border: 2px solid #64748b;
      border-radius: 4px;
      display: grid;
      place-items: center;
    }
    .check input:checked + .box {
      background: #2563eb;
      border-color: #2563eb;
    }
    .check input:checked + .box::after {
      content: "";
      width: 0.35rem;
      height: 0.65rem;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      margin-bottom: 0.15rem;
    }
    .check input:focus-visible + .box {
      outline: 2px solid #2563eb;
      outline-offset: 2px;
    }
    </style>
---

Nunca remova o `<input>` — só o esconda visualmente. Experimente no [formulário básico](/exemplos/formulario-basico/).
