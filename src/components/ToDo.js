import { IconFlag, IconPen, IconTrash } from "./Icons";

function ToDo({ todo, changeStatus, deleteToDo, changeFlag, changeToDo }) {

  const circleClassName = todo.isComplete ? "todo__circle todo__circle_complete" : "todo__circle todo__circle_notComplete"
  const circleMiniClassName = todo.isComplete ? "todo__circle_mini todo__circle_mini_complete" : "todo__circle_mini"
  const textClassName = todo.isComplete ? "complete" : null

  return(
    <div key={todo.id} className="todo">
      <div className={circleClassName} onClick={()=>{changeStatus(todo.id)}}>
        <div className={circleMiniClassName}></div>
      </div>
      <div className={textClassName}>
        {todo.task}
      </div>
      <div className="todo__change" onClick={()=>{changeToDo(todo)}}>
        <IconPen/>
      </div>
      <div className="todo__flag" onClick={()=>{changeFlag(todo.id)}}>
        <IconFlag active={todo.isFlag}/>
      </div>
      <div className="todo__delete" onClick={()=>{deleteToDo(todo.id)}}>
        <IconTrash />
      </div>
    </div>
  )
}

export default ToDo