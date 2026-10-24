---
title: "Introdução ao Git"
description: "O que é controle de versão e por que o Git importa no dia a dia."
order: 1
trail: "git-na-pratica"
track: "git"
relatedExamples: []
relatedSnippets: []
---

Git é um **sistema de controle de versão**: ele registra o histórico do seu projeto em "fotografias" chamadas *commits*.

<aside class="tip tip-git"><strong>DICA GIT</strong> — Git ≠ GitHub. Git roda na sua máquina; GitHub (GitLab, Bitbucket…) hospeda cópias remotas e adiciona PRs, issues e Pages.</aside>

## Por que usar

- Desfazer mudanças com segurança
- Trabalhar em paralelo (branches)
- Colaborar sem sobrescrever o trabalho de outra pessoa
- Publicar sites estáticos (GitHub Pages) a partir do mesmo repositório

## Peças do mental model

| Conceito | Em uma frase |
| --- | --- |
| **Working tree** | Os arquivos que você edita agora |
| **Staging (index)** | O que vai entrar no próximo commit (`git add`) |
| **Commit** | Um ponto fixo no histórico, com mensagem |
| **Branch** | Um ponteiro móvel para um commit |
| **Remote** | Uma cópia do repo em outro lugar (ex.: `origin` no GitHub) |

## O que esta trilha *não* cobre (ainda)

Rebase, cherry-pick e fluxos avançados ficam para depois. Aqui o foco é o caminho feliz: instalar → commit → branch → PR → merge → publicar no Pages.

## Próximo passo

Instalar o Git e confirmar que o comando `git` responde no terminal.
