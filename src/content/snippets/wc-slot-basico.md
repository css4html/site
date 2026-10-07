---
title: "Slot básico"
description: "Projetar light DOM no shadow com <slot>."
tags: ["slot","composicao"]
track: "wc"
language: "html"
code: |
    <!-- no shadow -->
    <div class="grid"><slot></slot></div>
    <!-- uso -->
    <image-gallery>
      <img src="a.jpg" alt="A" />
    </image-gallery>
---

Filhos do host aparecem onde o `<slot>` está.
