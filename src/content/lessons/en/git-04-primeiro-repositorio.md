---
title: "First repository"
description: "git init, status, add, and the working tree → staging → commit cycle."
order: 4
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.

Vamos criar um repositório local e ver o Git enxergar seus arquivos.

## Criar pasta e inicializar

```bash
mkdir meu-site
cd meu-site
git init
```

Isso cria a pasta oculta `.git/` — o banco de dados do histórico.

## Ver o estado

```bash
git status
```

Arquivos novos aparecem como *untracked*.

## Primeiro arquivo

Crie `README.md`:

```md
# Meu site
Aprendendo Git na prática com CSS4HTML.
```

```bash
git status
git add README.md
git status
```

Agora o arquivo está no **staging** (pronto para commit).

<aside class="tip tip-git"><strong>DICA GIT</strong> — `git add .` adiciona tudo da pasta atual. No começo é prático; depois prefira `git add caminho/arquivo` para commits mais cirúrgicos.</aside>

## Clonar (alternativa)

Se o repo já existe no GitHub:

```bash
git clone https://github.com/USUARIO/REPO.git
cd REPO
```

`clone` já traz o remoto `origin` configurado — veremos isso nas lições de PR e Pages.

## Checklist

- [ ] `git init` em uma pasta de teste
- [ ] `README.md` no staging com `git add`
- [ ] Você entende a diferença entre untracked / staged / committed
