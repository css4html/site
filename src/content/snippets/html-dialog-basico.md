---
title: "Dialog básico"
description: "Modal nativo com showModal()."
tags: ["dialog","modal"]
track: "html"
language: "html"
code: |
    <dialog id="modal">
      <form method="dialog">
        <p>Confirma a ação?</p>
        <button value="cancel">Cancelar</button>
        <button value="ok">OK</button>
      </form>
    </dialog>
    <button type="button" onclick="document.getElementById('modal').showModal()">Abrir</button>
---

Copie o snippet e adapte ao seu projeto. Veja também os [exemplos HTML](/exemplos/).
