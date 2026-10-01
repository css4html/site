---
title: "Render condicional"
description: "&& e ternário em JSX."
tags: ["jsx","condicional"]
track: "react"
language: "tsx"
code: |
    {isLoading && <Spinner />}
    {error ? <ErrorMsg error={error} /> : <List items={items} />}
---

Cuidado com `0 && <X />` — `0` é renderizado.
