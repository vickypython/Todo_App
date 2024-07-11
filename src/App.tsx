import { useEffect, useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { addTodo, deleteTodo, getTodos, updateTodo } from './Api'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {
    
    const fetchTodos = (): void => {
      getTodos()//getting this from the api.ts
        .then(({ data: { todos } }) => setTodos(todos))
        .catch((err: Error) => err)
    }
    fetchTodos()
  }, [])

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData).then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error Todo not saved")
      }

      setTodos(data.todos)
    })
      .catch((err) => console.log(err))
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo).then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error!Todo not updated")
      }
      setTodos(data.todos)
    })
      .catch(err => console.log(err)
      )
  }
  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error ! Todo not deleted");

        }

        setTodos(data.todos)
      })
      .catch(err => console.log(err))
  }
  return (
    <main className='App'>
      <h1>My Todos</h1>
      <TodoForm saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}

        />
      ))}
    </main>

  )
}




export default App
