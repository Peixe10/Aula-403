/*
------------- Pegando o primeiro elemento com a class "casa" e imprimindo nele a letra "x" --------------------
const casinha = document.querySelector(".casa");
casinha.innerHTML="x" 
*/

const tabuleiro = document.querySelectorAll(".casa");
let contador = 0;


//onde esta tabuleiro le-se casinhas também.
// casinhas.addEventListener("click",clicar);

for(casa in tabuleiro){
    tabuleiro[casa].onclick = clicar; //O clique no elemento casa dentro de casinhas dispara a function clicar
}

// Assim também daria certo
// for(casa of casinhas){
//     casa.addEventListener("click",clique)
// }
// casinhas[0];

function clicar(){
    contador++ //Para começar com o 1 que será o X
    
    if(contador % 2){
        this.innerHTML = "X"
    }
    else{
        this.innerHTML = "O"
    }
    this.onclick=null; //Para que quando clicar novamente ele não mude as letras.
    //Não entendi do motivo desse this.removeEventListener(click,clicar)
    this.removeEventListener("click",clicar);

    if (contador>=5){
        verificar();
    }
}

function comparar(casa1,casa2,casa3){
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML == casa3.innerHTML && casa1.innerHTML != ""){
        
        return true
//Se retornar TRUE é por que alguém ganhou
    }
    return false;
}

function verificar(){
    if(comparar(tabuleiro[0], tabuleiro[1],tabuleiro[2]) || comparar(tabuleiro[3], tabuleiro[4],tabuleiro[5]) ||
    comparar(tabuleiro[6], tabuleiro[7],tabuleiro[8]) ||
    comparar(tabuleiro[0], tabuleiro[3],tabuleiro[6]) ||
    comparar(tabuleiro[1], tabuleiro[4],tabuleiro[7]) ||
    comparar(tabuleiro[2], tabuleiro[5],tabuleiro[8]) ||
    comparar(tabuleiro[0], tabuleiro[4],tabuleiro[8]) ||
    comparar(tabuleiro[2], tabuleiro[4],tabuleiro[6])){

        alert("Venceu!");
        tabuleiro[0].onclick=null;
        tabuleiro[1].onclick=null;
        tabuleiro[2].onclick=null;
        tabuleiro[3].onclick=null;
        tabuleiro[4].onclick=null;
        tabuleiro[5].onclick=null;
        tabuleiro[6].onclick=null;
        tabuleiro[7].onclick=null;
    }
}