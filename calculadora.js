function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    try {
        let calculo = eval(resultado);
        if (!isFinite(calculo)) {
            document.getElementById('resultado').innerHTML = "Erro: Divisão por zero";
        } else {
            document.getElementById('resultado').innerHTML = calculo;
        }
    } catch (e) {
        document.getElementById('resultado').innerHTML = "Erro na expressão";
    }
}