import React, { useState } from 'react'

type Props = {
    saveTodo:(formData: ITodo)=>void
}

const TodoForm :React.FC<Props>= ({saveTodo}) => {
    const [formData,setFormData]=useState<ITodo | object >({})
//event handler for form change
const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
const {name,value}=e.target
setFormData(prevState=>({
  ...prevState,[name]:value
}))

}

const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
return  formData

}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">description:</label>
       <textarea name="description" id="desc" placeholder='description' onChange={handleChange}></textarea>
      </div>
      <button type="submit">Add Todo</button>
      s
    </form>
  )
}
export default TodoForm
