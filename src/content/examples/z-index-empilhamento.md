---
title: "Empilhamento com z-index"
description: "Camadas, stacking context e quem fica na frente."
tags: ["z-index","position","layout"]
difficulty: intermediario
order: 14
html: |
    <div class="cena">
      <div class="camada a">A · z-index: 1</div>
      <div class="camada b">B · z-index: 3</div>
      <div class="camada c">C · z-index: 2</div>
    </div>
css: |
    .cena {
      position: relative;
      height: 220px;
      background: #f1f5f9;
      border-radius: 12px;
    }
    
    .camada {
      position: absolute;
      width: 140px;
      height: 100px;
      border-radius: 10px;
      color: #fff;
      font-weight: 700;
      display: grid;
      place-items: center;
      box-shadow: 0 8px 20px rgba(0,0,0,.2);
    }
    
    .a { left: 24px; top: 40px; background: #64748b; z-index: 1; }
    .b { left: 80px; top: 70px; background: #2563eb; z-index: 3; }
    .c { left: 140px; top: 30px; background: #7c3aed; z-index: 2; }
---

`z-index` só vale em elementos posicionados (ou flex/grid items). Troque os valores e veja B continuar na frente.
