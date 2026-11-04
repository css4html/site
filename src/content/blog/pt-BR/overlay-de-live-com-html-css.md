---
title: "Crie um overlay para sua live com HTML e CSS"
description: "Monte um alerta animado com fundo transparente e use como Fonte de Navegador no OBS — sem plugin pago."
pubDate: 2026-11-04
tags: ["css","animacao","obs","live"]
relatedExamples: ["animacao-fade","tipografia-clamp"]
relatedSnippets: ["card-sombra","pill-badge"]
---

Todo overlay de live — alerta de seguidor, placar, "agora tocando" — é, no fim das contas, **uma página web com fundo transparente**. O OBS Studio renderiza essa página por cima do seu jogo usando a **Fonte de Navegador** (Browser Source). Se você sabe HTML e CSS, já sabe fazer overlay.

## 1. O HTML: um card simples

Crie um arquivo `overlay.html`:

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="overlay.css">
</head>
<body>
  <div class="alerta" role="status">
    <span class="alerta__tag">novo seguidor</span>
    <strong class="alerta__nome">fulano_123</strong>
  </div>
</body>
</html>
```

## 2. O CSS: fundo transparente é a regra de ouro

```css
html, body {
  margin: 0;
  background: transparent; /* o OBS mostra o jogo por trás */
  overflow: hidden;
  font-family: system-ui, sans-serif;
}

.alerta {
  position: absolute;
  left: 40px;
  bottom: 40px;
  display: grid;
  gap: 4px;
  padding: 16px 24px;
  border-radius: 14px;
  background: rgb(15 20 25 / 0.85);
  border: 2px solid #7c5cff;
  color: #fff;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.4);
  animation: entra-e-sai 6s ease forwards;
}

.alerta__tag {
  justify-self: start;
  padding: 2px 10px;
  border-radius: 999px;
  background: #7c5cff;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.alerta__nome {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

@keyframes entra-e-sai {
  0%   { opacity: 0; transform: translateY(40px); }
  10%  { opacity: 1; transform: translateY(0); }
  85%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(40px); }
}

@media (prefers-reduced-motion: reduce) {
  .alerta { animation: none; }
}
```

O card usa o mesmo padrão do [card com sombra suave](/snippets/card-sombra/), a etiqueta é um [badge em formato pill](/snippets/pill-badge/) e a animação segue a ideia do exemplo [fade + slide](/exemplos/animacao-fade/).

## 3. Colocando no OBS

1. Em **Fontes**, clique em **+** → **Navegador**.
2. Marque **Arquivo local** e selecione o `overlay.html` (ou cole a URL, se hospedar a página).
3. Defina **largura 1920** e **altura 1080** — o mesmo tamanho da sua cena.
4. Pronto: o fundo transparente deixa o jogo aparecer por trás.

Dica: depois de editar o CSS, clique com o botão direito na fonte → **Atualizar** para ver a mudança.

## 4. Deixando dinâmico com JavaScript

Para trocar o nome sem editar o HTML, leia um parâmetro da URL:

```js
const nome = new URLSearchParams(location.search).get('nome');
if (nome) document.querySelector('.alerta__nome').textContent = nome;
```

Agora `overlay.html?nome=palloi` mostra outro nome. Esse é o mesmo princípio usado por bots de live: o bot recebe um evento do chat e atualiza a página do overlay.

## Quer pular a parte de integrar com o chat?

O [botPalloi](https://bot.palloi.com.br/) é um bot gratuito para Twitch, Kick e Discord que já entrega o overlay pronto: o chat manda `!clip` e o overlay mostra o clipe, o replay e estatísticas. Você pode usar o CSS deste post para personalizar o visual da sua live.
