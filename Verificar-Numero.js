// Função para verificar o sinal do número
function verificarNumero(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

// Exemplo de uso
let numeroExemplo = 7;
let resultado = verificarNumero(numeroExemplo);

console.log(`O número ${numeroExemplo} é ${resultado}.`);

// Neste exemplo, a função verificarNumero recebe um número como parâmetro e verifica se é positivo, negativo ou zero, retornando uma string correspondente. Em seguida, um exemplo de uso é mostrado usando o número 7.

// Você pode testar o programa com diferentes valores, atribuindo outros números à variável numeroExemplo.
