/// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM.Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags < script > e < /script> . Para uma melhor organização, faça commits a cada tarefa concluída.Vamos aos exercícios:

/// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body.

let body = document.getElementsByTagName('body');
let text = document.createElement('h1');
text.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(text);

/// 2 - Adicione a tag main com a classe main-content como filho da tag body ;

let elementMain = document.createElement('main');
elementMain.className = "main-content"
document.body.appendChild(elementMain);

/// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let section = document.createElement('section');
section.className = "center-content";
elementMain.appendChild(section);

/// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph = document.createElement('p');
paragraph.innerText = "EU TO ERRANDO TUDOOOOO DE ESCRITAAAAA!!!!!"
section.appendChild(paragraph);

/// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionDois = document.createElement('section');
sectionDois.className = "left-content";
elementMain.appendChild(sectionDois);

/// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionTres = document.createElement('section');
sectionTres.className = "right-content";
elementMain.appendChild(sectionTres);

/// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');
image.src = "https://picsum.photos/200";
image.className = "small-image";
sectionDois.appendChild(image);

/// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let lista = document.createElement('ul');
sectionTres.appendChild(lista);
let arrayNumbers = ["Um", "Dois", "Tres", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];

for (let i in arrayNumbers) {
    let elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[i];
    lista.appendChild(elementLi);
}

/// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 0; i < 3; i += 1) {
    let tagsh3 = document.createElement('h3');
    tagsh3.innerHTML = "Aplicando h3" +' ' + i;
    elementMain.appendChild(tagsh3);
}



