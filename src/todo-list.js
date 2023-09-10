import ToDoInMainView from "./todo-in-mainview";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div>
      {todos.length > 0 && (
        <ol>
          {todos.map(todo => (
            <li key={todo.id}>
              <ToDoInMainView
                todo={todo}
                onDelete={deleteTodo}
                onEdit={editTodo} />
            </li>
          ))}
        </ol>
      )}
      <p>Todos lenght: {todos.length}</p>
    </div>
  )
}


export default TodoList;
