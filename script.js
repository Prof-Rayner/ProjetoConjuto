function takeValue(x) {
document.getElementById('inputwindow').value += x;
}
 
function clearInput(y) {
document.getElementById('inputwindow').value = y;
}
 
function calculateResult() {
var igual = eval(document.getElementById('inputwindow').value);
document.getElementById('inputwindow').value = igual;
}