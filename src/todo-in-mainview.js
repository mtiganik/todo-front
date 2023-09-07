import { GarbagePin, ErrorSign, CheckSign } from "./utils/icons";

const ToDoInMainView = ({ todo, onDelete, onEdit }) => {
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
    todo.isDone = !todo.isDone
    onEdit(todo.id)
  }

  return (
    <>
      <button style={itemStyle} className={buttonClass}>
        {todo.todoName}
      </button>
      {!todo.isDone && (

      <button className="btn btn-outline-success" 
      title="Mark as done">
        <CheckSign />
      </button>
)}
{todo.isDone && (

        <button className="btn btn-outline-danger"
          title="Remark as undone">
          <ErrorSign />

        </button>
      )}

      <button 
      className="btn btn-outline-primary" 
      title="Delete todo"
      onClick={handleDeleteClick}>
        <GarbagePin />
      </button>

    </>
  )
}

export default ToDoInMainView