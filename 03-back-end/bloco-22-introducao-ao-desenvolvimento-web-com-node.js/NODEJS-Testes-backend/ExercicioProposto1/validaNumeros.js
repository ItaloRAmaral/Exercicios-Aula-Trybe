function validaNumeros (num) {
  if(typeof num !== 'number') {
    return 'o valor deve ser um número';
  } else if(num > 0) {
    return 'Positivo';
  } else if(num < 0) {
    return 'Negativo';
  } else if (num === 0) {
    return 'Neutro';
  }
 
};

module.exports = validaNumeros;