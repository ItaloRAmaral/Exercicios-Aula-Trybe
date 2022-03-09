const {sum, myRemove, myFizzBuzz} = require('./exercicios.js');
/* 
1 -> A função sum(a, b) retorna a soma do parâmetro a com o b
    . Teste se o retorno de sum(4, 5) é 9
    . Teste se o retorno de sum(0, 0) é 0
    . Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
    . Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/
describe('Função Soma', () =>{
    it('Testar se soma de 4 + 5 = 9', ()=>{
        expect(sum(4,5)).toBe(9);
    });
     it('Testar se soma de 0 + 0 = 0', () => {
         expect(sum(0,0)).toBe(0);
     });
     it('testar se a funcao lança erro quando se é colocada um numero como string', () => {
         expect(()=> sum(4,'5')).toThrowError();
         expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
     });
});

/* 
2 -> A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    . Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    . Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]
    . Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/
describe('Função myRemove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1,2,4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', ()=> {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', ()=> { 
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
    })
});

/*
3 -> A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
    . Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    . Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    . Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    . Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    . Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe('Função myFizzBuzz', () =>{
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', ()=>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', ()=>{
        expect(myFizzBuzz(27)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', ()=>{
        expect(myFizzBuzz(50)).toBe('buzz');
    });
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', ()=>{
        expect(myFizzBuzz(8)).toBe(8)
    });
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('2')).toBe(false);
    })
})

/*
4 -> Para as funções encode e decode crie os seguintes testes em Jest:
    Teste se encode e decode são funções;
    .   Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, .   2, 3, 4 e 5, respectivamente;
    .   Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
    .   Teste se as demais letras / números não são convertidos para cada caso;
    .   Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

