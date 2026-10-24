---
title: "Configuração"
description: "user.name, user.email, branch padrão e editor — identidade nos commits."
order: 3
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---

Todo commit carrega **autor** e **e-mail**. Configure isso antes do primeiro `commit`.

## Identidade (obrigatório)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "voce@email.com"
```

Use o **mesmo e-mail** da conta do GitHub se quiser que os commits apareçam linkados ao seu perfil.

## Branch padrão

```bash
git config --global init.defaultBranch main
```

Assim, `git init` já cria `main` em vez de `master`.

## Editor de mensagens (opcional)

```bash
git config --global core.editor "code --wait"   # VS Code
# ou
git config --global core.editor "nano"
```

## Ver o que está configurado

```bash
git config --global --list
git config user.name
git config user.email
```

<aside class="tip tip-git"><strong>DICA GIT</strong> — `--global` grava em `~/.gitconfig` (vale para todos os repos da máquina). Sem `--global`, a config vale só no repositório atual.</aside>

## Checklist

- [ ] `user.name` e `user.email` definidos
- [ ] `init.defaultBranch` = `main`
- [ ] Conta no GitHub criada (vamos usar a partir da lição 7)
