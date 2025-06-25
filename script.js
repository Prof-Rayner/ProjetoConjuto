function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    // Verifica se o comprimento atual do display é menor que 18
    if (currentValue.length >= 18) {
        return; // Sai da função se o limite de 18 caracteres for atingido
    }

    // Verifica se o valor a ser adicionado é um ponto decimal
    if (value === '.') {
        // Divide a expressão em partes baseadas em operadores (+, -, *, /)
        const parts = currentValue.split(/[\+\-\*\/]/);
        const currentNumber = parts[parts.length - 1]; // Pega o último número sendo digitado

        // Se o último número já contém um ponto, não permite adicionar outro
        if (currentNumber.includes('.')) {
            return; // Sai da função sem adicionar o ponto
        }
    }

    // Adiciona o valor ao display
    display.value += value;
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
            // Garante que o resultado não exceda 18 caracteres
            const resultStr = result.toString();
            if (resultStr.length > 18) {
                document.getElementById('display').value = resultStr.substring(0, 18);
            } else {
                document.getElementById('display').value = result;
            }
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}