import React, { useState } from 'react'

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void
}

const TodoForm: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()
  //event handler for form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFormData({
      ...formData, [e.currentTarget.id]: e.currentTarget.value
    })

  }



  return (
    <form onSubmit={(e) => saveTodo(e, formData)}>
      <div className='form-div'>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type='text' name="description" id="desc" onChange={handleChange}></input>
        </div>
        <button className='btn' disabled={formData === undefined ? true : false}>Add Todo</button>
      </div>


    </form>
  )
}
export default TodoForm
