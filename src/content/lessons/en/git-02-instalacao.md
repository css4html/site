---
title: "Installation"
description: "Install Git on Windows, macOS, or Linux and verify with git --version."
order: 2
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

Sem o binário `git` no PATH, nada da trilha roda. Instale uma vez e confira.

## Conferir se já existe

```bash
git --version
```

Se aparecer algo como `git version 2.x.x`, pode seguir para a [configuração](/trilhas/git-na-pratica/git-03-configuracao/).

## Windows

1. Baixe o instalador em [git-scm.com](https://git-scm.com/download/win)
2. Aceite o editor padrão (ou escolha VS Code)
3. Deixe a opção de adicionar ao PATH marcada
4. Abra o **Git Bash** ou o PowerShell e rode `git --version`

## macOS

```bash
xcode-select --install
# ou, com Homebrew:
brew install git
```

## Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install git
git --version
```

<aside class="tip tip-git"><strong>DICA GIT</strong> — Prefira uma versão recente (2.30+). Comandos como `git switch` e `git restore` existem nas versões modernas e deixam o fluxo mais claro que o antigo `checkout` coringa.</aside>

## Checklist

- [ ] `git --version` imprime uma versão
- [ ] Você sabe qual terminal vai usar (Bash, zsh, PowerShell, Git Bash)
