const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames(array) {
    return array.reduce((acc,element) => {
        const string = `${acc} ${element.author.name},`
        return string.trim();
    }, '');
}

console.log(reduceNames(books));

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge(array) {
    const sumBooks = array.length;
    const sumAges = array.reduce((acc, element) => acc + (element.releaseYear - element.author.birthYear), 0);
    return sumAges / sumBooks;
}

console.log(averageAge(books));

// 4 -  Encontre o livro com o maior nome.
function longestNamedBook(array) {
    return array.reduce((acc, element) => acc.name.length > element.name.length ? acc : element) 
}

console.log(longestNamedBook(books));