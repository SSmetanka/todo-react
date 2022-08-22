import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import Select from "react-select";
import Modal from "./components/Modal";
import ChangeToDo from "./components/ChangeToDo";
import { useTodo } from "./hooks/todo";

function App() {
  const {
    todos,          // stores an array of todo
    modal,          // stores the state of the modal window
    dataChangeToDo, // stores a mutable value
    optionsSort,    // stores sort options
    addTask,        // add a task
    deleteToDo,     // delete task
    changeStatus,   // change status
    changeFlag,     // change flag
    changeToDo,     // change task
    saveChangeToDo, // save task change
    sortToDo,       // sorts tasks
    closeModal      // changes the state of the modal window
  } = useTodo()

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
      <div className="flex">
        <ToDoForm addTask={addTask}/>
        <Select
          className="todoSort"
          onChange={sortToDo}
          options={optionsSort}
          placeholder="All"
        />
      </div>
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
              deleteToDo={deleteToDo}
              changeStatus={changeStatus}
              changeFlag={changeFlag}
              changeToDo={changeToDo}
            />
          )
        })
      }
      { todos.length ? <span>{todos.length} items</span> : "" }
      {modal &&
        <Modal closeModal={closeModal}>
          <ChangeToDo
            data={dataChangeToDo}
            saveChangeToDo={saveChangeToDo}
          />
        </Modal>
      }
    </div>
  );
}

export default App;