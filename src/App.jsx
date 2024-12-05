import React, {useState} from "react"


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");


  function handleAddTodo(){
    if(todo.trim() !== ""){
      const todo = document.getElementById("todo-input").value;

      setTodos(t => [...t, todo])
      setTodo("")
    }
  }

  function handleTodoChange(e){
    setTodo(e.target.value)
  }

  function handleRemoveTodo(index){
    setTodos(t => t.filter((_, i)=> i !== index))
  }

  return(
    <>
      <div className="container">
        <div className="upper-section">
          <h1>Welcome To My To-do-List App</h1>

          <div className="text-box">
            <input id="todo-input" type="text" value={todo} onChange={handleTodoChange} placeholder="Enter TO DO"/>
            <button onClick={handleAddTodo}>Add</button>
          </div>
        </div>

        <div className="bottom-section">
          <ul>
            {todos.map((todo, index)=>{
              return(
                <>
                  <div className="todos">
                    <li key={index}>{todo}</li>
                    <button onClick={()=>{
                      handleRemoveTodo(index)
                    }}>X</button>
                  </div>
                </>
              )
            })}
          </ul>
        </div>

        
      </div>
    </>
  )
}

export default App
