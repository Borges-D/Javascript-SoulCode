// Função para determinar a categoria com base na idade
function determinarCategoria(idade) {
  if (idade >= 0 && idade <= 12) {
    return "Criança";
  } else if (idade >= 13 && idade <= 17) {
    return "Adolescente";
  } else if (idade >= 18 && idade <= 59) {
    return "Adulto";
  } else if (idade >= 60) {
    return "Idoso";
  } else {
    return "Idade inválida";
  }
}

// Exemplo de uso
let idadeExemplo = 25;
let categoria = determinarCategoria(idadeExemplo);

console.log(`Com ${idadeExemplo} anos, a pessoa é considerada ${categoria}.`);
