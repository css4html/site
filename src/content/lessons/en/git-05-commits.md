---
title: "Commits"
description: "Clear messages, git log, diff, and the habit of small commits."
order: 5
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

Um **commit** congela o staging num ponto do histórico, com mensagem e autor.

## Criar o commit

```bash
git commit -m "docs: adiciona README inicial"
```

Mensagens curtas no imperativo ("adiciona", "corrige", "remove") funcionam bem.

## Ver o histórico

```bash
git log --oneline
git log
```

## Ver o que mudou

```bash
git diff            # working tree vs staging
git diff --staged   # staging vs último commit
```

## Fluxo do dia a dia

1. Editar arquivos
2. `git status` — o que mudou?
3. `git add …` — escolher o que entra
4. `git commit -m "…"` — registrar
5. Repetir

<aside class="tip tip-git"><strong>DICA GIT</strong> — Commits pequenos e frequentes são mais fáceis de revisar e de reverter. Evite um único commit gigante "tudo de uma vez" no fim do dia.</aside>

## O que evitar por enquanto

- `git commit --amend` em commits já enviados ao remoto
- Reescrever histórico compartilhado

Na dúvida: faça um **novo** commit corretivo.

## Checklist

- [ ] Pelo menos 2 commits no repo de teste
- [ ] `git log --oneline` mostra as mensagens
- [ ] Você usou `git diff` antes de um `add`
