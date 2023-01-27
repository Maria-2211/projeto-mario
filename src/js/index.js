const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharmodal = document.querySelector(".fechar-modal");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", linkDoVideo);
} );

botaoFecharmodal.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
});

