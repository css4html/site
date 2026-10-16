---
title: "Web Components do zero"
description: "Guia completo da trilha CSS4HTML: do primeiro Custom Element até publicar e consumir sua própria lib com Vite, em vanilla, React e Vue."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite","guia"]
relatedExamples: ["wc-hello-element","wc-galeria-vanilla","wc-galeria-react","wc-galeria-vue","wc-vite-lib-tree"]
relatedSnippets: ["wc-custom-elements-define","wc-vite-lib-config"]
draft: true
# cover: /blog/covers/web-components-do-zero.png
# coverAlt: "Capa DICA WC — Web Components do zero"
---

Você fez uma galeria em React, o marketing usa Vue e o site institucional é HTML estático. Em vez de reescrever o mesmo componente três vezes, dá para escrever uma vez só, com APIs nativas do browser: os **Web Components**.

Este guia reúne as 8 lições da série **DICA WC**. Ao longo delas você constrói um único componente, o `<image-gallery>`, e leva ele do playground até um pacote publicado e consumido em qualquer stack.

## O que são Web Components

- **Custom Elements:** registram uma classe que estende `HTMLElement` como uma tag HTML nova.
- **Shadow DOM:** encapsula o markup e o CSS do componente.
- **Templates e slots:** compõem conteúdo externo dentro do componente.

O resultado é uma tag HTML real, que roda em vanilla JS, React, Vue ou Angular.

## O caminho da trilha

- **Lições 1 a 3:** Custom Element nativo, do conceito até a galeria completa.
- **Lições 4 e 5:** a mesma galeria hospedada por React e por Vue, sem reescrever nada.
- **Lições 6 e 7:** empacotar com Vite (library mode) e oferecer export dual.
- **Lição 8:** consumir a lib num app Vite com um único import.

## Todas as lições

1. [Lição 1: Por que Web Components?](/blog/wc-01-por-que-web-components/): Componentes nativos do browser, agnósticos a framework: o problema que os Web Components resolvem.
2. [Lição 2: Custom Element + Shadow DOM](/blog/wc-02-custom-element-shadow-dom/): class extends HTMLElement, customElements.define(), attachShadow e estilos encapsulados.
3. [Lição 3: Galeria de imagens com Custom Element (vanilla)](/blog/wc-03-galeria-imagens-vanilla/): Um <image-gallery> completo só com Custom Element e Shadow DOM, sem framework e sem bundler.
4. [Lição 4: Mesma galeria no React](/blog/wc-04-galeria-no-react/): Use o <image-gallery> dentro do JSX: o React só hospeda a tag e as props viram atributos.
5. [Lição 5: Mesma galeria no Vue](/blog/wc-05-galeria-no-vue/): Monte o <image-gallery> num app Vue 3 usando o build global via CDN, sem reescrever o componente.
6. [Lição 6: Empacotar com Vite (library mode)](/blog/wc-06-empacotar-com-vite/): Árvore do pacote, vite.config em library mode e os bundles ES + UMD do Custom Element.
7. [Lição 7: Export dual: classe + register](/blog/wc-07-export-dual/): Exporte a classe e registre a tag: dois jeitos de consumir a mesma lib de Web Components.
8. [Lição 8: Consumir a lib em app Vite](/blog/wc-08-consumir-lib-vite/): Um import ESM e a tag no HTML, JSX ou template: o ciclo completo do pacote ao app.

## Pratique

Todas as lições têm playground ao vivo em [css4html.com.br/exemplos](/exemplos/) e a trilha completa está em [Web Components + Vite](/trilhas/webcomponents-com-vite/).

Comece pela [Lição 1: Por que Web Components?](/blog/wc-01-por-que-web-components/) →
