---
title: "Galeria no Vue (host CE)"
description: "Custom Element hospedado por Vue 3 (build global via CDN)."
tags: ["webcomponents","vue","galeria"]
difficulty: "intermediario"
track: "wc"
order: 405
html: |
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <div id="app"></div>
css: |
    body { background: #0f172a; margin: 0; padding: 16px; }
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

    const { createApp, ref, onMounted } = Vue;

    createApp({
      setup() {
        const info = ref('');
        const host = ref(null);
        onMounted(() => {
          const el = host.value;
          if (!el) return;
          el.addEventListener('gallery-select', (e) => {
            info.value = e.detail.alt || e.detail.src;
          });
        });
        return { info, host };
      },
      template: `
        <div>
          <h2 style="font-family:system-ui;color:#F5A623">Galeria no Vue</h2>
          <image-gallery ref="host" columns="2">
            <img src="https://picsum.photos/id/110/300/300" alt="Pôr do sol no campo" />
            <img src="https://picsum.photos/id/29/300/300" alt="Montanhas nevadas" />
            <img src="https://picsum.photos/id/249/300/300" alt="Cidade à noite" />
            <img src="https://picsum.photos/id/28/300/300" alt="Floresta verde" />
          </image-gallery>
          <p style="font-family:system-ui;color:#94a3b8">
            {{ info ? 'Estado do Vue: ' + info : 'O Vue escuta gallery-select…' }}
          </p>
        </div>
      `
    }).mount('#app');
---

Vue monta o template; o `<image-gallery>` continua sendo o mesmo CE vanilla.
