---
title: "Galeria vanilla (Custom Element)"
description: "image-gallery com Shadow DOM, grid e evento gallery-select."
tags: ["webcomponents","galeria","shadow-dom"]
difficulty: "intermediario"
track: "wc"
order: 403
html: |
    <image-gallery columns="3">
      <img src="https://picsum.photos/seed/wc1/300/300" alt="Praia ao entardecer" />
      <img src="https://picsum.photos/seed/wc2/300/300" alt="Trilha na montanha" />
      <img src="https://picsum.photos/seed/wc3/300/300" alt="Cidade à noite" />
      <img src="https://picsum.photos/seed/wc4/300/300" alt="Floresta verde" />
      <img src="https://picsum.photos/seed/wc5/300/300" alt="Deserto dourado" />
      <img src="https://picsum.photos/seed/wc6/300/300" alt="Lago espelhado" />
    </image-gallery>
css: |
    body { margin: 0; }
js: |
    class ImageGallery extends HTMLElement {
      static get observedAttributes() { return ['columns']; }
      connectedCallback() {
        if (this.shadowRoot) return;
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = `
          <style>
            :host { display: block; }
            .grid {
              display: grid;
              gap: 0.75rem;
              grid-template-columns: repeat(var(--cols, 3), minmax(0, 1fr));
            }
            ::slotted(img) {
              width: 100%;
              aspect-ratio: 1;
              object-fit: cover;
              border-radius: 10px;
              cursor: pointer;
              transition: transform 0.15s ease, box-shadow 0.15s ease;
            }
            ::slotted(img:hover) {
              transform: scale(1.03);
              box-shadow: 0 6px 18px rgba(0,0,0,0.25);
            }
            .caption {
              margin-top: 0.75rem;
              font: 0.9rem/1.4 system-ui, sans-serif;
              color: #64748b;
              min-height: 1.4em;
            }
          </style>
          <div class="grid"><slot></slot></div>
          <p class="caption" part="caption">Clique numa imagem</p>
        `;
        this._caption = root.querySelector('.caption');
        this._grid = root.querySelector('.grid');
        this._onClick = (e) => {
          const img = e.target.closest('img');
          if (!img || !this.contains(img)) return;
          this._caption.textContent = img.alt || img.src;
          this.dispatchEvent(new CustomEvent('gallery-select', {
            detail: { src: img.src, alt: img.alt },
            bubbles: true,
            composed: true,
          }));
        };
        this.addEventListener('click', this._onClick);
        this._applyColumns();
      }
      disconnectedCallback() {
        this.removeEventListener('click', this._onClick);
      }
      attributeChangedCallback() { this._applyColumns(); }
      _applyColumns() {
        const n = Number(this.getAttribute('columns') || 3);
        if (this._grid) this._grid.style.setProperty('--cols', String(Math.max(1, n)));
      }
    }
    if (!customElements.get('image-gallery')) {
      customElements.define('image-gallery', ImageGallery);
    }
---

Galeria agnóstica a framework. Clique numa imagem para ver o `alt` na legenda e o evento `gallery-select`.
