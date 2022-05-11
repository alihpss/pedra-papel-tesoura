let telaInicial = document.getElementById('principal');
let telaDuelo = document.getElementById('layout-desafio');

let contador = 0;

let meuScore = document.getElementById('contador');

const imagens = [
    'images/icon-paper.svg',
    'images/icon-scissors.svg',
    'images/icon-rock.svg'
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

        imagemUser.classList.remove('papel', 'pedra', 'tesoura')
        imagemUser.classList.add(classes[elementoEscolhido.value])
        
        let imagemCpu = document.getElementById('escolha-cpu');
        imagemCpu.style.opacity = 0.9

        imagemCpu.classList.remove('vitoria')
        imagemUser.classList.remove('vitoria')

        let divResultado = document.querySelector('#resultado');
        divResultado.style.display = 'none';
        divResultado.style.opacity = 0;
        let textoResultado = divResultado.querySelector('.texto-resultado')

        let movimentoAleatorio = setInterval(function () {
            let fundoCpu = document.getElementById('fundo-cpu');
            fundoCpu.style.display = 'none'

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

        }, 100);



        setTimeout(function() {
            clearInterval(movimentoAleatorio);
            divResultado.style.display = 'flex';

            if (elementoEscolhido.value == imagemCpu.value) {
                textoResultado.textContent = 'empate'

            } else if (resultado(elementoEscolhido, imagemCpu)) {
                textoResultado.textContent = 'vitória'
                imagemUser.classList.add('vitoria')
                contador++

            } else if (!resultado(elementoEscolhido, imagemCpu)) {
                textoResultado.textContent = 'derrota'
                imagemCpu.classList.add('vitoria')
                contador--
            }

            meuScore.innerHTML = contador
            
        }, 2000);

        setTimeout(function() {
            divResultado.style.opacity = 0.9;
        }, 3000);

        
     
    }
});

function resultado (elementoEscolhido, imagemCpu) {
    if (elementoEscolhido.value == 0 && imagemCpu.value == 2 || elementoEscolhido.value == 1 && imagemCpu.value == 0 || elementoEscolhido.value == 2 && imagemCpu.value == 1) {
        return true

    } else if (elementoEscolhido.value == 0 && imagemCpu.value == 1 || elementoEscolhido.value == 1 && imagemCpu.value == 2 || elementoEscolhido.value == 2 && imagemCpu.value == 0){
        return false
    }
}

function abrirTelaDuelo () {
    telaInicial.style.display = 'none'
    telaDuelo.style.display = 'flex'
}

function NumeroAleatorio(max) {
    return Math.floor(Math.random() * max)
}

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

function jogarNovamente () {
    telaInicial.style.display = 'block'
    telaDuelo.style.display = 'none'
}



