
const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];

// * 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
function nomeProdutos (array) {
    let arrayProdutos = [];
    array.forEach((element)=>{ 
        if(element.id % 2 === 0){
            arrayProdutos.push(element.name);
        }
    })

    return arrayProdutos;
}

console.log(nomeProdutos(techProducts));
// * 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário

function verifyProdutc (array){
    return array.some((element)=> element.price > 300);
}

console.log(verifyProdutc(techProducts));
// * 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço totalex: id: 8 e quantidade: 2 preço total: 432

const priceTotal = (array, id, amount) => {
    
    let item = array.find((element) => element.id === id).price
    return item * amount
}

console.log(priceTotal(techProducts, 2, 3));