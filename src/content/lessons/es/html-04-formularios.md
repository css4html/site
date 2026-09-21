---
title: "Formularios accesibles"
description: "label, input, button, fieldset y validación nativa de HTML."
order: 4
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-formulario-acessivel"]
relatedSnippets: ["html-label-input","html-button-types"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


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
