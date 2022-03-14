const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.
function containsA(array) {
    return array.reduce((acc, element)=> 
        acc + element.split('').reduce((acc, element)=>{
            if (element === 'A' || element === 'a') return acc + 1;
            return acc;
        },0),0);
};

console.log(containsA(names));