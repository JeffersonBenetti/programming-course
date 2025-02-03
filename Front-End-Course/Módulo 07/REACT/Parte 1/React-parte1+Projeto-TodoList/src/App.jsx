
function App() {

  function inputMudou(event){
    console.log(event.target.value)
  }

  function cliqueiNoBotão(){
    console.log('Botão clicado')
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenho para fazer.." />
      <button onClick={cliqueiNoBotão}>Adicionar</button>

      <ul>
        <li>Levar o nico para passear</li>
        <li>Comprar pão</li>
        <li>Terminar parte 1 do React</li>
      </ul>
    </div>
  )
}

export default App
