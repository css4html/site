---
title: "Mutations con React Query"
description: "Crear/actualizar datos e invalidar la caché."
order: 7
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-query-add-todo"]
relatedSnippets: ["react-query-usemutation"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

`useMutation` cobre POST/PUT/DELETE. No sucesso, **invalide** queries relacionadas para refetch.

<aside class="tip tip-react"><strong>CONSEJO REACT</strong> — `queryClient.invalidateQueries({ queryKey: ['todos'] })` sincroniza a lista após mutar.</aside>

```tsx
const mutation = useMutation({
  mutationFn: async (title: string) => {
    /* POST ... */
    return { id: Date.now(), title };
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
});
```
