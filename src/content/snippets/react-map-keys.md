---
title: "map com key"
description: "Lista com identificador estável."
tags: ["listas","keys"]
track: "react"
language: "tsx"
code: |
    {items.map((item) => (
      <li key={item.id}>{item.label}</li>
    ))}
---

Prefira `id` a `index` quando a ordem pode mudar.
