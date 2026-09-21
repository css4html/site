---
title: "Dark mode só com variáveis CSS"
description: "Temas claros e escuros sem depender de um framework de UI."
pubDate: 2026-09-05
tags: ["dark-mode","variaveis","temas"]
relatedExamples: ["dark-mode-vars"]
relatedSnippets: ["dark-mode-vars"]
---

Custom properties tornam o tema um mapa de tokens:

```css
:root { --bg: #fff; --text: #111; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #111; --text: #eee; }
}
```

Depois, componentes só consomem `var(--bg)` e `var(--text)`. Para um toggle manual, você troca uma classe no `<html>` e redefine as mesmas variáveis.

Veja o exemplo ao vivo: [Dark mode com variáveis](/exemplos/dark-mode-vars/) e o snippet correspondente em [Snippets](/snippets/dark-mode-vars/).
