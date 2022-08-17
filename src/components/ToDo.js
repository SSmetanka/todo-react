import React from "react";

function ToDo({ todo, changeStatus, deleteTask}) {

  const circleClassName = todo.isComplete ? "todo__circle todo__circle_complete" : "todo__circle todo__circle_notComplete"
  const circleMiniClassName = todo.isComplete ? "todo__circle_mini todo__circle_mini_complete" : "todo__circle_mini"
  const textClassName = todo.isComplete ? "complete" : null

  return(
    <div key={todo.id} className="todo">
      <div onClick={()=>{changeStatus(todo.id)}} className={circleClassName}>
        <div className={circleMiniClassName}></div>
      </div>
      <div className={textClassName}>
        {todo.task}
      </div>
      <div onClick={()=>{deleteTask(todo.id)}} className="todo__delete">
        <img
          src="icons/trash-can-solid.svg"
          alt="delete todo"
        />
      </div>
    </div>
  )
}

export default ToDo