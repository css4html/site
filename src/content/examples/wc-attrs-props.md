---
title: "Atributos e columns"
description: "observedAttributes atualiza o grid quando columns muda."
tags: ["atributos","observedAttributes","galeria"]
difficulty: "intermediario"
track: "wc"
order: 406
html: |
    <label style="font:0.9rem system-ui;color:#94a3b8">
      Colunas:
      <input id="cols" type="range" min="1" max="4" value="3" />
      <span id="cols-val">3</span>
    </label>
    <image-gallery columns="3">
      <img src="https://picsum.photos/seed/wc1/300/300" alt="Praia ao entardecer" />
      <img src="https://picsum.photos/seed/wc2/300/300" alt="Trilha na montanha" />
      <img src="https://picsum.photos/seed/wc3/300/300" alt="Cidade à noite" />
      <img src="https://picsum.photos/seed/wc4/300/300" alt="Floresta verde" />
      <img src="https://picsum.photos/seed/wc5/300/300" alt="Deserto dourado" />
      <img src="https://picsum.photos/seed/wc6/300/300" alt="Lago espelhado" />
    </image-gallery>
css: |
    body { background: #0f172a; color: #e2e8f0; }
    label { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
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

    const input = document.getElementById('cols');
    const val = document.getElementById('cols-val');
    const gallery = document.querySelector('image-gallery');
    input.addEventListener('input', () => {
      val.textContent = input.value;
      gallery.setAttribute('columns', input.value);
    });
---

Arraste o slider: `attributeChangedCallback` reaplica `--cols` no shadow.
