// Função para gerar um número aleatório entre um intervalo
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função principal do jogo
function jogoDeAdivinhacao() {
  const numeroAleatorio = gerarNumeroAleatorio(1, 100);
  let tentativas = 0;

  console.log("Bem-vindo ao Jogo de Adivinhação!");

  // Função para processar as tentativas do jogador
  function tentarAdivinhar() {
    const palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));

    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log("Por favor, digite um número válido entre 1 e 100.");
      tentarAdivinhar();
      return;
    }

    tentativas++;

    // Verifica se o palpite está correto
    if (palpite === numeroAleatorio) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    } else {
      // Fornece dicas se o palpite é maior ou menor
      const dica = palpite > numeroAleatorio ? "Menor" : "Maior";
      console.log(`Tente novamente. O número é ${dica} do que o seu palpite.`);
      tentarAdivinhar();
    }
  }

  // Inicia o jogo
  tentarAdivinhar();
}

// Inicia o jogo de adivinhação
jogoDeAdivinhacao();
