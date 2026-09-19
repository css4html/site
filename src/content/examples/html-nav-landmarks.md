---
title: "Navegação e landmarks"
description: "header, nav, main e footer formando a estrutura da página."
tags: ["nav","landmarks","semantica"]
difficulty: "iniciante"
track: "html"
order: 104
html: |
    <a class="skip" href="#conteudo">Ir para o conteúdo</a>
    <header>
      <p class="marca">CSS4HTML</p>
      <nav aria-label="Principal">
        <ul>
          <li><a href="#conteudo">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>
    <main id="conteudo">
      <h1>Landmarks na prática</h1>
      <p id="sobre">Cada região tem um papel claro para leitores de tela e CSS.</p>
    </main>
    <footer>
      <p>Rodapé da página</p>
    </footer>
css: |
    .skip {
      position: absolute; left: -999px; top: 0;
    }
    .skip:focus { left: 8px; background: #fff; padding: 0.5rem; z-index: 1; }
    header, footer { background: #0f172a; color: #e2e8f0; padding: 0.75rem 1rem; }
    nav ul { display: flex; gap: 1rem; list-style: none; margin: 0; padding: 0; }
    nav a { color: #93c5fd; }
    main { padding: 1rem; font-family: system-ui, sans-serif; }
    .marca { font-weight: 700; margin: 0 0 0.5rem; }
---

Tabule até o skip link (ou clique nele) e veja o foco ir para o main.
