---
title: "useMutation + invalidate"
description: "Mutar e refrescar o cache."
tags: ["react-query","mutation"]
track: "react"
language: "tsx"
code: |
    const qc = useQueryClient();
    const mutation = useMutation({
      mutationFn: (body: Body) =>
        fetch('/api/items', { method: 'POST', body: JSON.stringify(body) }),
      onSuccess: () => qc.invalidateQueries({ queryKey: ['items'] }),
    });
---

Invalidar mantém a UI alinhada com o servidor.
