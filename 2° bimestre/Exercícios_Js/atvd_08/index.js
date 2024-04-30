const form = document.getElementById('formOp')


form.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos
    
    const vetorOpcao= document.getElementById('opcao').value 

    
    if (vetorOpcao === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }


    if(vetorOpcao === '1' || vetorOpcao === '2' || vetorOpcao === '3'){
        document.querySelector('#resultado').innerHTML = "Opção " + vetorOpcao + " escolhida"
    }else{
        document.querySelector('#resultado').innerHTML = "Opção inválida"
    }
    
    
})





