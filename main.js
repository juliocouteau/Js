document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    
    if (campoB > campoA) {
        showMessage('Formulário válido!', 'valid');
    } else {
        showMessage('Formulário inválido! O número B deve ser maior que o número A.', 'invalid');
    }
});
function showMessage(message, className) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = 'message ' + className;
}