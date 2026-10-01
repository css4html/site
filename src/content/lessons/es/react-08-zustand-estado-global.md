---
title: "Zustand: estado global"
description: "Store mínimo sin boilerplate para estado compartido."
order: 8
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-zustand-theme"]
relatedSnippets: ["react-zustand-store"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

**Zustand** cria um store com um hook. Qualquer componente pode ler/escrever sem Context excessivo.

<aside class="tip tip-react"><strong>CONSEJO REACT</strong> — Prefira selectors (`useStore(s => s.theme)`) para evitar re-renders desnecessários.</aside>

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
