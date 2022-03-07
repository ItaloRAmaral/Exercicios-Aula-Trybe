/* Questão 1*/
function sum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

/* Questão 2 */
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

/* Questão 3 */
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}


console.log(myRemove([1, 2, 3, 4], 5))
module.exports = {sum, myRemove, myFizzBuzz};