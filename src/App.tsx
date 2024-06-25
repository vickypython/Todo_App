import { useEffect, useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { addTodo, deleteTodo, getTodos, updateTodo } from './Api'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {

    fetchTodos()
  }, [])
  const fetchTodos = (): void => {
    getTodos()//getting this from the api.ts
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => err)
  }
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData).then((data) => setTodos(data.todos)).catch(err => console.log(err)
)
  }
const handleUpdateTodo = (todo: ITodo) => {
updateTodo(todo).then((data)=>setTodos(data.todos)).catch(err=>console.log(err)
)
}
const handleDeleteTodo = (_id:string) => {
deleteTodo(_id).then((data)=>setTodos(data.todos)).catch(err=>console.log(err))
}
return (
  <main>
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
