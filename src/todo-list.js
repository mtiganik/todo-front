import React, { useEffect, useState } from 'react'

const url = "http://localhost:8080/api/todos"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const fetchTodoData = () => {
        fetch(url)
        .then(res =>{return res.json()})
        .then(data => {setTodos(data)})
        }
    useEffect(() => {fetchTodoData()}, [])

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
