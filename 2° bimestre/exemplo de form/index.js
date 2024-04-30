const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === '' || email === '' || senha === '') {
        alert('Preencha todos os campos');
        return false;
    }

    // código para enviar os dados para o servidor
});



const form = document.getElementById('Calcular');

form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o envio do formulário

    const numero = document.getElementById('Numero').value;

    
    if (numero === '') {

        alert('digite algo');

    }
    const convertido = Number(numero);

    function result(){
        const resultado = convertido * 2;
        return resultado
    }

    // const resultado = convertido * 2;

    alert(" o resultado é: " + result());
    
});

let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "!");