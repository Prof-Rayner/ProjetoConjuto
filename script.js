function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const expression = document.getElementById('display').value;
        // Verificar se há divisão por zero
        if (expression.includes('/0') && !expression.includes('/0.')) {
            document.getElementById('display').value = 'Erro: Divisão por zero';
            return;
        }
        const result = eval(expression);
        // Verificar se o resultado é válido
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            document.getElementById('display').value = 'Erro';
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}