// Função para verificar e determinar o tipo de triângulo
function verificarTipoTriangulo(a, b, c) {
  // Verifica se os segmentos podem formar um triângulo
  if (a + b > c && a + c > b && b + c > a) {
    // Verifica o tipo de triângulo
    if (a === b && b === c) {
      return "Equilátero"; // Três lados iguais
    } else if (a === b || a === c || b === c) {
      return "Isósceles"; // Dois lados iguais
    } else {
      return "Escaleno"; // Todos os lados diferentes
    }
  } else {
    return "Não é um triângulo válido";
  }
}

// Exemplo de uso
let ladoA = 5;
let ladoB = 5;
let ladoC = 5;

let tipoTriangulo = verificarTipoTriangulo(ladoA, ladoB, ladoC);

console.log(
  `Os segmentos ${ladoA}, ${ladoB} e ${ladoC} formam um triângulo ${tipoTriangulo}.`
);
