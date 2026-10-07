---
title: "CE no Vue"
description: "Import side-effect + tag no template Vue."
tags: ["vue","host"]
track: "wc"
language: "js"
code: |
    // main.js / SFC script
    import '@css4html/image-gallery';

    // template:
    // <image-gallery columns="3">
    //   <img src="/a.jpg" alt="A" />
    // </image-gallery>
---

Configure `isCustomElement` no compiler se o Vue avisar sobre a tag.
