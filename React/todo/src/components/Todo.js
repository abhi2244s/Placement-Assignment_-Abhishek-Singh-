import React from 'react'

const Todo = ({todo,addTodo , deleteTodo}) => {
  return (
    <div>
        <h3>{todo.title}</h3>   
        <p>{todo.description}</p>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo