const estudantes = [{
        nome: 'Joel',
        projeto: 'Trybewarts',
        status: 98,
    },
    {
        nome: 'Mica',
        projeto: 'Unit test',
        status: 100,
    },
    {
        nome: 'Hugonardo',
        projeto: 'Trybewarts',
        status: 97,
    },
    {
        nome: 'Aninha',
        projeto: 'Trybewarts',
        status: 100,
    },
    {
        nome: 'Joicy',
        projeto: 'To do list',
        status: 100,
    },
    {
        nome: 'Ronald',
        projeto: 'Trybewarts',
        status: 75,
    },
];

function mensagemEstudantes (array) {
    array.forEach((element)=>{
        if (element.status === 100){
            console.log(`Olá ${element.nome}, parabéns por ter finalizado 100% do ${element.projeto}`);
        } 
    })
}

mensagemEstudantes(estudantes);