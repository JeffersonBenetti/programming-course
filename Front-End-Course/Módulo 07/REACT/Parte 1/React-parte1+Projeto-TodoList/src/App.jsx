import { v4 as uuid } from 'uuid';
import { CgTrash, CgCheck } from "react-icons/cg";

import React, { useState } from 'react';

import { Container, TodoList, Input, Button, ListItem } from './styles.js'

function App() {

  // Aula 12 - Map.
  // const list = ["Esquentar comida", "Terminar o módulo React parte 1"]

  // Aula 13 - Key e 14 - Bibliotéca "uuid".
  const [list, setList] = useState([{ id: uuid(), task: 'Tarefa', finished: true }])
  const [task, setTask] = useState('')

  // Aula 11 - Eventos.
  function inputMudou(event) {
    setTask(event.target.value)
  }

  // Aula 11 - Eventos.
  function cliqueiNoBotão() {
    // Nota que quando a CHAVE tem o mesmo nome do VALOR, não precisa colocar os dois(Aulas 15, 16 e 17).
    // Usamos o spread operator para sempre estar add o item existente ao novo array(Aula 18).
    setList([...list, { id: uuid(), task, finished: false }])
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
            // Aula 12 - Map.
            list.map(item => (
              // Props - Variavél passando um valor para quem receber.
              <ListItem key={item.id} $isFinished={item.finished}>
                <CgCheck onClick={() => concluirTarefa(item.id)} />
                <li>{item.task}</li>
                <CgTrash onClick={() => deletarTarefa(item.id)} />
              </ListItem>
            ))
          }
        </ul>
      </TodoList>
    </Container>
  )
}

export default App
