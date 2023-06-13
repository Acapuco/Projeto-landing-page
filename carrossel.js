var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var SetaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Bruna.style ="display:none"
    Samantha.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    Bruna.style ="display:flex"
    Samantha.style ="display:none"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none"
}