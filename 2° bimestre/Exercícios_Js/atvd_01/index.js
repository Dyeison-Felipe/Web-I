const form = document.getElementById('formMaior')

form.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos

    const num1 = document.getElementById('numero1').value
    const num2 = document.getElementById('numero2').value

    if (num1 === '' || num2 === '') {
        document.querySelector('#exibir').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }



    function Resultado() {

        const convNum1 = Number(num1)
        const convNum2 = Number(num2)


        if (convNum1 > convNum2) {
            document.querySelector('#exibir').innerHTML = "O número " + convNum1 + " é maior"

        } else if (convNum1 < convNum2) {
            document.querySelector('#exibir').innerHTML = "O número " + convNum2 + " é maior"

        } else {
            document.querySelector('#exibir').innerHTML = "Os dois números são iguais"
            
        }
    }

    Resultado()

})























// const numero1 = prompt("Digite o primeiro número: ")

// const numero2 = prompt("Digite o segundo número: ")

// function QualMaior(numero1, numero2) {

//     if (numero1 > numero2) {
//         alert(numero1)
//     } else {
//         alert(numero2)
//     }

// }

// QualMaior

