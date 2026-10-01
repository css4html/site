---
title: "Zustand: estado global"
description: "Store mínimo sem boilerplate para estado compartilhado."
order: 8
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-zustand-theme"]
relatedSnippets: ["react-zustand-store"]
---

**Zustand** cria um store com um hook. Qualquer componente pode ler/escrever sem Context excessivo.

<aside class="tip tip-react"><strong>DICA REACT</strong> — Prefira selectors (`useStore(s => s.theme)`) para evitar re-renders desnecessários.</aside>

```tsx
import { create } from 'zustand';

const useTheme = create((set) => ({
  theme: 'dark',
  toggle: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
}));

function App() {
  const theme = useTheme((s) => s.theme);
  const toggle = useTheme((s) => s.toggle);
  return <button type="button" onClick={toggle}>Tema: {theme}</button>;
}
```
