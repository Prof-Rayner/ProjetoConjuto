const resultado = document.getElementById('resultado');

function add(num) {
    if (resultado.innerHTML === "0") {
        resultado.innerHTML = num;
    } else {
        resultado.innerHTML += num;
    }
}

function calcular() {
    try {
        const expressao = resultado.innerHTML;
        let partes, operador, num1, num2;

        if (expressao.includes("+")) {
            partes = expressao.split("+");
            operador = "+";
        } else if (expressao.includes("-")) {
            partes = expressao.split("-");
            operador = "-";
        } else if (expressao.includes("/")) {
            partes = expressao.split("/");
            operador = "/";
        } else {
            resultado.innerHTML = "Erro: Operador inválido";
            return;
        }

        if (partes.length !== 2) {
            resultado.innerHTML = "Erro: Formato inválido";
            return;
        }

        num1 = parseFloat(partes[0].trim());
        num2 = parseFloat(partes[1].trim());

        if (isNaN(num1) || isNaN(num2)) {
            resultado.innerHTML = "Erro: Números inválidos";
            return;
        }

        let resultadoCalculo;
        switch (operador) {
            case "+":
                resultadoCalculo = somar(num1, num2);
                break;
            case "-":
                resultadoCalculo = subtrair(num1, num2);
                break;
            case "/":
                if (num2 === 0) {
                    resultado.innerHTML = "Erro: Divisão por zero";
                    return;
                }
                resultadoCalculo = dividir(num1, num2);
                break;
        }

        resultado.innerHTML = Number(resultadoCalculo.toFixed(6));
    } catch (error) {
        resultado.innerHTML = "Erro";
    }
}

function limpar() {
    resultado.innerHTML = "0";
}

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}