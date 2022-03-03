
/// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
}

const numerosOrdenados = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${numerosOrdenados} se encontram ordenados de forma crescente!`)


/// Crie uma função que receba um número e retorne seu fatorial.
/// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N.Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
/// Bônus(opcional): tente fazer o mesmo exercício de forma recursiva.Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial = num => {
    let resultado = 1;
    for (let i = 1; i <= num; i +=1){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));

/// Crie uma função que receba uma frase e retorne qual a maior palavra.

const text = text => {
    let arrayText = text.split(' ');
    let maxlength = 0;
    let result = '';
    for (let i = 0; i < arrayText.length; i++) {
        if (arrayText[i].length > maxlength) {
            maxlength = arrayText[i].length;
            result = arrayText[i];
        }
    }
    return result;
}

console.log(text("Antonio foi no banheiro e não sabemos o que aconteceu"));