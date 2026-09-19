---
title: "classList em menu"
description: "Abrir/fechar menu mobile."
tags: ["ui","classList"]
track: "js"
language: "js"
code: |
    const btn = document.querySelector('[data-menu]');
    const nav = document.querySelector('#nav');
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
---

Copie o snippet e adapte. Pratique nos [exemplos de JavaScript](/exemplos/).
