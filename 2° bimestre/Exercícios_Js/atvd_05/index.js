const form = document.getElementById('formLetra')


let letra = ""

form.addEventListener('submit', function (evento) {
    evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos
    
    const vetorLetra= document.getElementById('letra').value 

    letra = vetorLetra

    
    if (vetorLetra === '') {
        document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
        return false
    }

    // const mostrar = exibir(letra)

    // document.querySelector('#Letra').innerHTML ='letra ' +  mostrar
    
    
})

function exibir(){

    if(letra == 'a'){
        document.querySelector('#Letra').innerHTML ='letra ' + letra
    }else if(letra == 'b'){
        document.querySelector('#Letra').innerHTML = 'letra ' + letra
    }else if ( letra == ''){
        document.querySelector('#Letra').innerHTML = ''

    }else{
        document.querySelector('#Letra').innerHTML = 'letra Z'

    }
}




