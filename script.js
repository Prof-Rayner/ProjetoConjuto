function insertToDisplay(data) {
    const display = document.querySelector('#display');
    const currentValue = display.value;
 
    if (data === '.') {
        // Verifica se o último número já contém um ponto
        const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) {
            return; // Não insere outro ponto
        }
    }
 
    display.value += data;
}
function clean(){ 
    document.querySelector('#display').value = ''
}

function resultado(){
    const display = document.querySelector('#display')
    try{
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}