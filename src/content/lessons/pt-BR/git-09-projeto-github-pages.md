---
title: "Projeto: página no GitHub Pages"
description: "Publique uma página HTML estática com Git, branch e GitHub Pages."
order: 9
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---

Hora de juntar tudo: repositório → commits → (opcional) branch/PR → site no ar.

## Objetivo

Publicar uma página HTML mínima em **https://USUARIO.github.io/REPO/** (ou domínio do Pages).

## Starter pronto

Use o HTML de exemplo desta trilha:

- Arquivo local no site: [`/trilhas/git-na-pratica/starter/`](/trilhas/git-na-pratica/starter/) (abra e "Salvar como")
- Ou copie o bloco abaixo para `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Meu site — Git na prática</title>
    <style>
      :root { font-family: system-ui, sans-serif; color: #e8eef7; background: #0f1419; }
      body { max-width: 40rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.6; }
      a { color: #3fb950; }
      .badge {
        display: inline-block; font-size: 0.75rem; letter-spacing: 0.04em; font-weight: 700;
        color: #3fb950; border: 1px solid #238636; border-radius: 999px; padding: 0.2rem 0.6rem;
      }
    </style>
  </head>
  <body>
    <p class="badge">DICA GIT</p>
    <h1>Olá, GitHub Pages</h1>
    <p>Publicado com a trilha <strong>Git na prática</strong> do CSS4HTML.</p>
    <p><a href="https://css4html.com.br/trilhas/git-na-pratica/">Voltar à trilha</a></p>
  </body>
</html>
```

## Passo a passo

```bash
mkdir meu-pages && cd meu-pages
git init
# cole o index.html
git add index.html
git commit -m "feat: página inicial para GitHub Pages"
```

Crie o repo vazio no GitHub, depois:

```bash
git remote add origin https://github.com/USUARIO/REPO.git
git branch -M main
git push -u origin main
```

No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch** → branch `main` → folder `/ (root)` → Save.

Espere 1–2 minutos e abra a URL do Pages.

<aside class="tip tip-git"><strong>DICA GIT</strong> — Quer treinar PR? Faça o HTML numa branch `feature/pages`, abra o PR, mergeie, e só então ative o Pages na `main`.</aside>

## Checklist final da trilha

- [ ] `git --version` e identidade configurados
- [ ] Commits com mensagens claras
- [ ] Pelo menos uma branch além de `main`
- [ ] Um PR aberto (mesmo que solo) e mergeado
- [ ] Página HTML respondendo no GitHub Pages

Parabéns — você fechou o ciclo do Git na prática. Para estilizar melhor a página, siga a [trilha de HTML](/trilhas/html-do-zero/) e a de [CSS](/trilhas/css-do-zero-ao-layout/).
