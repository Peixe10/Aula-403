/*
------------- Pegando o primeiro elemento com a class "casa" e imprimindo nele a letra "x" --------------------
const casinha = document.querySelector(".casa");
casinha.innerHTML="x" 
*/

const casinhas = document.querySelectorAll(".casa");

for(casa of casinhas){
    casa.addEventListener("click",clique)
}
casinhas[0];

function clique(){
    console.log("CLIQUE")
}