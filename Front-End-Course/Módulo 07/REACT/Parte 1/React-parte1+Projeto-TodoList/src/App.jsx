import { v4 as uuid } from 'uuid';

function App() {

  // Aula 12 - Map.
  // const list = ["Esquentar comida", "Terminar o módulo React parte 1"]
  
  // Aula 13 - Key e 14 - Bibliotéca "uuid".
  const list = [
    {id: uuid(), task: 'Terminar o módulo React parte 1'},
    {id: uuid(), task: 'Esquentar comida'}
  ]

  // Aula 11 - Eventos.
  function inputMudou(event){
    console.log(event.target.value)
  }

  // Aula 11 - Eventos.
  function cliqueiNoBotão(){
    console.log('Botão clicado')
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenho para fazer.." />
      <button onClick={cliqueiNoBotão}>Adicionar</button>

      <ul>
        {
          // Aula 12 - Map.
          list.map( item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
