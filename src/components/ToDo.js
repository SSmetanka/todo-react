function ToDo({ todo, changeStatus, deleteToDo, changeFlag, changeToDo }) {

  const circleClassName = todo.isComplete ? "todo__circle todo__circle_complete" : "todo__circle todo__circle_notComplete"
  const circleMiniClassName = todo.isComplete ? "todo__circle_mini todo__circle_mini_complete" : "todo__circle_mini"
  const textClassName = todo.isComplete ? "complete" : null
  const flagSRC = todo.isFlag ? "icons/flag-active-solid.svg" : "icons/flag-notActive-solid.svg"

  return(
    <div key={todo.id} className="todo">
      <div onClick={()=>{changeStatus(todo.id)}} className={circleClassName}>
        <div className={circleMiniClassName}></div>
      </div>
      <div className={textClassName}>
        {todo.task}
      </div>
      <div className="todo__change" >
        <img
          onClick={()=>{changeToDo(todo)}}
          src="icons/pen-solid.svg"
          alt="change todo"
        />
      </div>
      <div className="todo__flag" onClick={()=>{changeFlag(todo.id)}}>
        <img
          src={flagSRC}
          alt="flag todo"
        />
      </div>
      <div onClick={()=>{deleteToDo(todo.id)}} className="todo__delete" >
        <img
          src="icons/trash-can-solid.svg"
          alt="delete todo"
        />
      </div>
    </div>
  )
}

export default ToDo