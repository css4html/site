---
title: "Tabela de dados"
description: "caption, thead, th com scope — tabela acessível."
tags: ["tabela","dados","acessibilidade"]
difficulty: "iniciante"
track: "html"
order: 105
html: |
    <table>
      <caption>Tempo médio de carregamento (ms)</caption>
      <thead>
        <tr>
          <th scope="col">Página</th>
          <th scope="col">Mobile</th>
          <th scope="col">Desktop</th>
        </tr>
      </thead>
      <tbody>
        <tr><th scope="row">Início</th><td>820</td><td>410</td></tr>
        <tr><th scope="row">Exemplos</th><td>1100</td><td>520</td></tr>
        <tr><th scope="row">Blog</th><td>640</td><td>300</td></tr>
      </tbody>
    </table>
css: |
    table {
      border-collapse: collapse;
      width: 100%;
      max-width: 28rem;
      font-family: system-ui, sans-serif;
      font-size: 0.95rem;
    }
    caption { text-align: left; font-weight: 700; margin-bottom: 0.5rem; }
    th, td { border: 1px solid #cbd5e1; padding: 0.45rem 0.65rem; text-align: left; }
    thead { background: #e2e8f0; }
---

Tabelas são para dados — não use para posicionar layout.
