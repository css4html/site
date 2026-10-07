---
title: "Why Web Components"
description: "Native browser components, framework-agnostic — the problem they solve."
order: 1
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-hello-element"]
relatedSnippets: ["wc-custom-elements-define", "wc-register-guard"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; body stays in Portuguese for now.

Frameworks vêm e vão. O **DOM** e os padrões da plataforma ficam.

<aside class="tip tip-wc"><strong>DICA WC</strong> — Web Components são APIs nativas: Custom Elements, Shadow DOM, `<slot>` e templates. Funcionam com vanilla JS, React, Vue, Angular ou o que o time usar amanhã.</aside>

## O problema

Você criou um botão de mídia (ou uma galeria) em React. O time de marketing usa Vue. O site institucional é HTML estático. Três reescritas do mesmo componente?

**Web Components** empacotam UI + comportamento numa tag HTML real (`<image-gallery>`), que qualquer app pode montar.

## Peças da plataforma

| API | Papel |
| --- | --- |
| **Custom Elements** | Registrar uma classe que estende `HTMLElement` |
| **Shadow DOM** | Encapsular markup e CSS do componente |
| **HTML templates / slots** | Compor conteúdo externo dentro do componente |

## Quando fazem sentido

- Design system compartilhado entre apps
- Widgets embutíveis (CMS, sites estáticos, microfrontends)
- Libs de UI sem amarrar o consumidor a um framework

Quando *não* são a melhor escolha: apps 100% React com ecossistema só de hooks — às vezes um componente React puro é mais simples. A trilha mostra os dois mundos: CE nativo **e** consumo em React/Vue.

## Próximo passo

Na lição 2 você cria o primeiro Custom Element com Shadow DOM.
