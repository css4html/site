---
title: "Merges"
description: "Integrar a feature na main, merge via PR e o básico de conflitos."
order: 8
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---

**Merge** junta históricos. No fluxo desta trilha, o caminho principal é: PR aprovado → **Merge pull request** no GitHub.

## Merge pelo GitHub (recomendado no MVP)

Na página do PR: **Merge pull request** → Confirm.

Depois, atualize o local:

```bash
git switch main
git pull origin main
```

## Merge local (entender o comando)

```bash
git switch main
git merge feature/titulo-pagina
```

Se não houver divergência complexa, o Git cria um merge commit (ou fast-forward).

## Conflitos (visão rápida)

Se o mesmo trecho mudou em duas branches:

```text
<<<<<<< HEAD
versão da main
=======
versão da feature
>>>>>>> feature/titulo-pagina
```

1. Abra o arquivo e escolha o resultado final (remova os marcadores)
2. `git add arquivo`
3. `git commit` (ou conclua o merge)

<aside class="tip tip-git"><strong>DICA GIT</strong> — Esta trilha **não** usa rebase. Em time, combine o fluxo (merge commit vs squash) e seja consistente. Reescrever histórico compartilhado é assunto avançado.</aside>

## Depois do merge

```bash
git push origin --delete feature/titulo-pagina   # remote
git branch -d feature/titulo-pagina              # local
```

## Checklist

- [ ] Mergeou um PR de verdade (ou um exercício solo)
- [ ] `main` local atualizada com `git pull`
- [ ] Branch de feature apagada após o merge
