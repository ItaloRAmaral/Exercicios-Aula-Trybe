/*
    1 - Crie uma função que retorne um objeto no formato {nomeCompleto, email} representando uma nova pessoa contratada.Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa @trybe.com.
*/

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {
        fullName,
        email: `${email}@trybe.com`
    }
}

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

// console.log(newEmployees(employeeGenerator));

/*
    Desenvolva uma HOF que retorna o resultado de um sorteio.Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.O retorno da sua HOF deve ser uma string(Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const verificaNumero = (myNumber, number) => {
    myNumber === number
};

const sorteiaNumeros = (myNumber, e) => {
    const numeroSorteado = Math.floor((Math.random() * 5) + 1);

    return e(myNumber, numeroSorteado) ? 'Parabens, você ganhou' : 'Tente Novamente';
}

// console.log(sorteiaNumeros(4, verificaNumero));

/*
3 - Crie uma HOF que receberá três parâmetros.O primeiro será um array de respostas corretas(Gabarito), o segundo será um array de respostas a serem verificadas(respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.Ao final a HOF deve retornar o total da contagem de respostas certas.
     - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta("N.A") não altera - se a contagem.

*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificarRespostas = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    }
    if (studentAnswers === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, verifyAnswer) => {
    let contador = 0;
    for (let i = 0; i < rightAnswers.length; i += 1) {
        const check = verifyAnswer(rightAnswers[i], studentAnswers[i]);
        contador += check;
        console.log(contador)
    };
    return contador
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, verificarRespostas));