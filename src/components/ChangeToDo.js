import {useState} from "react";

function ChangeToDo({ data, saveChangeToDo }) {
  const [input, setInput] = useState(data.task)

  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input !== data.task){
      saveChangeToDo(data.id, input)
      setInput('')
    }
  }

  return(
    <>
      <h2 className="modal__header">Change ToDo</h2>
      <form>
        <textarea
          className="modal__input"
          rows="10"
          value={input}
          onChange={handleChange}
        />
        <button className="header__button" onClick={handleSubmit}>Change</button>
      </form>
    </>
  )
}

export default ChangeToDo