---
title: "querySelectorAll + loop"
description: "Iterar NodeList com forEach."
tags: ["dom","seletores"]
track: "js"
language: "js"
code: |
    document.querySelectorAll('[data-card]').forEach((card) => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-selected');
      });
    });
---

Copie o snippet e adapte. Pratique nos [exemplos de JavaScript](/exemplos/).
