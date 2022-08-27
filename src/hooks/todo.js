import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTodo() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [filter, setFilter] = useState({ value: "All", label: "All" })
  const [modal, setModal] = useState(false)
  const [dataChangeToDo, setDataChangeToDo] = useState({})

  const optionsSort = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Completed", label: "Completed" },
    { value: "Important", label: "Important" },
  ]

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

  const deleteToDo = (id) => {
    let data = JSON.parse(localStorage.getItem("todos")).filter((todo) => todo.id !== id)
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
    sortToDo(filter)
  }

  const changeStatus = (id) => {
    let data = JSON.parse(localStorage.getItem("todos")).map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
    )
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
    sortToDo(filter)
  }

  const changeFlag = (id) => {
    let data = JSON.parse(localStorage.getItem("todos")).map((todo) =>
      todo.id === id ? { ...todo, isFlag: !todo.isFlag } : { ...todo }
    )
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
    sortToDo(filter)
  }

  const changeToDo = (todo) => {
    closeModal()
    setDataChangeToDo(todo)
  }

  const saveChangeToDo = (id, task) => {
    closeModal()
    let data = JSON.parse(localStorage.getItem("todos")).map((todo) =>
      todo.id === id ? { ...todo, task: task } : { ...todo }
    )
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(JSON.parse(localStorage.getItem("todos")))
    sortToDo(filter)
  }

  const sortToDo = (val) => {
    setFilter(val)
    let data = JSON.parse(localStorage.getItem("todos"))
    switch (val.value) {
      case "Active":
        setTodos(data.filter((todo) => !todo.isComplete))
        break
      case "Completed":
        setTodos(data.filter((todo) => todo.isComplete))
        break
      case "Important":
        setTodos(data.filter((todo) => todo.isFlag))
        break
      default:
        setTodos(data)
    }
  }

  const closeModal = () => {
    setModal(!modal)
  }

  return {
    todos,
    modal,
    dataChangeToDo,
    optionsSort,
    addTask,
    deleteToDo,
    changeStatus,
    changeFlag,
    changeToDo,
    saveChangeToDo,
    sortToDo,
    closeModal
  }
}