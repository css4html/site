---
title: "dataset"
description: "Ler data-* como camelCase."
tags: ["dom","data"]
track: "js"
language: "js"
code: |
    // <button data-user-id="42" data-role="admin">
    const btn = document.querySelector('button');
    console.log(btn.dataset.userId); // "42"
    console.log(btn.dataset.role);   // "admin"
---

Copie o snippet e adapte. Pratique nos [exemplos de JavaScript](/exemplos/).
