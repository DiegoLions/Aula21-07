const readline = require('readline');

const numeroSecreto = Math.floor(Math.random() * 101); // Cria um número aleatório entre 0 e 100
console.log(`Número secreto gerado: ${numeroSecreto}`); // Para depuração, pode ser removido depois
let tentativas = 0; // Contador de tentativas
const MAX_TENTATIVAS = 10; // Número máximo de tentativas

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Adivinhe o número (100–200) ===');
console.log(`Você tem no máximo ${MAX_TENTATIVAS} tentativas.\n`); 

rl.setPrompt('Seu palpite: '); // Define o prompt para o usuário
rl.prompt(); // Exibe o prompt para o usuário

rl.on('line', (input) => {
  const palpite = parseInt(input.trim(), 10);

  if (isNaN(palpite)) { // Verifica se o palpite é um número válido
    console.log(' Digite um número válido.');
  } else {
    tentativas++; // Incrementa o contador de tentativas

    if (palpite === numeroSecreto) { // Verifica se o palpite está correto
      console.log(`🎉 Acertou em ${tentativas} tentativas! O número era ${numeroSecreto}.`);
      return rl.close();
    }

    if (tentativas >= MAX_TENTATIVAS) { // Verifica se atingiu o limite de tentativas
      console.log(`Você atingiu o limite de ${MAX_TENTATIVAS} tentativas. O número era ${numeroSecreto}.`); 
      return rl.close();
    }

    console.log(palpite < numeroSecreto ? ' Muito baixo!' : 'Muito alto!'); // operador ternário para feedback

    // O comando acima seria o meso que:
    if (palpite < numeroSecreto) {
      console.log('Muito baixoo!');
     }
    if (palpite > numeroSecreto) {
      console.log('Muito alto!');
    }

    console.log(`Você ainda tem ${MAX_TENTATIVAS - tentativas} tentativas.\n`); 
  }

  rl.prompt();
});

rl.on('close', () => {
  console.log('Fim de jogoss.');
  process.exit(0);
});


// Testando a diferença entre fork e clone.
/// Fazendio um merge