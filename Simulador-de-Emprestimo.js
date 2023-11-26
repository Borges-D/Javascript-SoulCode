// Função para verificar a elegibilidade para um empréstimo
function verificarElegibilidadeParaEmprestimo(
  renda,
  idade,
  historicoDeCredito
) {
  // Defina os critérios de elegibilidade
  const rendaMinima = 2000;
  const idadeMinima = 18;
  const historicoDeCreditoPositivo = true;

  // Verifica se o cliente atende aos critérios
  if (
    renda >= rendaMinima &&
    idade >= idadeMinima &&
    historicoDeCredito === historicoDeCreditoPositivo
  ) {
    return "Elegível para o empréstimo";
  } else {
    return "Não elegível para o empréstimo";
  }
}

// Exemplo de uso
let rendaCliente = 2500;
let idadeCliente = 25;
let historicoDeCreditoCliente = true;

let elegibilidade = verificarElegibilidadeParaEmprestimo(
  rendaCliente,
  idadeCliente,
  historicoDeCreditoCliente
);

console.log(`O cliente é ${elegibilidade}.`);
