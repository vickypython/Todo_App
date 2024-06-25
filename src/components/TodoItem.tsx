//This components will render the Todos to the UI//display
import React from 'react'

type Props = TodoProps &{
updateTodo:(todo:ITodo)=>void
deleteTodo:(_id:string)=>void

}

const AddTodo :React.FC<Props>= ({todo,updateTodo,deleteTodo}) => {
  //condition to check if todo status if true style line thru
  const checkTodo:string=todo.status ? 'line-through':""
    return (
    <div className='Card'>
<div className="Card--text">
    <h1 className={checkTodo}>{todo.name}</h1>
    <span className={checkTodo}>{todo.description}</span>
</div>
<div className="Card-button">
<button onClick={()=>updateTodo(todo)}
    className={todo.status ? 'hide-button' :'Card-button_done'}>
    complete
</button>
<button onClick={()=>deleteTodo(todo._id)}
    className='Card-button_delete'>
    Delete
</button>

</div>

    </div>
  )
}
export default AddTodo