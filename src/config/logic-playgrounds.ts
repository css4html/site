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
