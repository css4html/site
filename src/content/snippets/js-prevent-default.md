---
title: "preventDefault"
description: "Cancelar submit ou navegação padrão."
tags: ["eventos","form"]
track: "js"
language: "js"
code: |
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // validar / enviar via fetch…
    });
---

Copie o snippet e adapte. Pratique nos [exemplos de JavaScript](/exemplos/).
