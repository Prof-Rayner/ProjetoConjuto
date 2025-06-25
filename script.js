const tela = document.getElementById('inputwindow');

function teclaPressionada(x) {
    tela.value += x;
}
 
function clearInput() {
    tela.value = "";
}
 
function calculateResult() {
    var igual = eval(tela.value);
    tela.value = igual;
}