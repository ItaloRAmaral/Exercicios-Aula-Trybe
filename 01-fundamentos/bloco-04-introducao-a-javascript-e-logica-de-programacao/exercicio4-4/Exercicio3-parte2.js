///////////// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

/////// -> Array de teste: [2, 4, 6, 7, 10, 0, -3];.
/////// -> Valor esperado no retorno da função: 6.

function indiceMenorValor (array) {
    let menorValor = 0;
    for (let index in array) {
        if (array[index] < array[menorValor]) {
            menorValor = index;
        }
    }
    return menorValor;
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));