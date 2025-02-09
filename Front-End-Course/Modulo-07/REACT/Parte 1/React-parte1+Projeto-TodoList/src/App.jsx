import { v4 as uuid } from 'uuid';

import React, { useState } from 'react';

import { Container, TodoList, Input, Button, ListItem, Trash, Check, H3 } from './styles.js'

function App() {

  // Aula 12 - Map.
  // const list = ["Esquentar comida", "Terminar o módulo React parte 1"]

  // Aula 13 - Key e 14 - Bibliotéca "uuid".
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  // Aula 11 - Eventos.
  function inputMudou(event) {
    setTask(event.target.value)
  }

  // Aula 11 - Eventos.
  function cliqueiNoBotão() {
    if (task) {
      // Nota que quando a CHAVE tem o mesmo nome do VALOR, não precisa colocar os dois(Aulas 15, 16 e 17).
      // Usamos o spread operator para sempre estar add o item existente ao novo array(Aula 18).
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }

  function concluirTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer.." />
        <Button onClick={cliqueiNoBotão}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              // Aula 12 - Map.
              list.map(item => (
                // Props - Variavél passando um valor para quem receber.
                <ListItem key={item.id} $isFinished={item.finished}>
                  <Check onClick={() => concluirTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <H3>Não há tarefas</H3>
            )
          }
        </ul>
      </TodoList>
    </Container>
  )
}

export default App
