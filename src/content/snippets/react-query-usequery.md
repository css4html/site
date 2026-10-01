---
title: "useQuery básico"
description: "queryKey + queryFn."
tags: ["react-query","fetch"]
track: "react"
language: "tsx"
code: |
    const { data, isPending, error } = useQuery({
      queryKey: ['user', userId],
      queryFn: () => fetch(`/api/users/${userId}`).then((r) => {
        if (!r.ok) throw new Error('fail');
        return r.json();
      }),
    });
---

Exige `QueryClientProvider` acima na árvore.
