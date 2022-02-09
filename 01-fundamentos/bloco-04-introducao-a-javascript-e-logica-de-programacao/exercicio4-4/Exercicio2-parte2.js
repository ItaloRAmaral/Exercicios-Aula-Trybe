///////////////// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

////// -> Array de teste: [2, 3, 6, 7, 10, 1];.
////// -> Valor esperado no retorno da função: 4.

function arrayTest (array) {
    let indiceMaior = 0;
    for (let index in array) {
        if (array[index] > array[indiceMaior]) {
            indiceMaior = index;
        } else {
            indiceMaior = indiceMaior;
        }
    }
    return indiceMaior;
}

console.log(arrayTest([2, 10, 6, 2, 3, 1]));