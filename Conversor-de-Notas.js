// Função para converter notas em conceitos
function converterNotaParaConceito(nota) {
  if (nota >= 90 && nota <= 100) {
    return "A";
  } else if (nota >= 80 && nota < 90) {
    return "B";
  } else if (nota >= 70 && nota < 80) {
    return "C";
  } else if (nota >= 60 && nota < 70) {
    return "D";
  } else if (nota >= 0 && nota < 60) {
    return "F";
  } else {
    return "Nota inválida";
  }
}

// Exemplo de uso
let notaExemplo = 85;
let conceito = converterNotaParaConceito(notaExemplo);

console.log(`Com a nota ${notaExemplo}, o conceito é: ${conceito}`);
