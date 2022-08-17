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

  return (
    <div className="App">
      <header>
        <h1>Задачи - {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return(
          <ToDo
            todo={todo}
            key={todo.id}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        )
      })}

    </div>
  );
}

export default App;
