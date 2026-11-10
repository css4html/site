// Typed reference solutions for LÓGICA com TS (they still pass after the types are stripped).
export const solutions = {
  algorithm: 'function calcularTroco(pago: number, preco: number): number { return pago - preco; }',
  variables: 'function tipoDoValor(valor: number | string | boolean): string { return typeof valor; }',
  operators: 'function podeEntrar(idade: number, temConvite: boolean, acompanhado: boolean): boolean { return idade >= 18 && (temConvite || acompanhado); }',
  decisions: "type Paridade = 'par' | 'impar';\nfunction classificarNumero(n: number): Paridade { if (n % 2 === 0) return 'par'; else return 'impar'; }",
  loops: `function fizzBuzz(numero: number): string {
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return String(numero);
}`,
  functions: 'function calcularTotal(preco: number, quantidade: number, frete: number): number { return preco * quantidade + frete; }',
  arrays: 'function maiorNumero(numeros: readonly number[]): number | null { if (numeros.length === 0) return null; let maior: number = numeros[0]; for (const numero of numeros) { if (numero > maior) maior = numero; } return maior; }',
  objects: 'interface Aluno { nome: string; notas: number[] }\nfunction mediaDoAluno(aluno: Aluno): number | null { if (aluno.notas.length === 0) return null; let soma = 0; for (const nota of aluno.notas) soma += nota; return soma / aluno.notas.length; }',
  debugging: 'function somarAte(limite: number): number { let total: number = 0; for (let i = 1; i <= limite; i++) total += i; return total; }',
  project: `interface Aluno { nome: string; notas: number[] }
type Situacao = 'aprovado' | 'recuperacao' | 'sem notas';
interface Boletim { nome: string; media: number | null; situacao: Situacao }
function calcularMedia(notas: readonly number[]): number | null {
  if (notas.length === 0) return null;
  let soma = 0;
  for (const nota of notas) soma += nota;
  return soma / notas.length;
}
function boletim(aluno: Aluno): Boletim {
  const media = calcularMedia(aluno.notas);
  let situacao: Situacao;
  if (media === null) situacao = 'sem notas';
  else if (media >= 7) situacao = 'aprovado';
  else situacao = 'recuperacao';
  return { situacao, media, nome: aluno.nome };
}`,
};
