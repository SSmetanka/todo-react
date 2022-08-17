import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (useInput) => {
    if (useInput.trim()){
      const newToDo = {
        id: uuidv4(),
        task: useInput,
        isFlag: false,
        isComplete: false,
      }
      setTodos([...todos, newToDo])
    }
  }

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const changeStatus = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : {...todo }
      )
    ])
  }

  const changeFlag = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isFlag: !todo.isFlag } : {...todo }
      )
    ])
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