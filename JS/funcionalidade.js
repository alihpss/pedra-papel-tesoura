let contador = 0
let meuScore = document.getElementById('contador');
meuScore.textContent = contador

const imagens = [
    '/images/icon-paper.svg',
    '/images/icon-scissors.svg',
    '/images/icon-rock.svg'
]

let elementos = [
    document.querySelector('#img-papel'),
    document.querySelector('#img-tesoura'),
    document.querySelector('#logo-pedra')
];

for (let i = 0; i < elementos.length; i++){
    elementos [i].value = i;
 }

let classes = [
    'papel',
    'tesoura',
    'pedra'
];



elementos.forEach(function(elementoEscolhido) {
    elementoEscolhido.onclick = function () {
        abrirTelaDuelo();
        let imagemUser = document.getElementById('escolha-user')
        imagemUser.setAttribute('src' , imagens[elementoEscolhido.value])
        imagemUser.classList.add(classes[elementoEscolhido.value])
        


        let imagemCpu = document.getElementById('escolha-cpu')
        imagemCpu.value = NumeroAleatorio(3)
        imagemCpu.setAttribute('src' , imagens[imagemCpu.value])
        imagemCpu.classList.add(classes[imagemCpu.value])

    }
});



function selecionarModal (display) {
    let modalRegras = document.querySelector('#modal');
    modalRegras.style.display = display;
}
function mostraRegras() {
    selecionarModal('block')
};

function fecharRegras (){
    selecionarModal('none')
};

function abrirTelaDuelo () {
    let telaInicial = document.getElementById('principal');
    let telaDuelo = document.getElementById('layout-desafio');
    telaInicial.style.display = 'none'
    telaDuelo.style.display = 'flex'
}

function NumeroAleatorio(max) {
    return Math.floor(Math.random() * max)
}



