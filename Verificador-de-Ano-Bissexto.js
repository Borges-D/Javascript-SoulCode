// Função para verificar se um ano é bissexto
function verificarAnoBissexto(ano) {
  // Um ano é bissexto se for divisível por 4
  // Exceto para anos divisíveis por 100, a menos que também sejam divisíveis por 400
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exemplo de uso
let anoExemplo = 2024;
let resultado = verificarAnoBissexto(anoExemplo);

console.log(`O ano ${anoExemplo} é bissexto? ${resultado ? "Sim" : "Não"}.`);
