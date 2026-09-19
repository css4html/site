---
title: "Esconder na impressão"
description: "Oculte nav, botões e anúncios com @media print."
tags: ["print","media-query","utilitario"]
language: css
code: |
    @media print {
      .no-print,
      header,
      footer,
      nav,
      .btn {
        display: none !important;
      }
    
      a[href]::after {
        content: " (" attr(href) ")";
        font-size: 0.85em;
        color: #444;
      }
    
      body {
        background: #fff;
        color: #000;
      }
    }
---

Combine com margens `@page` para artigos. Veja tipografia fluida em [clamp](/exemplos/tipografia-clamp/).
