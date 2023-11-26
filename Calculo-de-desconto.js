// Função para calcular o valor final com desconto
function calcularValorComDesconto(preco, desconto) {
  // Verifica se o desconto é válido (entre 0 e 100)
  if (desconto >= 0 && desconto <= 100) {
    // Calcula o valor do desconto
    const valorDesconto = (desconto / 100) * preco;

    // Calcula o valor final após o desconto
    const valorFinal = preco - valorDesconto;

    return valorFinal;
  } else {
    return "Desconto inválido";
  }
}

// Exemplo de uso
let precoOriginal = 100;
let descontoPercentual = 20;

let valorFinal = calcularValorComDesconto(precoOriginal, descontoPercentual);

console.log(
  `O preço original é ${precoOriginal}, o desconto é ${descontoPercentual}%, e o valor final é: ${valorFinal}`
);
