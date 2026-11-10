import type { Exercise } from '../lib/playground-runtime';

export const algorithmExample = `const valorPago = 20;
const preco = 12;
const troco = valorPago - preco;
console.log('Troco:', troco);`;
export const algorithmStarter = `function calcularTroco(valorPago, preco) {
  // Ajuste a ordem da conta: quanto deve voltar para quem pagou?
  return preco - valorPago;
}
console.log('Meu teste:', calcularTroco(20, 12));`;
export const algorithmExercise: Exercise = {
  functionName: 'calcularTroco',
  tests: [
    { label: 'Pagamento maior que o preço', args: [20, 12], expected: 8 },
    { label: 'Pagamento exato', args: [12, 12], expected: 0 },
    { label: 'Valores com centavos', args: [10, 7.5], expected: 2.5 },
  ],
};

export const variablesExample = `const nome = 'Ana';
let idade = 19;
idade = 20;
const estuda = true;
console.log(nome, idade, estuda);
console.log(typeof nome, typeof idade, typeof estuda);`;
export const variablesStarter = `function tipoDoValor(valor) {
  const tipo = 'number'; // Troque pelo operador que descobre o tipo.
  return tipo;
}
console.log('Meu teste:', tipoDoValor('Ana'));`;
export const variablesExercise: Exercise = {
  functionName: 'tipoDoValor',
  tests: [
    { label: 'Número', args: [20], expected: 'number' },
    { label: 'Texto', args: ['Ana'], expected: 'string' },
    { label: 'Booleano verdadeiro', args: [true], expected: 'boolean' },
    { label: 'Booleano falso', args: [false], expected: 'boolean' },
  ],
};

export const operatorsExample = `const quantidade = 3;
const preco = 10;
const total = quantidade * preco;
const saldo = 40;
console.log('Total:', total, 'Troco:', saldo - total);
console.log('Pode pagar?', saldo >= total);
console.log('Par?', quantidade % 2 === 0);
console.log('Os dois?', true && false);
console.log('Pelo menos um?', true || false);`;
export const operatorsStarter = `function podeEntrar(idade, temConvite, acompanhado) {
  // Precisa ter 18 anos ou mais E (convite OU acompanhante).
  return idade > 18 && temConvite;
}
console.log('Meu teste:', podeEntrar(18, true, false));`;
export const operatorsExercise: Exercise = {
  functionName: 'podeEntrar',
  tests: [
    { label: 'Limite: 18 anos com convite', args: [18, true, false], expected: true },
    { label: 'Maior de idade acompanhado', args: [22, false, true], expected: true },
    { label: 'Menor, mesmo com convite e acompanhante', args: [17, true, true], expected: false },
    { label: 'Maior sem convite nem acompanhante', args: [30, false, false], expected: false },
    { label: 'Maior com convite', args: [22, true, false], expected: true },
  ],
};


export const decisionsExample = `const idade = 17;
if (idade >= 16) {
  console.log('Na regra simplificada da aula, pode votar.');
} else {
  console.log('Ainda não atingiu a idade da regra.');
}
const numero = 7;
if (numero % 2 === 0) {
  console.log('par');
} else {
  console.log('impar');
}
const dia = 'sabado';
switch (dia) {
  case 'sabado':
  case 'domingo':
    console.log('Fim de semana');
    break;
  default:
    console.log('Dia de semana');
}`;
export const decisionsStarter = `function classificarNumero(numero) {
  if (numero % 2 === 0) {
    return 'impar'; // Revise os retornos de cada caminho.
  } else {
    return 'par';
  }
}
console.log('Meu teste:', classificarNumero(4));`;
export const decisionsExercise: Exercise = {
  functionName: 'classificarNumero',
  tests: [
    { label: 'Número par positivo', args: [4], expected: 'par' },
    { label: 'Número ímpar positivo', args: [7], expected: 'impar' },
    { label: 'Zero também é par', args: [0], expected: 'par' },
    { label: 'Ímpar negativo', args: [-3], expected: 'impar' },
  ],
};

