---
title: "Branches y checkout"
description: "Crear branches, cambiar con switch/checkout y aislar una feature."
order: 6
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo sigue en portugués por ahora.

Uma **branch** é um ponteiro para um commit. Trabalhar em branch evita bagunçar a `main` enquanto você experimenta.

## Ver branches

```bash
git branch
```

O asterisco marca a branch atual.

## Criar e entrar numa branch

```bash
git switch -c feature/titulo-pagina
# equivalente clássico:
# git checkout -b feature/titulo-pagina
```

## Voltar para main

```bash
git switch main
```

## Isolar uma mudança

Na branch `feature/…`:

```bash
# edite index.html, por exemplo
git add index.html
git commit -m "feat: atualiza título da página"
git switch main
```

Em `main`, o arquivo **não** tem essa mudança — ela vive só na feature até o merge.

<aside class="tip tip-git"><strong>DICA GIT</strong> — Nomes descritivos ajudam: `feature/…`, `fix/…`, `docs/…`. Evite `teste`, `nova`, `asdf`.</aside>

## Remover branch local (depois do merge)

```bash
git branch -d feature/titulo-pagina
```

## Checklist

- [ ] Criou uma branch com `git switch -c`
- [ ] Fez um commit nela
- [ ] Voltou para `main` e confirmou que a mudança não está lá
