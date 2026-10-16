---
title: "Web Components, lição 1: Por que Web Components?"
description: "Componentes nativos do browser, agnósticos a framework: o problema que os Web Components resolvem."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-hello-element']
relatedSnippets: ['wc-custom-elements-define', 'wc-register-guard']
draft: false
cover: /blog/covers/wc-01-por-que-web-components.png
coverAlt: "Capa DICA WC — Web Components, lição 1: Por que Web Components?"
---

Você fez uma galeria em React, o marketing usa Vue e o site institucional é HTML estático. Três reescritas do mesmo componente? Nesta primeira lição você entende por que os Web Components existem e quando vale a pena usá-los.

## O problema

Frameworks vêm e vão. O DOM e os padrões da plataforma ficam. Web Components empacotam UI e comportamento numa **tag HTML real** (como `<image-gallery>`), que qualquer app pode montar: vanilla JS, React, Vue, Angular ou o que o time usar amanhã.

## As peças da plataforma

| API | Papel |
|---|---|
| Custom Elements | Registrar uma classe que estende `HTMLElement` |
| Shadow DOM | Encapsular markup e CSS do componente |
| HTML templates / slots | Compor conteúdo externo dentro do componente |

## Quando fazem sentido

- Design system compartilhado entre apps
- Widgets embutíveis (CMS, sites estáticos, microfrontends)
- Libs de UI sem amarrar o consumidor a um framework

## Quando não são a melhor escolha

Em apps 100% React com ecossistema só de hooks, às vezes um componente React puro é mais simples. A trilha mostra os dois mundos: Custom Element nativo e consumo em React e Vue.

## O código

Esta lição é conceitual. O registro de um Custom Element é uma linha da plataforma:

```js
customElements.define('hello-badge', HelloBadge);
```

Na lição 2 você escreve a classe `HelloBadge` completa, com Shadow DOM.

## Pratique no playground

- ▶️ [Hello Custom Element](/exemplos/wc-hello-element/)

Snippets relacionados:

- 🧩 [customElements.define](/snippets/wc-custom-elements-define/)
- 🧩 [Guarda no define](/snippets/wc-register-guard/)

📚 Lição completa na trilha grátis: [Por que Web Components?](/trilhas/webcomponents-com-vite/wc-01-por-que-web-components/)

---

← Voltar ao guia: [Web Components do zero](/blog/web-components-do-zero/)

Próxima: [Lição 2: Custom Element + Shadow DOM](/blog/wc-02-custom-element-shadow-dom/) →
