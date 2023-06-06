import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const [todos, setTodos] = useState([]);

  const newTdodo = {
    id: new Date().getTime().toString(),
    title: title,
    description: description,
  };


  const addTodo = () => {
   setTodos([...todos,newTdodo])
    setTitle("")
    setDescription("")
  };

  console.log(todos);

  const deleteTodo = (id)=>{
    const filter = todos.filter((todo)=>todo.id!==id)
    setTodos(filter)
  }
  return (
    <>
    <div>
      <label>Enter Title</label>
      <br />
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Enter Description</label>
      <br />
      <br />
      <textarea
        type="text"
        value={description}
        onChange={(e) =>setDescription(e.target.value)}
        required
      ></textarea>
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>

    <div>
      { todos.map((todo)=>{
        return(
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
        )
      }
      )}
    </div>
    </>
  );
}

export default App;
