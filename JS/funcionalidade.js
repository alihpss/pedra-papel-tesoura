let contador = 0
let meuScore = document.getElementById('contador');
meuScore.textContent = contador

const imagens = [
    '/images/icon-paper.svg',
    '/images/icon-scissors.svg',
    '/images/icon-rock.svg'
]

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
    return Math.floor(Math.random() * max + 1)
}

let elementos = [
    document.querySelector('#img-papel'),
    document.querySelector('#img-tesoura'),
    document.querySelector('#logo-pedra')
];

for (let i = 0; i < elementos.length; i++){
   elementos [i].value = i;
}

//for (let i = 0; i < elementos.length; i++) {
//    let elemento = elementos [i]
//    let imagemUser = imagens[i]

//    elemento.setAttribute('src', imagemUser)


//}


elementos.forEach(function(elementoEscolhido) {
    elementoEscolhido.onclick = function () {
        abrirTelaDuelo();
        let imagemUser = document.getElementById('escolha-user')
        imagemUser.setAttribute('src' , imagens[elementoEscolhido.value])

        


        //elementoEscolhido.setAttribute('src', imagemUser)
    
        //console.log(elementoEscolhido);
    }
});



