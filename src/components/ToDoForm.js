import { useState } from "react";
import { IconPlus } from "./Icons";

function ToDoForm({ addTask }) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(input)
    setInput('')
  }

  return(
    <form onSubmit={handleSubmit} className="form">
      <input
        value={input}
        name="ToDoForm"
        onChange={handleChange}
        type="text"
        placeholder="New task..."
        className="form__input"
      />
      <button className="form__add">
        <IconPlus/>
      </button>
    </form>
  )
}

export default ToDoForm