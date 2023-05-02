/*

    OBJETIVO 1 - QUANDO O USUARIO ABRIR O BOTAO DE "VEJA O TRAILER", DEVEMOS ABRIR A MODAL DO TRAILER


    passo 1 - dar um jeito de pegar o elemento q representa o botao na tela usando js
    passo 2 - dar um jeito de identificar quando o usuario clicar no botao
    passo 3 - dar um jeito de pegar  o elemento da modal no js
    passo 4 - abrir a modal na tela

    OBJETIVO 2 - QUANDO O USUARIO APERTAR NO "X", ELE CONSEGUIR FECHAR A MODAL
    
    passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    passo 2 - dar um jeito de identificar quando o usuario clicar no X
    passo 3 - fechar a modal
*/

//variaveis
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const fecharModal = document.querySelector(".fechar-modal");

function alternarModal (){
    modal.classList.toggle("aberto");
}
//passo 1 - dar um jeito de pegar o elemento q representa o botao na tela usando js


//passo 2 - dar um jeito de identificar quando o usuario clicar no botao
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
   alternarModal();
   video.setAttribute("src",linkDoVideo);
});

//passo 3 - dar um jeito de pegar  o elemento da modal no js


//OBJETIVO 2 - QUANDO O USUARIO APERTAR NO "X", ELE CONSEGUIR FECHAR A MODAL
//passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js


//passo 2 - dar um jeito de identificar quando o usuario clicar no X
fecharModal.addEventListener("click", () => {
    //passo 3 - fechar a modal
    alternarModal();
    video.setAttribute("src", "");
});

    