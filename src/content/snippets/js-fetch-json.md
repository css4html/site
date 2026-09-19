---
title: "fetch JSON"
description: "async/await com checagem de ok."
tags: ["fetch","async"]
track: "js"
language: "js"
code: |
    async function getJson(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
---

Copie o snippet e adapte. Pratique nos [exemplos de JavaScript](/exemplos/).
