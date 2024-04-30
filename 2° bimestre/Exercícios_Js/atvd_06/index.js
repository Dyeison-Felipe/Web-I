const form = document.getElementById('formMatriz1')
const form1 = document.getElementById('formMatriz2')
const form2 = document.getElementById('formMatriz3')

const matriz = [
    [],
    [],
    [],
]

form.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos

    const vetorMat1 = document.getElementById('numMatriz1').value

    const vetor1 = Number(vetorMat1)

    matriz[0].push(vetor1)


    document.getElementById('numMatriz1').value = ''

    document.querySelector('#Linha1').innerHTML = "Linha 1: " +matriz[0]




    if (vetorMat1 === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }

})

form1.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos

    const vetorMat2 = document.getElementById('numMatriz2').value

    const vetor2 = Number(vetorMat2)

    matriz[1].push(vetor2)


    document.getElementById('numMatriz2').value = ''

    document.querySelector('#Linha2').innerHTML = "Linha 2: " +matriz[1]





    if (vetorMat2 === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }


})

form2.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos

    const vetorMat3 = document.getElementById('numMatriz3').value

    const vetor3 = Number(vetorMat3)

    matriz[2].push(vetor3)


    document.getElementById('numMatriz3').value = ''

    document.querySelector('#Linha3').innerHTML = "Linha 3: " +matriz[2]





    if (vetorMat3 === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }

    console.log(matriz)


})


function Resultado() {


    const initialValue = 0;
    const mat1 = matriz[0].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    const mat2 = matriz[1].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    const mat3 = matriz[2].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    const result = mat1 + mat2 + mat3

    document.querySelector('#l1').innerHTML = "|" + matriz[0] + "|"
    document.querySelector('#l2').innerHTML = "|" + matriz[1] + "|"
    document.querySelector('#l3').innerHTML = "|" + matriz[2] + "|"


    document.querySelector('#resultado').innerHTML = 'O resultado é da soma é : ' + result 

}









