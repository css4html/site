---
title: "Página de perfil"
description: "Projeto: perfil com landmarks, figure e formulário de contato."
tags: ["projeto","perfil","semantica"]
difficulty: "intermediario"
track: "html"
order: 107
html: |
    <header>
      <p class="marca">CSS4HTML</p>
      <nav aria-label="Principal">
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
    <main>
      <article id="sobre">
        <h1>Marina Costa</h1>
        <figure>
          <img src="https://placehold.co/160x160/334155/e2e8f0?text=MC" width="160" height="160" alt="Retrato ilustrado de Marina Costa" />
          <figcaption>Desenvolvedora front-end · São Paulo</figcaption>
        </figure>
        <p>Escrevo HTML semântico, CSS responsivo e um pouco de JavaScript no DOM.</p>
      </article>
      <section id="contato" aria-labelledby="contato-titulo">
        <h2 id="contato-titulo">Contato</h2>
        <form>
          <label for="msg">Mensagem</label>
          <textarea id="msg" name="msg" rows="3" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
    <footer><p>© 2026 Marina Costa</p></footer>
css: |
    body { margin: 0; font-family: system-ui, sans-serif; }
    header, footer { background: #0f172a; color: #e2e8f0; padding: 0.75rem 1rem; }
    nav { display: flex; gap: 1rem; }
    nav a { color: #93c5fd; }
    main { padding: 1rem; max-width: 40rem; }
    figure { margin: 1rem 0; }
    img { border-radius: 50%; }
    label { display: block; font-weight: 600; margin-bottom: 0.25rem; }
    textarea { width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid #cbd5e1; }
    button { margin-top: 0.5rem; padding: 0.5rem 1rem; background: #2563eb; color: #fff; border: 0; border-radius: 8px; }
---

Base do projeto da trilha HTML — adapte textos e estrutura.
