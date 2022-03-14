const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
    [9, 8, 10, 7, 5],
    [10, 9, 9, 10, 8],
    [10, 7, 10, 8, 9]
];


// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map.
function studentAverage(array1, array2) {
    return array1.map((element, index) =>({
        name: element,
        average: (array2[index].reduce((acc, element) => acc + element) / array2[index].length)
    }))
}

console.log(studentAverage(students, grades));
