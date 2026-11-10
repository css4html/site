export const solutions = {
  algorithm: 'function calcularTroco(pago, preco) { return pago - preco; }',
  variables: 'function tipoDoValor(valor) { return typeof valor; }',
  operators: 'function podeEntrar(idade, temConvite, acompanhado) { return idade >= 18 && (temConvite || acompanhado); }',
  decisions: "function classificarNumero(n) { if (n % 2 === 0) return 'par'; else return 'impar'; }",
  loops: `function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return String(numero);
}`,
  functions: 'function calcularTotal(preco, quantidade, frete) { return preco * quantidade + frete; }',
  arrays: 'function maiorNumero(numeros) { if (numeros.length === 0) return null; let maior = numeros[0]; for (const numero of numeros) { if (numero > maior) maior = numero; } return maior; }',
  objects: 'function mediaDoAluno(aluno) { if (aluno.notas.length === 0) return null; let soma = 0; for (const nota of aluno.notas) soma += nota; return soma / aluno.notas.length; }',
  debugging: 'function somarAte(limite) { let total = 0; for (let i = 1; i <= limite; i++) total += i; return total; }',
  // Reversed property order is intentionally accepted: grading compares values, not JSON key order.
  project: `function calcularMedia(notas) {
  if (notas.length === 0) return null;
  let soma = 0;
  for (const nota of notas) soma += nota;
  return soma / notas.length;
}
function boletim(aluno) {
  const media = calcularMedia(aluno.notas);
  let situacao;
  if (media === null) situacao = 'sem notas';
  else if (media >= 7) situacao = 'aprovado';
  else situacao = 'recuperacao';
  return { situacao, media, nome: aluno.nome };
}`,
};
