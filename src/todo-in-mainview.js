import { GarbagePin, ErrorSign, CheckSign } from "./utils/icons";

const ToDoInMainView = ({todo}) => {
    const buttonClass = `mx-1 mb-1 btn ${todo.isDone ? "btn-success" : "btn-danger"}`;
    const itemStyle = {
        width: "150px", // Set a fixed width as an example, adjust as needed
        whiteSpace: "nowrap", // Prevent text from wrapping to the next line
        overflow: "hidden", // Hide overflow
        textOverflow: "ellipsis", // Add ellipsis (...) to indicate text truncation
        textAlign: "left"
      };
    
    
    return(
        <>
        
        <button style={itemStyle} className={buttonClass}>
            {todo.todoName}

        </button>
        <button className="btn btn-outline-primary">
            <GarbagePin/>
        </button>
        <button className="btn btn-outline-danger">
            <ErrorSign />
</button>

        <button className="btn btn-outline-success">
            <CheckSign/>
        </button>
        </>
    )
}

export default ToDoInMainView