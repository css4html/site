---
title: "useState toggle"
description: "Boolean com setter funcional."
tags: ["usestate","hooks"]
track: "react"
language: "tsx"
code: |
    const [open, setOpen] = useState(false);
    <button type="button" onClick={() => setOpen((v) => !v)}>
      {open ? 'Fechar' : 'Abrir'}
    </button>
---

Setter funcional evita stale state em closures.
