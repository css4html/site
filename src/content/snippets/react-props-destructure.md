---
title: "Desestruturar props"
description: "Assinatura limpa com destructuring."
tags: ["props"]
track: "react"
language: "tsx"
code: |
    function Card({ title, children }: { title: string; children?: React.ReactNode }) {
      return (
        <article>
          <h2>{title}</h2>
          {children}
        </article>
      );
    }
---

Evita `props.title` repetido.
