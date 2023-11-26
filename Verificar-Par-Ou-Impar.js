// Função para verificar se o número é par ou ímpar
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Exemplo de uso
let numeroExemplo = 9;
let resultado = verificarParOuImpar(numeroExemplo);

console.log(`O número ${numeroExemplo} é ${resultado}.`);
