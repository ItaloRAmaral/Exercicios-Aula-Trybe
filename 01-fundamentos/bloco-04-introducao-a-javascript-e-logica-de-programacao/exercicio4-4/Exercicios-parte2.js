////////////////// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//// -> Exemplo de palíndromo: arara .
//// -> verificaPalindrome('arara') ;
//// -> Retorno esperado: true
//// -> verificaPalindrome('desenvolvimento') ;
//// -> Retorno esperado: false


function palindromeVerify(string) {
    for (let index in string) {
        if (string[index] != string[(string.length - 1) - index]) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(palindromeVerify('arara'));
console.log(palindromeVerify('desenvolvimento'));