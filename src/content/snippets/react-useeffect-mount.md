---
title: "useEffect na montagem"
description: "Array de deps vazio + cleanup."
tags: ["useeffect","hooks"]
track: "react"
language: "tsx"
code: |
    useEffect(() => {
      const id = window.setInterval(() => console.log('tick'), 1000);
      return () => window.clearInterval(id);
    }, []);
---

Cleanup evita vazamento de timers.
