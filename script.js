
let operador = "";

function Operador(operacao) {
    operador = operacao
}

function Calcular() {
    let n1 = parseInt(document.getElementById('valor1').value)
    let n2 = parseInt(document.getElementById('valor2').value)
    let resultado

    if (operador == '+' ) {
        resultado = n1 + n2
    } else if (operador == '-') {
        resultado = n1 - n2
    } else if (operador == '*') {
        resultado = n1 * n2
    } else if (operador == '/') {
        resultado = n1 / n2
    } else {
        print("Resultado Indefinido")
    }
    
    let elemento = document.getElementById("saida")
    elemento.innerHTML = resultado
}

 function apagar() {
    document.getElementById("saida").innerHTML = 0;
}
