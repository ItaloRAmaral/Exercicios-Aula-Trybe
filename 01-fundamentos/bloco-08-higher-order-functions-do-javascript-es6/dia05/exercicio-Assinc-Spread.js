// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Ovomaltine', 'Leite Ninho'];

const fruitSalad = (fruit, additional) => {
    const newArray = [...specialFruit, ...additionalItens]
    return newArray;
};

console.log(fruitSalad(specialFruit, additionalItens));