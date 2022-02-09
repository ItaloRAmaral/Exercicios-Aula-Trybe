/*
Aqui você vai modificar os elementos já existentes utilizando apenas as 
funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
 -> Crie uma função que mude o texto na tag <p> para uma descrição de como 
você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim 
realizando o 
exercício)
 -> Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe
(rgb(76,164,109)).
 -> Crie uma função que mude a cor do quadrado vermelho para branco.
 -> Crie uma função que corrija o texto da tag <h1>.
 -> Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 -> Crie uma função que exiba o conteúdo de todas as tags <p> no console. */

 function daquiDoisAnos (texto) {
     document.getElementsByTagName("p")[1].innerText = texto;
 }

 daquiDoisAnos ("Eu me vejo morando fora do pais.")

 function mudarCorQuadrado () {
     document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76, 164, 109)";
 }

 mudarCorQuadrado();

 function quadradoVermelho () {
     document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
 }

 quadradoVermelho();

function corrigirTexto (texto) {
    document.getElementsByClassName("title")[0].innerText = texto;
}

corrigirTexto ("Exercício 5.1 - JavaScript")

function textoMaisculo () {
    for (let i = 0; i < 3; i+= 1){
    document.getElementsByTagName("p")[i].style.textTransform = "uppercase";
    }
}

textoMaisculo ();

function exibirTodosP () {
    for (let i = 0; i < 3; i++) {
      let exibir = document.getElementsByTagName("p")[i];
        console.log(exibir)
    }
}

exibirTodosP ();