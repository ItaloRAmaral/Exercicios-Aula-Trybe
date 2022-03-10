/*  Array.forEach
    1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
*/

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

/*
    Array.find

    1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
*/

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {

    return array.find((element) => element % 3 === 0 && element % 5 === 0);
}

console.log(findDivisibleBy3And5(numbers))

/*
    2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

*/

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
    
    return array.find((element) => element.length === 5)
}

console.log(findNameWithFiveLetters(names));

/*
    3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
*/

const musicas = [{
        id: '31031685',
        title: 'Partita in C moll BWV 997'
    },
    {
        id: '31031686',
        title: 'Toccata and Fugue, BWV 565'
    },
    {
        id: '31031687',
        title: 'Chaconne, Partita No. 2 BWV 1004'
    },
]

function findMusic(id) {
    
    return musicas.find((element) => element.id === id)
};

console.log(findMusic('31031687'))

/*
    Array.some
    1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
  
*/

const alunos = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, name) => {

   return array.some((element)=> element === name)
}

console.log(hasName(alunos, 'Ana'))

/*
    Array.every
    2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
*/

const people = [{
        name: 'Mateus',
        age: 18
    },
    {
        name: 'José',
        age: 16
    },
    {
        name: 'Ana',
        age: 23
    },
    {
        name: 'Cláudia',
        age: 20
    },
    {
        name: 'Bruna',
        age: 19
    },
];

const verifyAges = (array, minimumAge) => {
    
    return Object.values(array).every((element) => element >= minimumAge)
}

console.log(verifyAges(people, 18));

/*
    Array.sort
    1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
*/

const peopleInfo = [{
        name: 'Mateus',
        age: 18
    },
    {
        name: 'José',
        age: 16
    },
    {
        name: 'Ana',
        age: 23
    },
    {
        name: 'Cláudia',
        age: 20
    },
    {
        name: 'Bruna',
        age: 19
    },
];

peopleInfo.sort((elementA, elementB)=> elementA.age - elementB.age)
peopleInfo.sort((elementA, elementB) => elementB.age - elementA.age)

console.log(peopleInfo);