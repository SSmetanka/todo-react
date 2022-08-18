import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  const addTask = (useInput) => {
    if (useInput.trim()){
      const newToDo = {
        id: uuidv4(),
        task: useInput,
        isFlag: false,
        isComplete: false,
      }
      localStorage.setItem("todos", JSON.stringify([...todos, newToDo]))
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  const deleteTask = (id) => {
    let data = JSON.parse(localStorage.getItem("todos")).filter((todo) => todo.id !== id)
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }

  const changeStatus = (id) => {
    let data = JSON.parse(localStorage.getItem("todos")).map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
    )
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }

  const changeFlag = (id) => {
    let data = JSON.parse(localStorage.getItem("todos")).map((todo) =>
      todo.id === id ? { ...todo, isFlag: !todo.isFlag } : { ...todo }
    )
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }

  return (
    <div className="App">
      <img
        src="images/todo.png"
        alt="todo"
        className="todoImg"
      />
      <header>
        <h1>TODO</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      { !todos.length ?
        <div className="zeroTodo">
          Add your first todo
        </div>
        :
        todos.map((todo) => {
          return(
            <ToDo
              todo={todo}
              key={todo.id}
              deleteTask={deleteTask}
              changeStatus={changeStatus}
              changeFlag={changeFlag}
            />
          )
        })
      }
      { todos.length ? <span>{todos.length} items</span> : "" }
    </div>
  );
}

export default App;