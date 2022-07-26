const readline = require('readline-sync');

function calculaImc (peso, altura) {
  return peso / (altura ** 2);
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual o sua altura? (em m)');
  const imc = calculaImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

// function exibeImc (imc) {
//   if (imc < 18.5) {
//     return 'Abaixo do peso';
//   } else if (imc < 25) {
//     return 'Peso normal';
//   } else if (imc < 30) {
//     return 'Acima do peso';
//   } else {
//     return 'Obesidade';
//   }
// }