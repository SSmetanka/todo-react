import React, { useState } from "react";

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
        onChange={handleChange}
        type="text"
        placeholder="New task..."
        className="form__input"
      />
      <button className="form__add">
        <img
          src="icons/plus-solid.svg"
          alt="plus"
        />
      </button>
    </form>
  )
}

export default ToDoForm