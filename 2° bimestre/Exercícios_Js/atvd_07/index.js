const form = document.getElementById('formFatorial');

form.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos
    
    const numero = Number(document.getElementById('numero').value); // Convertendo o valor para um número inteiro

    
    if (numero === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }
    
    const resultadoFatorial = fatorial(numero);
    document.querySelector('#resultado').innerHTML = `O fatorial de ${numero} é ${resultadoFatorial}`;
});

function fatorial(numero){
    let fatorial = 1;
    for(let i = 1; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}
