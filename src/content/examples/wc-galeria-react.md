---
title: "Galeria no React (host CE)"
description: "O mesmo image-gallery usado dentro de um App React via esm.sh."
tags: ["webcomponents","react","galeria"]
difficulty: "intermediario"
track: "wc"
mode: "react"
order: 404
html: |
    <!-- CE montado pelo React em #root -->
css: |
    body { background: #0f172a; }
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

    function App() {
      const [info, setInfo] = React.useState('Clique numa imagem');
      const ref = React.useRef(null);

      React.useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onSelect = (e) => setInfo(e.detail.alt || e.detail.src);
        el.addEventListener('gallery-select', onSelect);
        return () => el.removeEventListener('gallery-select', onSelect);
      }, []);

      return (
        <div>
          <h2 style={{ fontFamily: 'system-ui', color: '#F5A623' }}>Galeria no React</h2>
          <image-gallery ref={ref} columns="3">
            <img src="https://picsum.photos/seed/r1/300/300" alt="React host A" />
            <img src="https://picsum.photos/seed/r2/300/300" alt="React host B" />
            <img src="https://picsum.photos/seed/r3/300/300" alt="React host C" />
            <img src="https://picsum.photos/seed/r4/300/300" alt="React host D" />
          </image-gallery>
          <p style={{ fontFamily: 'system-ui', color: '#94a3b8' }}>{info}</p>
        </div>
      );
    }
---

React só hospeda a tag. O Custom Element (definido no topo do TSX) cuida do grid e do evento.
