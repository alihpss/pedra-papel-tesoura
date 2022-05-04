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
        

        setInterval(function () {
            let fundoCpu = document.getElementById('fundo-cpu');
            fundoCpu.style.display = 'none'

            let imagemCpu = document.getElementById('escolha-cpu')
            imagemCpu.value = NumeroAleatorio(3)
            if (imagemCpu.value == 0) {
                imagemCpu.classList.remove('pedra','tesoura')
            } else if (imagemCpu.value == 1) {
                imagemCpu.classList.remove('pedra','papel')
            } else if (imagemCpu.value == 2) {
                imagemCpu.classList.remove('papel','tesoura')
            }
            imagemCpu.setAttribute('src' , imagens[imagemCpu.value])
            imagemCpu.classList.add(classes[imagemCpu.value])
            imagemCpu.style.opacity = 0.9
        }, 100);
     
    }
});



function funcaoModal (num1 , num2) {
    let modalRegras = document.querySelector('#modal');
    modalRegras.style.opacity = num1;
    modalRegras.style.zIndex = num2;

}
function mostraRegras() {
    funcaoModal(1,2)
};

function fecharRegras (){
    funcaoModal(0,-1)
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



