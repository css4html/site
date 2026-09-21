---
title: "Accessible forms"
description: "label, input, button, fieldset, and native HTML validation."
order: 4
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-formulario-acessivel"]
relatedSnippets: ["html-label-input","html-button-types"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


Formulários bons começam no HTML — antes de qualquer JavaScript.

## Regras de ouro

1. Todo controle tem um `<label>` associado (`for`/`id` ou wrapping).
2. Use o `type` certo: `email`, `tel`, `url`, `number`.
3. `button type="submit"` envia; `type="button"` não.
4. `required`, `minlength`, `pattern` dão validação nativa.

## fieldset e legend

Agrupe rádios/checkboxes relacionados:

```html
<fieldset>
  <legend>Preferência de contato</legend>
  ...
</fieldset>
```
