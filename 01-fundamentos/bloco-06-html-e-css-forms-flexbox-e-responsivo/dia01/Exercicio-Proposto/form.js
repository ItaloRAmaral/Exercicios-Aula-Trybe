const botaoEnviar = document.querySelector('#botaoEnviar')
const botaoApagar = document.querySelector('#botaoApagar')
const input = document.getElementsByTagName('input');

botaoEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
});

botaoApagar.addEventListener('click', ()=>{
    for (let i = 0; i < input.length; i += 1){
        input[i].innerHTML = '';
    }
});

