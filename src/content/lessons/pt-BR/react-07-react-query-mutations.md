---
title: "Mutations com React Query"
description: "Criar/atualizar dados e invalidar o cache."
order: 7
trail: "react-do-basico-ao-estado"
track: "react"
relatedExamples: ["react-query-add-todo"]
relatedSnippets: ["react-query-usemutation"]
---

`useMutation` cobre POST/PUT/DELETE. No sucesso, **invalide** queries relacionadas para refetch.

<aside class="tip tip-react"><strong>DICA REACT</strong> — `queryClient.invalidateQueries({ queryKey: ['todos'] })` sincroniza a lista após mutar.</aside>

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
