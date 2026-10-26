---
title: "Configuración"
description: "user.name, user.email, rama por defecto, editor y clave SSH en GitHub."
order: 3
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo sigue en portugués por ahora.

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

## Chave SSH (GitHub)

Para clonar e enviar código **sem digitar senha a cada `push`**, use SSH com o GitHub.

### 1. Gerar a chave

```bash
ssh-keygen -t ed25519 -C "voce@email.com"
```

Aceite o caminho padrão (`~/.ssh/id_ed25519`) e defina uma **passphrase** (recomendado).

### 2. Ligar o agente e adicionar a chave

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 3. Copiar a chave pública

```bash
cat ~/.ssh/id_ed25519.pub
```

No macOS você também pode copiar direto para a área de transferência:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

### 4. Colar no GitHub

No GitHub: **Settings → SSH and GPG keys → New SSH key**. Cole o conteúdo de `id_ed25519.pub`, dê um título (ex.: `notebook-casa`) e salve.

### 5. Testar a conexão

```bash
ssh -T git@github.com
```

Na primeira vez, confirme o host. Em seguida deve aparecer algo como: `Hi usuario! You've successfully authenticated...`

<aside class="tip tip-git"><strong>DICA GIT</strong> — repositórios remotos em SSH usam `git@github.com:org/repo.git`. HTTPS pede token a cada push; SSH usa a chave que você acabou de cadastrar.</aside>

## Checklist

- [ ] `user.name` e `user.email` definidos
- [ ] `init.defaultBranch` = `main`
- [ ] Conta no GitHub criada
- [ ] Chave SSH gerada e adicionada no GitHub
- [ ] `ssh -T git@github.com` autentica com sucesso
