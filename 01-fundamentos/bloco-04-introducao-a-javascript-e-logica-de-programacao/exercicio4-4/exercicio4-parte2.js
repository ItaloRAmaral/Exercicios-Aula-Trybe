//////////// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

///// -> Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
///// -> Valor esperado no retorno da função: Fernanda.

function quantidadeCaracteres(nomes) {

    let maiorNome = nomes[0];
    for (let index in nomes) {
        if (nomes[index].length > maiorNome.length) {
            maiorNome = nomes[index];
        }
    }
    return maiorNome;
}

console.log(quantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));