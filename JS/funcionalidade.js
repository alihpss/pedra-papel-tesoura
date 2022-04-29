
let contador = 0
let meuScore = document.getElementById('contador');
meuScore.textContent = contador




function mostraRegras() {
    selecionarModal('block')
    console.log(NumeroAleatorio(3));
};

function fecharRegras (){
    selecionarModal('none')
};

function selecionarModal (display) {
    let modalRegras = document.querySelector('#modal');
    modalRegras.style.display = display;
}

function NumeroAleatorio(max) {
    return Math.floor(Math.random() * max + 1)
}

let elementoEscolhido = document.querySelector('#img-papel');
elementoEscolhido.onclick = function () {
    console.log(elementoEscolhido);
}


