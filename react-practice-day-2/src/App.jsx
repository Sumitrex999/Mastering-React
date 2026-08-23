import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([
        {id:1, title:"Learn React"},
        {id:2, title:"Learn JavaScript"},
    ]);
    const addItem = ()=>{
        setTodos([
            ...todos,
            {id:3, title:"Learn MERN"}
        ]);
    }
    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=>(todo.id !== id)));
    }
  return (
    <div>
      <h1>TODO LIST:</h1>
      <input type="text" placeholder="Enter the Todo Item" />
      <button onClick={addItem}>Add</button>
      {todos.map((todo)=>(
        <div key={todo.id}>
            <p>{todo.title} </p>
            <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
        </div>
      ))}

    </div>
  )
}

export default App
