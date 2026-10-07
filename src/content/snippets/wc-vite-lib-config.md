---
title: "Vite lib mode"
description: "Trecho de vite.config para library mode."
tags: ["vite","lib-mode"]
track: "wc"
language: "js"
code: |
    export default defineConfig({
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'ImageGallery',
          formats: ['es', 'umd'],
          fileName: (f) => `image-gallery.${f}.js`,
        },
      },
    });
---

Gera ESM (+ UMD opcional) a partir do entry.
