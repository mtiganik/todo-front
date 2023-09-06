import ToDoInMainView from "./todo-in-mainview";

const TodoList = ({todos, deleteTodo}) => {
        return(
        <div>
            <p>Todos lenght: {todos.length}</p>
            {todos.length > 0 && (
                <ol>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <ToDoInMainView  todo = {todo} onDelete={deleteTodo} />
                        </li>
                    ))}
                </ol>
                )}
        </div>
    )
}


export default TodoList;
