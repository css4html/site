---
title: "Store Zustand"
description: "create + selector."
tags: ["zustand","estado-global"]
track: "react"
language: "tsx"
code: |
    import { create } from 'zustand';

    const useStore = create((set) => ({
      count: 0,
      inc: () => set((s) => ({ count: s.count + 1 })),
    }));

    const count = useStore((s) => s.count);
---

Selectors evitam re-render quando outros campos mudam.
