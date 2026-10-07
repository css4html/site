---
title: "CE no React"
description: "Usar a tag no JSX após registrar o elemento."
tags: ["react","host"]
track: "wc"
language: "tsx"
code: |
    import '@css4html/image-gallery';

    export function Gallery() {
      return (
        <image-gallery columns="3">
          <img src="/a.jpg" alt="A" />
        </image-gallery>
      );
    }
---

O import registra a tag; o JSX só a instancia.
