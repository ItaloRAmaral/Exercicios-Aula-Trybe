/// 1 - Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'
pai.appendChild(irmaoElementoOndeVoceEsta);

/// 2 - Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

/// 3 - Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilho = document.createElement('section');
filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho);

/// 4 - A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = filhoDoPrimeiroFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);























