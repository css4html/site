---
title: "Debounce (esqueleto)"
description: "Atrasar execução até o usuário pausar."
tags: ["funcoes","performance"]
track: "js"
language: "js"
code: |
    function debounce(fn, ms = 300) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), ms);
      };
    }
    
    const onSearch = debounce((q) => console.log('buscar', q));
    input.addEventListener('input', (e) => onSearch(e.target.value));
---

Copie o snippet e adapte. Pratique nos [exemplos de JavaScript](/exemplos/).
