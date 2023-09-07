import TodoList from "./todo-list";
import Form from "./add-new-todo/Form";
import React, { useEffect, useState } from 'react'

const url = "http://localhost:8080/api/todos"

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodoData = () => {
    fetch(url)
      .then(res => res.json())
      .then(
        data => {
          data.sort((a, b) => (a.isDone && !b.isDone ? 1 : -1));
          setTodos(data)
        })
  }
  const editTodo = (updatedTodo) => {
    const {id} = updatedTodo;
    updatedTodo.lastModified = new Date().toISOString()
    fetch(`${url}/${id}`,
      { method: "PUT", 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo)},)
      .then((response) => {
        if (response.status === 200) {
          setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)) )
        } else { throw new Error("Failed to edit todo") }
      })
      .catch((error) => { console.log(error) })
  }

  const deleteTodo = (todoId) => {
    fetch(`${url}/${todoId}`,
      { method: "DELETE", })
      .then((response) => {
        if (response.status === 200) {
          const updatedTodos = todos.filter((todo) => todo.id !== todoId)
          setTodos(updatedTodos)
        } else { throw new Error("Failed to delete todo") }
      })
      .catch((error) => { console.log(error) })
  }
    
  useEffect(() => {fetchTodoData()}, [])

  const updateTodoList = () => {
    fetchTodoData();
  };

  return (
    <div className="App">
          <Form updateTodoList = {updateTodoList}  />
          <TodoList todos={todos} deleteTodo = {deleteTodo} editTodo = {editTodo}/>
    </div>
  );
}

export default App;
