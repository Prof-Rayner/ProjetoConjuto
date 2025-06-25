const saida = document.getElementById('saida');

let primeiroNumero = '';
let segundoNumero = '';
let operadorAtual = '';
let resultadoCalculado = false;

function numeros(num) {
    if (resultadoCalculado) {
        saida.textContent = '';
        primeiroNumero = '';
        segundoNumero = '';
        operadorAtual = '';
        resultadoCalculado = false;
    }

    if (operadorAtual === '') {
        primeiroNumero += num;
        saida.textContent = primeiroNumero;
    } else {
        segundoNumero += num;
        saida.textContent = segundoNumero;
    }
}

function Operador(op) {
    if (primeiroNumero === '' && saida.textContent === '') return;

    if (segundoNumero !== '' && operadorAtual !== '') {
        Calcular();
        primeiroNumero = saida.textContent;
        segundoNumero = '';
    } else if (primeiroNumero === '' && saida.textContent !== '') {
        primeiroNumero = saida.textContent;
    }
    
    operadorAtual = op;
    resultadoCalculado = false;
}

function apagar() {
    saida.textContent = '';
    primeiroNumero = '';
    segundoNumero = '';
    operadorAtual = '';
    resultadoCalculado = false;
}

function Calcular() {
    if (primeiroNumero === '' || segundoNumero === '' || operadorAtual === '') {
        saida.textContent = 'Erro'; 
        primeiroNumero = ''; 
        segundoNumero = '';
        operadorAtual = '';
        resultadoCalculado = true;
        return;
    }

    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);
    let resultado;

    switch (operadorAtual) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                saida.textContent = 'Divisão por Zero';
                primeiroNumero = '';
                segundoNumero = '';
                operadorAtual = '';
                resultadoCalculado = true;
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            saida.textContent = 'Erro';
            return;
    }

    saida.textContent = resultado;
    primeiroNumero = resultado.toString();
    segundoNumero = '';
    operadorAtual = '';
    resultadoCalculado = true;
}