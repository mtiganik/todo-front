import { GarbagePin, ErrorSign, CheckSign } from "./utils/icons";
import EditTodo from "./editTodo";
import React from "react"

const ToDoInMainView = ({ todo, onDelete, onEdit }) => {
  const [isEditHidden, setIsEditHidden] = React.useState(true)
  const buttonClass = `mx-1 mb-1 btn ${todo.isDone ? "btn-success" : "btn-danger"}`;
  const itemStyle = {
    width: "150px", 
    whiteSpace: "nowrap", 
    overflow: "hidden", 
    textOverflow: "ellipsis",  
    textAlign: "left"
  };

  const handleDeleteClick = () => {
    onDelete(todo.id)
  }

  const handleTodoStatus = () => {
    const updatedTodo = {...todo, isDone: !todo.isDone}
    onEdit(updatedTodo)
  }

  const handleEditTodo = () => {
    setIsEditHidden(!isEditHidden)
  }



  return (
    <>
      <button 
      style={itemStyle} 
      className={buttonClass}
      onClick={handleEditTodo}>
        {todo.todoName}
      </button>
      {!todo.isDone && (

        <button 
          className="btn btn-outline-success"
          title="Mark as done"
          onClick={handleTodoStatus}>
          <CheckSign />
        </button>
      )}
      {todo.isDone && (

        <button 
        className="btn btn-outline-danger"
          title="Remark as undone"
          onClick={handleTodoStatus}>
          <ErrorSign />

        </button>
      )}
      <button 
      className="btn btn-outline-primary" 
      title="Delete todo"
      onClick={handleDeleteClick}>
        <GarbagePin />
      </button>
      <div hidden={isEditHidden} className="bg-light p-2 mb-2"
      >
        <EditTodo todo = {todo} onEdit={onEdit} setIsEditHidden={setIsEditHidden}/>

      </div>
    </>
  )
}

export default ToDoInMainView