export const loopsExample = `const base = 3;
for (let i = 1; i <= 5; i++) {
  console.log(base + ' x ' + i + ' = ' + base * i);
}
let restante = 3;
while (restante > 0) {
  console.log('Contagem:', restante);
  restante--;
}
console.log('Terminou!');`;
export const loopsStarter = `function fizzBuzz(numero) {
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  // Falta tratar quem é múltiplo de 3 E de 5 antes dos outros casos.
  return String(numero);
}
for (let numero = 1; numero <= 15; numero++) {
  console.log(numero, fizzBuzz(numero));
}`;
export const loopsExercise: Exercise = {
  functionName: 'fizzBuzz',
  tests: [
    { label: 'Sem múltiplo especial', args: [1], expected: '1' },
    { label: 'Múltiplo de 3', args: [3], expected: 'Fizz' },
    { label: 'Múltiplo de 5', args: [5], expected: 'Buzz' },
    { label: 'Múltiplo de 3 e 5', args: [15], expected: 'FizzBuzz' },
    { label: 'Outro múltiplo de ambos', args: [30], expected: 'FizzBuzz' },
    { label: 'Outro número comum', args: [7], expected: '7' },
  ],
};

export const functionsExample = `function dobro(numero) {
  return numero * 2;
}
function mensagem(nome) {
  return 'Olá, ' + nome + '!';
}
const resultado = dobro(6);
console.log('Dobro:', resultado);
console.log(mensagem('Ana'));
console.log('Outro dobro:', dobro(0));`;
export const functionsStarter = `function calcularTotal(preco, quantidade, frete) {
  // Cada unidade tem um preço. Some o frete só uma vez.
  return preco + quantidade + frete;
}
console.log('Meu teste:', calcularTotal(10, 2, 5));`;
export const functionsExercise: Exercise = {
  functionName: 'calcularTotal',
  tests: [
    { label: 'Duas unidades e frete', args: [10, 2, 5], expected: 25 },
    { label: 'Frete grátis', args: [12, 3, 0], expected: 36 },
    { label: 'Sem unidades, apenas o frete da regra', args: [10, 0, 5], expected: 5 },
    { label: 'Preço com parte decimal', args: [2.5, 4, 1], expected: 11 },
  ],
};

export const arraysExample = `const numeros = [3, 7, 2];
let soma = 0;
let maior = numeros[0];
for (const numero of numeros) {
  soma += numero;
  if (numero > maior) maior = numero;
}
console.log('Primeiro:', numeros[0], 'Quantidade:', numeros.length);
console.log('Soma:', soma, 'Maior:', maior);`;
export const arraysStarter = `function maiorNumero(numeros) {
  if (numeros.length === 0) return null;
  let maior = 0; // E se todos os valores forem negativos?
  for (const numero of numeros) {
    if (numero > maior) maior = numero;
  }
  return maior;
}
console.log('Meu teste:', maiorNumero([-5, -2, -9]));`;
export const arraysExercise: Exercise = {
  preserveArgs: true,
  functionName: 'maiorNumero',
  tests: [
    { label: 'Lista positiva', args: [[3, 7, 2]], expected: 7 },
    { label: 'Só negativos', args: [[-5, -2, -9]], expected: -2 },
    { label: 'Lista vazia', args: [[]], expected: null },
    { label: 'Um único valor', args: [[-4]], expected: -4 },
    { label: 'Zero e valores repetidos', args: [[0, 0, -1]], expected: 0 },
  ],
};

