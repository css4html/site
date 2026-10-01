---
title: "Compor com children"
description: "Slot de conteúdo no componente."
tags: ["props","composicao"]
track: "react"
language: "tsx"
code: |
    function Shell({ children }: { children: React.ReactNode }) {
      return <div className="shell">{children}</div>;
    }

    <Shell><p>Conteúdo</p></Shell>
---

Composition > configuração excessiva via props.
