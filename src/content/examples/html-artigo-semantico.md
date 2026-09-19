---
title: "Artigo semântico"
description: "article com header, headings e rodapé de metadados."
tags: ["semantica","article","fundamentos"]
difficulty: "iniciante"
track: "html"
order: 101
html: |
    <article>
      <header>
        <h1>Progressive enhancement em 2026</h1>
        <p>Publicado em <time datetime="2026-09-01">1 de setembro de 2026</time></p>
      </header>
      <p>Comece com HTML sólido, acrescente CSS e só então JavaScript.</p>
      <footer>
        <p>Por CSS4HTML · 4 min de leitura</p>
      </footer>
    </article>
css: |
    article {
      max-width: 36rem;
      font-family: system-ui, sans-serif;
      line-height: 1.55;
    }
    header p, footer p {
      color: #666;
      font-size: 0.9rem;
    }
    h1 { margin-bottom: 0.35rem; }
---

Edite as tags semânticas e veja como a estrutura permanece clara mesmo com CSS mínimo.
