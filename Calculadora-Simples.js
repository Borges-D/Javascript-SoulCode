// Função para realizar operações de calculadora
function calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case "adição":
      return numero1 + numero2;
    case "subtração":
      return numero1 - numero2;
    case "multiplicação":
      return numero1 * numero2;
    case "divisão":
      // Verifica se o segundo número não é zero antes de realizar a divisão
      return numero2 !== 0
        ? numero1 / numero2
        : "Divisão por zero não é permitida";
    default:
      return "Operação inválida";
  }
}

// Exemplo de uso
let numero1 = 10;
let numero2 = 5;
let operacao = "adição";

let resultado = calcular(numero1, numero2, operacao);

console.log(
  `O resultado da ${operacao} entre ${numero1} e ${numero2} é: ${resultado}`
);
