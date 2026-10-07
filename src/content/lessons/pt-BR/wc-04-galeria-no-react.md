---
title: "Mesma galeria no React"
description: "Usar o Custom Element dentro de JSX — props viram atributos."
order: 4
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-galeria-react"]
relatedSnippets: ["wc-react-host", "wc-custom-elements-define"]
---

O mesmo `<image-gallery>` da lição 3 roda **dentro** do React. O playground usa esm.sh + Sucrase (como na trilha React).

<aside class="tip tip-wc"><strong>DICA WC</strong> — Em JSX, atributos DOM são strings. Passe `columns={3}` ou `columns="3"`. Eventos custom: `ref` + `addEventListener`, ou wrapper fino.</aside>

## Padrão

1. Defina / importe o Custom Element (side-effect `customElements.define`)
2. Use a tag no JSX como HTML

```tsx
function App() {
  return (
    <image-gallery columns="3">
      <img src="https://picsum.photos/id/249/300/300" alt="Cidade à noite" />
      <img src="https://picsum.photos/id/28/300/300" alt="Floresta verde" />
    </image-gallery>
  );
}
```

TypeScript pode reclamar da tag desconhecida — declare em `jsx.d.ts` no app real.

## Por que isso importa

O CE continua sendo a fonte da verdade visual. React só **compõe** e gerencia rota/dados. Trocar React por outro host não exige reescrever a galeria.
