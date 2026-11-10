# LÓGICA com JS — primeira entrega

- Trilha: `/trilhas/logica-com-js/`, antes de JavaScript na home, nas trilhas e na navegação.
- Aulas publicáveis: `logica-01-algoritmo`, `logica-02-variaveis-tipos`, `logica-03-operadores-expressoes`.
- As aulas 4–10 aparecem como **Em breve**, sem links. A aula 3 não dispara conclusão da trilha.
- Conteúdo e rotas em pt-BR, en e es seguem o padrão existente; os identificadores dos exemplos e o feedback do verificador ficam em português nesta entrega.
- O kit social do Figma não é um layout de página: a implementação preserva os componentes do site e usa o roxo `#8B5CF6` no badge, na dica e no rótulo do Console, sem alterar logo ou marca.

## Playground e isolamento

`Playground` mantém os modos HTML/CSS/JS e React/TSX. O Console recebe logs e erros do iframe, valida a janela de origem e um canal novo por execução, limita a saída a 80 mensagens e renderiza texto, nunca HTML.

O modo opt-in `logic` executa JavaScript síncrono, sem DOM, num Web Worker descartável criado dentro do iframe `sandbox="allow-scripts"`, sem `allow-same-origin`. A CSP bloqueia conexões e scripts externos. O iframe encerra o worker após 1,5 s, inclusive quando há `while(true)` dentro da função testada; um segundo limite no host cobre falha na inicialização. Edição/Resetar invalidam o resultado anterior. Nenhum código do aluno é salvo ou enviado pelo verificador.

Os casos declarativos estão em `src/config/logic-playgrounds.ts`. O botão **Verificar** roda as entradas e compara retornos síncronos com tipos estritos, exibindo esperado/recebido e uma lista de acertos/erros. É uma ferramenta didática para valores JSON simples, não correção antifraude nem um sandbox para código hostil; casos e respostas ficam no cliente. Os playgrounds DOM/React antigos continuam com seu sandbox original.

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

O teste de navegador verifica as nove páginas localizadas, metadados, os dez itens (sete futuros sem links), console, erros de sintaxe/execução, casos certos/errados, soluções, loops infinitos e recuperação, além dos previews JS, Web Components e React. Salva capturas desktop/mobile em `test-results/screenshots/` (ignorado pelo Git). `PLAYWRIGHT_BASE_URL` permite testar outro servidor e `SCREENSHOT_DIR` muda a pasta das capturas.

Para reproduzir acerto e erro juntos, abra a aula 1 e clique em **Verificar** sem editar: pagamento exato passa; os outros dois falham. Soluções para revisão:

```js
function calcularTroco(valorPago, preco) { return valorPago - preco; }
function tipoDoValor(valor) { return typeof valor; }
function podeEntrar(idade, temConvite, acompanhado) {
  return idade >= 18 && (temConvite || acompanhado);
}
```

Não há lint configurado no projeto. O `npm audit` aponta seis vulnerabilidades transitivas já presentes no lockfile original (cinco altas e uma moderada); nenhuma atualização automática foi feita fora deste escopo.
