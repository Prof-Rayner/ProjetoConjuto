function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function clean (){
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