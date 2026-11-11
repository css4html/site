# Crescimento: medição, SEO e pauta

Diagnóstico de nov/2026: cerca de 250 usuários em 30 dias, a maioria robôs de data center
(Ashburn, Boardman, Council Bluffs, Prineville, Luleå, Dublin). Algo entre 10 e 30 humanos por semana.
Ainda não é hora de AdSense. A meta agora é **tráfego orgânico do Brasil + fazer o visitante voltar**.

## 1. O que o site já mede (código)

| Evento GA4 | Quando dispara | Onde |
|---|---|---|
| `trail_start` | clique em "Começar lição 1" (`label` = trilha) | páginas `/trilhas/*/` |
| `lesson_complete` | leitor chega ao fim da lição | `GrowthCTA.astro` |
| `trail_complete` | fim da última lição da trilha | `GrowthCTA.astro` |
| `example_run` | botão **Executar** no playground | `BaseLayout.astro` |
| `exercise_check` | botão **Verificar** no playground | `BaseLayout.astro` |
| `playground_edit` | primeira edição de código na página | `BaseLayout.astro` |
| `post_read` | leitor chega ao fim do post | `GrowthCTA.astro` |
| `newsletter_signup` | envio do formulário de newsletter | `GrowthCTA.astro` |
| `snippet_copy` / `playground_copy` | copiar código | `BaseLayout.astro` |
| `consultoria_cta_click` / `consultoria_whatsapp_click` | interesse em consultoria | layout / consultoria |
| `outbound_click`, `follow_click` | links externos e redes | `BaseLayout.astro` |

## 2. O que fazer no painel do GA4 (manual)

1. **Admin → Eventos → Marcar como evento principal:** `trail_start`, `lesson_complete`,
   `example_run`, `newsletter_signup` e `consultoria_whatsapp_click`.
   Os eventos só aparecem na lista depois de dispararem pelo menos uma vez (até 24 h).
2. **Associar o Search Console:** Admin → Vinculações de produtos → Search Console.
3. **Ver só humanos:** em Relatórios, use "Adicionar comparação" com
   `País = Brazil` ou exclua `Cidade` em (Ashburn, Boardman, Council Bluffs, Prineville, Luleå, Dublin).
   Salve como comparação para reaproveitar.
4. **Bloquear robôs na origem (opcional):** com o domínio no Cloudflare, ative *Bot Fight Mode*.

## 3. SEO técnico aplicado

- JSON-LD `BreadcrumbList` em todas as páginas internas (gerado pela URL no `BaseLayout`).
- JSON-LD `Article` nos posts do blog (com `datePublished`).
- JSON-LD `LearningResource` nas lições, com `isPartOf` apontando para a trilha (`Course`).
- `<title>` das lições inclui o nome da trilha. Antes, "O que é um algoritmo", "Funções" e
  "Variáveis e tipos" tinham títulos idênticos em trilhas diferentes e competiam entre si no Google.

## 4. Pauta: 10 artigos para busca orgânica

Formato: título = a pergunta que a pessoa digita. 800 a 1.500 palavras, um exemplo vivo
(playground) e links para a trilha relacionada. "Flex vs Grid" já existe no blog e não entra aqui.

| # | Título (H1 e `<title>`) | Busca alvo | Liga com |
|---|---|---|---|
| 1 | Como centralizar uma div com CSS (5 jeitos) | como centralizar div | trilha CSS, exemplo `flexbox-centro` |
| 2 | Lógica de programação para iniciantes: por onde começar | lógica de programação | LÓGICA com JS |
| 3 | Git merge ou rebase: qual usar? | git merge vs rebase | Git na prática / Merges |
| 4 | Diferença entre let, const e var no JavaScript | let const var | JavaScript do zero |
| 5 | O que é TypeScript e por que usar | o que é typescript | LÓGICA com TS |
| 6 | Como fazer um site responsivo com HTML e CSS | site responsivo | trilha CSS, `media-queries` |
| 7 | Exercícios de lógica de programação com resposta | exercícios de lógica | LÓGICA com JS (FizzBuzz, média) |
| 8 | Como usar o z-index (e por que ele "não funciona") | z-index não funciona | exemplo `z-index-empilhamento` |
| 9 | Como subir um site grátis no GitHub Pages | github pages | Git na prática / projeto |
| 10 | useState no React explicado com exemplos | usestate react | React do básico ao estado |

Ordem sugerida: 2, 7 e 1 primeiro. "O que é um algoritmo" já é a segunda página mais vista, então
conteúdo de lógica tem tração comprovada.

## 5. Fazer o visitante voltar

O formulário de newsletter já está pronto no `GrowthCTA` e aparece no fim de cada lição e post.
Falta só o provedor: crie uma conta (Buttondown, MailerLite ou Brevo) e preencha
`NEWSLETTER_ACTION` e `NEWSLETTER_EMAIL_FIELD` em `src/config/site.ts`.
Enquanto estiver vazio, o bloco mostra links para Instagram e GitHub.

## 6. Quando reavaliar o AdSense

Com 5 a 10 mil visitantes reais do Brasil por mês, vindos de busca orgânica.
Antes disso, afiliados (hospedagem, cursos) e a consultoria rendem mais.
