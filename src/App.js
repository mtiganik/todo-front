import TodoList from "./todo-list";
import Form from "./Form";
import React, { useEffect, useState } from 'react'

const url = "http://localhost:8080/api/todos"

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodoData = () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {setTodos(data)})
      }
  useEffect(() => {fetchTodoData()}, [])

  const updateTodoList = () => {
    fetchTodoData();
  };

  return (
    <div className="App">
          <TodoList todos={todos}/>
          <Form updateTodoList = {updateTodoList} />
    </div>
  );
}

export default App;