export const objectsExample = `const aluno = { nome: 'Ana', notas: [8, 6] };
let soma = 0;
for (const nota of aluno.notas) {
  soma += nota;
}
console.log('Aluno:', aluno.nome);
console.log('Notas:', aluno.notas);
console.log('Média:', soma / aluno.notas.length);
aluno.nome = 'Bia';
console.log('Nome atualizado:', aluno.nome);`;
export const objectsStarter = `function mediaDoAluno(aluno) {
  if (aluno.notas.length === 0) return null;
  let soma = 0;
  for (const nota of aluno.notas) {
    soma += nota;
  }
  return soma; // Falta um passo para virar média.
}
console.log('Meu teste:', mediaDoAluno({ nome: 'Ana', notas: [8, 6] }));`;
export const objectsExercise: Exercise = {
  preserveArgs: true,
  functionName: 'mediaDoAluno',
  tests: [
    { label: 'Duas notas', args: [{ nome: 'Ana', notas: [8, 6] }], expected: 7 },
    { label: 'Sem notas', args: [{ nome: 'Bia', notas: [] }], expected: null },
    { label: 'Uma nota zero', args: [{ nome: 'Caio', notas: [0] }], expected: 0 },
    { label: 'Três notas', args: [{ nome: 'Dani', notas: [9, 6, 9] }], expected: 8 },
  ],
};

export const debuggingExample = `function somarAte(limite) {
  let total = 0;
  for (let i = 1; i < limite; i++) {
    console.log('Passo:', i, 'Total antes:', total);
    total += i;
  }
  return total;
}
console.log('Recebido:', somarAte(3));
console.log('Esperado:', 6);
console.log('O último número entrou na soma?');`;
export const debuggingStarter = `function somarAte(limite) {
  let total = 0;
  for (let i = 1; i < limite; i++) {
    total += i;
  }
  return total;
}
console.log('Meu teste:', somarAte(3));`;
export const debuggingExercise: Exercise = {
  functionName: 'somarAte',
  tests: [
    { label: 'De 1 até 3, inclusive', args: [3], expected: 6 },
    { label: 'Só o primeiro número', args: [1], expected: 1 },
    { label: 'Limite zero', args: [0], expected: 0 },
    { label: 'Limite negativo: intervalo vazio', args: [-2], expected: 0 },
    { label: 'De 1 até 5, inclusive', args: [5], expected: 15 },
  ],
};

export const projectExample = `function calcularMedia(notas) {
  if (notas.length === 0) return null;
  let soma = 0;
  for (const nota of notas) soma += nota;
  return soma / notas.length;
}
const aluno = { nome: 'Ana', notas: [8, 6] };
console.log('Aluno:', aluno.nome, 'Média:', calcularMedia(aluno.notas));
console.log('Sem notas:', calcularMedia([]));`;
export const projectStarter = `function calcularMedia(notas) {
  if (notas.length === 0) return null;
  let soma = 0;
  // TODO: percorra notas e some os valores.
  return soma / notas.length;
}
function boletim(aluno) {
  const media = calcularMedia(aluno.notas);
  // TODO: escolha 'sem notas', 'aprovado' ou 'recuperacao'.
  return { nome: aluno.nome, media: media, situacao: 'aprovado' };
}
console.log('Meu boletim:', boletim({ nome: 'Ana', notas: [8, 6] }));`;
export const projectExercise: Exercise = {
  preserveArgs: true,
  functionName: 'boletim',
  tests: [
    { label: 'Média no limite de aprovação', args: [{ nome: 'Ana', notas: [8, 6] }], expected: { nome: 'Ana', media: 7, situacao: 'aprovado' } },
    { label: 'Abaixo de 7', args: [{ nome: 'Bia', notas: [5, 6] }], expected: { nome: 'Bia', media: 5.5, situacao: 'recuperacao' } },
    { label: 'Sem notas não significa média zero', args: [{ nome: 'Caio', notas: [] }], expected: { nome: 'Caio', media: null, situacao: 'sem notas' } },
    { label: 'Nota zero conta na média', args: [{ nome: 'Dani', notas: [0] }], expected: { nome: 'Dani', media: 0, situacao: 'recuperacao' } },
    { label: 'Notas decimais', args: [{ nome: 'Eva', notas: [7.5, 8.5] }], expected: { nome: 'Eva', media: 8, situacao: 'aprovado' } },
    { label: 'Três notas e outro nome', args: [{ nome: 'Fábio', notas: [9, 6, 9] }], expected: { nome: 'Fábio', media: 8, situacao: 'aprovado' } },
  ],
};
