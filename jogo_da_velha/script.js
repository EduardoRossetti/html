var jogador = ""; // X e O
var pontuacao = []; // objeto que controlará a pontuação de cada jogador

function iniciarJogo() {
    jogador = "X";
    document.querySelector("#jogadorDoTurno").textContent = jogador;

    //limpar o quadro
    pontuacao = [   ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ];
    
    let quadros = document.querySelectorAll(".quadro");

    for (let quad of quadros){
        quad.textContent="";
        // para associar uma função JS no evento click de cada quadro
        quad.addEventListener("click", marcarQuadro);
    }
}

function marcarQuadro() {

    // o this representa o elemento que chamou a função
   if (this.textContent=="") {
    
        this.textContent = jogador;
        let linha = this.dataset.linha - 1;
        let coluna = this.dataset.coluna - 1;
        pontuacao[linha][coluna] = jogador;
        // Nesta função o programa irá atribuir a pontuação e verificar se o jogador
        conferirResultado();
        trocarJogador();
        document.querySelector("#jogadorDoTurno").textContent = jogador;
    }
}

function trocarJogador(){
    if (jogador=="X")
        jogador = "O"
    else jogador = "X";    
}

function conferirResultado() {

    var possuiGanhador = false;

    //linhas
    for(let i = 0; i < 3; i++) {
        if(pontuacao[i][0] != '' && pontuacao[i][1] != '' && pontuacao[i][2] != '')
            if(pontuacao[i][0] == pontuacao[i][1] && pontuacao[i][0] == pontuacao[i][2]) 
                possuiGanhador = true;          
    }

    //colunas
    for(let j = 0; j < 3; j++) {
        if(pontuacao[0][j] != '' && pontuacao[1][j] != '' && pontuacao[2][j] != '')
            if(pontuacao[0][j] == pontuacao[1][j] && pontuacao[0][j]  == pontuacao[2][j]) 
                possuiGanhador = true;     
    }

    //diagonais  
    if(pontuacao[0][0] != '' && pontuacao[1][1] != '' && pontuacao[2][2] != '')
        if(pontuacao[0][0] == pontuacao[1][1] && pontuacao[0][0] == pontuacao[2][2]) 
            possuiGanhador = true;
    
    if(pontuacao[2][0] != '' && pontuacao[1][1] != '' && pontuacao[0][2] != '')
        if(pontuacao[2][0] == pontuacao[1][1] && pontuacao[2][0] == pontuacao[0][2]) 
            possuiGanhador = true;
    

    if(possuiGanhador) {
        //finaliza o jogo
        alert("Jogador "+jogador+" venceu!!");
        removerEventosDosQuadros();
    }
}

function removerEventosDosQuadros(){
    let quadros = document.querySelectorAll(".quadro");
    for (let quad of quadros){
        // para associar uma função JS no evento click de cada quadro
        quad.removeEventListener("click", marcarQuadro);
    }
}

// Como o main - para iniciar  jogo 
document.querySelector("#reiniciar").addEventListener("click", iniciarJogo);
iniciarJogo();