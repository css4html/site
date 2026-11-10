# LÓGICA com JS — trilha completa

- Trilha: `/trilhas/logica-com-js/`, antes de JavaScript na home, nas trilhas e na navegação.
- Dez aulas completas e vinculadas, em pt-BR, en e es. Não há estados “Em breve”. Só a aula 10 mostra conclusão da trilha.
- Cada aula inclui explicação, exemplo executável com Console e exercício com Verificar; ao todo são 46 casos de correção.
- Os identificadores dos exemplos e o feedback do verificador ficam em português, conforme indicado nas traduções.
- O kit do Figma é preservado: roxo `#8B5CF6` no badge/dica/rótulo do Console, sem alterar logo ou marca.

| Aula | Título em pt-BR | Slug |
| --- | --- | --- |
| 1 | O que é um algoritmo | `logica-01-algoritmo` |
| 2 | Variáveis e tipos | `logica-02-variaveis-tipos` |
| 3 | Operadores e expressões | `logica-03-operadores-expressoes` |
| 4 | Decisões | `logica-04-decisoes` |
| 5 | Repetição: tabuada e FizzBuzz | `logica-05-repeticao` |
| 6 | Funções | `logica-06-funcoes` |
| 7 | Arrays: percorrer, somar e achar o maior | `logica-07-arrays` |
| 8 | Objetos: aluno e notas | `logica-08-objetos` |
| 9 | Depuração e casos de borda | `logica-09-depuracao` |
| 10 | Projeto final: calculadora de média | `logica-10-projeto-calculadora-media` |

URL local: `http://localhost:4321/trilhas/logica-com-js/<slug>/`.
URL final após aprovação/merge: `https://css4html.com.br/trilhas/logica-com-js/<slug>/`.
Idiomas adicionais: `/en/trilhas/logica-com-js/<slug>/` e `/es/trilhas/logica-com-js/<slug>/`.

## Capas

As dez imagens originais do designer (1200×630) ficam em `public/trilhas/logica-com-js/covers/`. O campo opcional `cover` da coleção de lições alimenta `BaseLayout.image`, com OG e Twitter image, e uma imagem no artigo reutiliza o padrão `.post-cover` do blog. As mesmas artes são usadas nos três idiomas, sem modificações.

## Playground e isolamento

`Playground` mantém os modos HTML/CSS/JS e React/TSX. O Console recebe logs e erros do iframe, valida a janela de origem e um canal novo por execução, limita a saída a 80 mensagens e renderiza texto, nunca HTML.

O modo opt-in `logic` executa JavaScript síncrono, sem DOM, num Web Worker descartável criado dentro do iframe `sandbox="allow-scripts"`, sem `allow-same-origin`. A CSP bloqueia conexões e scripts externos. O iframe encerra o worker após 1,5 s, inclusive quando há `while(true)` dentro da função testada; um segundo limite no host cobre falha na inicialização. Edição/Resetar invalidam o resultado anterior. Nenhum código do aluno é salvo ou enviado pelo verificador.

Os casos declarativos estão em `src/config/logic-playgrounds.ts`. O comparador aceita objetos equivalentes independentemente da ordem das propriedades, preserva tipos e ordem de arrays e não confunde `NaN`/`Infinity` com `null`. Os exercícios de arrays, objetos e projeto final também rejeitam mutação da entrada; cada caso recebe uma cópia nova dos argumentos. O botão **Verificar** roda as entradas e compara retornos síncronos com tipos estritos, exibindo esperado/recebido e uma lista de acertos/erros. É uma ferramenta didática para valores JSON simples, não correção antifraude nem um sandbox para código hostil; casos e respostas ficam no cliente. Os playgrounds DOM/React antigos continuam com seu sandbox original.

## Conferência local

```sh
npm ci
npm test
npm run build
# Reutilize o servidor do projeto em localhost:4321; inicie apenas se não houver um:
npm run dev
# Em outro terminal (Chrome já instalado nesta máquina):
npm run test:e2e
```

Os 38 testes unitários verificam exemplos, códigos iniciais, soluções dos 46 casos e a comparação de dados. Os 10 testes de navegador verificam as 30 páginas localizadas, as dez aulas vinculadas, conclusão somente na última, metadados, capas, console, erros de sintaxe/execução, casos certos/errados, soluções, loops infinitos e recuperação, além dos previews JS, Web Components e React. Salva capturas desktop/mobile em `test-results/screenshots/` (ignorado pelo Git). `PLAYWRIGHT_BASE_URL` permite testar outro servidor e `SCREENSHOT_DIR` muda a pasta das capturas.

Para reproduzir acerto e erro juntos, abra a aula 1 e clique em **Verificar** sem editar: pagamento exato passa; os outros dois falham. Soluções para revisão:

```js
function calcularTroco(valorPago, preco) { return valorPago - preco; }
function tipoDoValor(valor) { return typeof valor; }
function podeEntrar(idade, temConvite, acompanhado) {
  return idade >= 18 && (temConvite || acompanhado);
}
```

Não há lint configurado no projeto. O `npm audit` aponta seis vulnerabilidades transitivas já presentes no lockfile original (cinco altas e uma moderada); nenhuma atualização automática foi feita fora deste escopo.

## Desafios novos e capturas

O exercício FizzBuzz começa com quatro casos certos e dois errados: o caso de múltiplos de 3 e 5 deve vir antes dos casos isolados. O projeto final implementa `boletim(aluno)` com `{ nome, media, situacao }`, usando `calcularMedia`, laços, arrays e decisões; não usa `prompt`/`alert`. Lista vazia dá `media: null` e `'sem notas'`, média a partir de 7 dá `'aprovado'`, e abaixo disso dá `'recuperacao'`. Nota zero não é ausência.

A suíte gera `lesson-05-fizzbuzz-mixed-desktop.png`, `lesson-05-fizzbuzz-passed-desktop.png` e `lesson-10-calculadora-media-passed-desktop.png` em `test-results/screenshots/`, com resultados obtidos de execuções reais. Soluções de referência para revisão ficam em `tests/logic-solutions.ts`.
