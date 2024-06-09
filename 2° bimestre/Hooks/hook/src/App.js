import React, {useState, useEffect, useMemo} from 'react';

function App(){
  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState("")
  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  },[tarefas])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  },[])


  function adicionarTarefas(){
    if(input !== "" && typeof input === 'string'){

      setTarefas([...tarefas,input])
    }else{
      document.querySelector('#erro').innerHTML = "Digite um texto"
    }

    setInput("")
  }
  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <strong>Você tem {totalTarefas} tarefas: </strong>
      <br/>

      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={adicionarTarefas}>Adicionar</button>
      <p id='erro'></p>
    </div>
  )
}

export default App