/// 1- Acesse o elemento elementoOndeVoceEsta.
const ondeEstou = document.getElementById('elementoOndeVoceEsta');

/// 2 - Acesse pai a partir deet elementoOndeVoceEsta e adicione uma color a ele.
const pai = ondeEstou.parentElement
pai.style.color = "red";

/// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso ?
const primeiroFilhoDoFilho = ondeEstou.firstElementChild
primeiroFilhoDoFilho.innerText = "Oi Tudo Bem?";

/// 4 - Acesse o primeiroFilho a partir de pai.
const primeiroFilho = document.getElementById('pai');
primeiroFilho.firstElementChild;

/// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
ondeEstou.previousElementSibling;

/// 6 - Agora acesse o texto Atenção!a partir de elementoOndeVoceEsta.
ondeEstou.nextSibling;

/// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
ondeEstou.nextElementSibling;

/// 8 - Agora acesse o terceiroFilho a partir de pai.
pai.lastElementChild.previousElementSibling;

/// 9 - Crie um irmão para elementoOndeVoceEsta.
/// 10 - Crie um filho para elementoOndeVoceEsta.
/// 11 - Crie um filho para primeiroFilhoDoFilho.
/// 12 - A partir desse filho criado, acesse terceiroFilho.

