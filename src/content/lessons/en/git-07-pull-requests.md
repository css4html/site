---
title: "Pull requests"
description: "Remote origin, push, and opening a GitHub PR to review before merge."
order: 7
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

**Pull Request (PR)** é o pedido: "aceite as mudanças desta branch na `main`". No GitHub ele vira discussão + diff + checks.

## Criar o repositório no GitHub

1. New repository (vazio, sem README se você já tem um local)
2. Copie a URL HTTPS ou SSH

## Ligar o remoto e enviar

```bash
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

Depois, na feature:

```bash
git switch feature/titulo-pagina
git push -u origin feature/titulo-pagina
```

## Abrir o PR

No GitHub: **Compare & pull request** → título claro → descrição do que mudou → Create.

<aside class="tip tip-git"><strong>DICA GIT</strong> — PR bom tem escopo pequeno, mensagem que explica o *porquê*, e (quando der) um print ou URL de preview. Revise o próprio diff antes de pedir review.</aside>

## Atualizar o PR

Novos commits na mesma branch + `git push` atualizam o PR automaticamente.

## CLI (opcional)

Com [GitHub CLI](https://cli.github.com/):

```bash
gh pr create --title "feat: título da página" --body "Atualiza o h1 e o title."
```

## Checklist

- [ ] `origin` aponta para o GitHub (`git remote -v`)
- [ ] Branch enviada com `git push -u`
- [ ] PR aberto contra `main`
