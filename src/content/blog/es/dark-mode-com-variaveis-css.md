---
title: "Dark mode solo con variables CSS"
description: "Temas claros y oscuros sin depender de un framework de UI."
pubDate: 2026-09-05
tags: ["dark-mode","variaveis","temas"]
relatedExamples: ["dark-mode-vars"]
relatedSnippets: ["dark-mode-vars"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


Custom properties tornam o tema um mapa de tokens:

```css
:root { --bg: #fff; --text: #111; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #111; --text: #eee; }
}
```

Depois, componentes só consomem `var(--bg)` e `var(--text)`. Para um toggle manual, você troca uma classe no `<html>` e redefine as mesmas variáveis.

Veja o exemplo ao vivo: [Dark mode com variáveis](/exemplos/dark-mode-vars/) e o snippet correspondente em [Snippets](/snippets/dark-mode-vars/).
