import { useState } from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  const [todo, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState('')

  function updateTodo() {
    setTodo([...todo, newTodo])
    setNewTodo('')
  }

  function deleteTodo(listTodo) {
    setTodo(todo.filter((item) => item !== listTodo))
  }


  return (
    <>
      <div className='m-3'>
        <input
          type="text"
          placeholder="Add a todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="primary" className="ms-3" onClick={updateTodo} >
          Add
        </Button>
      </div>
      <div>
        {todo.map((todos, index) => {
          return (
            <ul>
              <li key={index}>
                {todos}
                <Button key={index} variant="danger" className="ms-2" onClick={() => deleteTodo(todos)}>Delete</Button>
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}