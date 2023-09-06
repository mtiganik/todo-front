

const TodoList = ({todos}) => {
        return(
        <div>
            <p>Todos lenght: {todos.length}</p>
            {todos.length > 0 && (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>{todo.todoName}</li>
                    ))}
                </ul>
                )}
        </div>
    )
}


export default TodoList;
