import formatLocalDateTime from "./utils/formatLocalDateTime";
import { useState } from "react";

const EditTodo = ({todo, onEdit,setIsEditHidden}) => {
  const [editedTodo, setEditedTodo] = useState({...todo})
  const formattedLastModified = formatLocalDateTime(todo.lastModified);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setEditedTodo({...editedTodo, [name]:value});
  }

  const handleCheckboxChange = () => {
    setEditedTodo({...editedTodo, isDone: !editedTodo.isDone})
  }

  const handleSave = () => {
    onEdit(editedTodo);
    setIsEditHidden(true)
  }
  return(
    <div>
       <p>Todo #{todo.id}, last updated {formattedLastModified}</p>
       <div className="mb-3">
        <textarea
          className="form-control"
          name="todoName"
          value={editedTodo.todoName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="isDone"
          checked={editedTodo.isDone}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label">Done</label>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSave}>
        Save
      </button>
    </div>
  )
}

export default EditTodo


