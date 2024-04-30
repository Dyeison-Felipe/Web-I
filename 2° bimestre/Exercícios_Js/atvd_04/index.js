const form = document.getElementById('formVetor')

const vetorVar = []


form.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos
    
    const vetorNum = document.getElementById('numero').value 

    vetorVar.push(Number(vetorNum))


    if (vetorNum === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }

    document.querySelector('#resultado').innerHTML = "O vetor é " + vetorVar

    document.getElementById('numero').value = ''

})


function resultado(){

    vetorVar.sort()

    document.querySelector('#maiorNum').innerHTML = "e seu maior número é " + vetorVar.at(-1)
    console.log(vetorVar)
}


