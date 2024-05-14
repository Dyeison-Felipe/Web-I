const form = document.getElementById('formNota')

form.addEventListener('submit', function (evento) {
  evento.preventDefault() // impede o envio do formulario sem que todos os campos sejam preenchidos

  const nota1 = document.getElementById('nota').value

  if (nota1 === '') {
    document.querySelector('#resultado').innerHTML = "Todos os campos precisam ser preenchidos"
    return false
  }


  function resultadoNota() {

    const convNota = Number(nota1)

    if (convNota < 6 && convNota > 0) {
      document.querySelector('#resultado').innerHTML = "Aluno REPROVADO"
    } else if (convNota > 6 && convNota < 8) {
      document.querySelector('#resultado').innerHTML = "Aluno APROVADO"
    } else if (convNota >= 8) {
      document.querySelector('#resultado').innerHTML = "Aluno APROVADO COM LOUVOR"
    }
  }

  resultadoNota()

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

