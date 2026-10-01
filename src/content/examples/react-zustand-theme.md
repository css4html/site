---
title: "Zustand: tema global"
description: "Store compartilhado entre componentes."
tags: ["zustand","estado-global"]
difficulty: "avancado"
track: "react"
order: 308
html: |
    
css: |
    .panel {
      font-family: system-ui, sans-serif;
      padding: 1rem 1.25rem;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      transition: background .2s, color .2s;
    }
    .panel.dark { background: #0f172a; color: #e2e8f0; border-color: #334155; }
    .panel.light { background: #f8fafc; color: #0f172a; }
    button {
      margin-top: .75rem; padding: .45rem .8rem; border-radius: 8px;
      border: 1px solid #94a3b8; cursor: pointer; background: #61dafb;
    }
    .row { display: flex; gap: 1rem; flex-wrap: wrap; }
js: |
    import { create } from 'zustand';

    const useTheme = create((set) => ({
      theme: 'dark',
      toggle: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
    }));

    function Panel() {
      const theme = useTheme((s) => s.theme);
      return (
        <div className={'panel ' + theme}>
          <strong>Painel</strong>
          <p>Tema atual: {theme}</p>
        </div>
      );
    }

    function Toggle() {
      const toggle = useTheme((s) => s.toggle);
      const theme = useTheme((s) => s.theme);
      return (
        <button type="button" onClick={toggle}>
          Alternar ({theme})
        </button>
      );
    }

    function App() {
      return (
        <div className="row">
          <div>
            <Panel />
            <Toggle />
          </div>
          <Panel />
        </div>
      );
    }
---

Dois `Panel` leem o mesmo store — sem prop drilling.
