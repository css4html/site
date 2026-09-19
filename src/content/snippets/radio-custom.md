---
title: "Radio customizado"
description: "Grupo de opções com aparência consistente e foco visível."
tags: ["formulario","radio","acessibilidade"]
language: html+css
code: |
    <fieldset class="radios">
      <legend>Plano</legend>
      <label><input type="radio" name="plano" checked /> Free</label>
      <label><input type="radio" name="plano" /> Pro</label>
    </fieldset>
    
    <style>
    .radios {
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 0.85rem 1rem;
    }
    .radios label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.4rem 0;
      cursor: pointer;
    }
    .radios input {
      appearance: none;
      width: 1.1rem;
      height: 1.1rem;
      border: 2px solid #64748b;
      border-radius: 50%;
      display: grid;
      place-items: center;
      margin: 0;
    }
    .radios input::after {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: #2563eb;
      transform: scale(0);
      transition: transform 0.12s ease;
    }
    .radios input:checked {
      border-color: #2563eb;
    }
    .radios input:checked::after {
      transform: scale(1);
    }
    .radios input:focus-visible {
      outline: 2px solid #2563eb;
      outline-offset: 2px;
    }
    </style>
---

Use `fieldset` + `legend` para agrupar. Par com [checkbox custom](/snippets/checkbox-custom/).
