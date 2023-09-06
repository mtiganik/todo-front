import TodoList from "./todo-list";
import Form from "./add-new-todo/Form";
import React, { useEffect, useState } from 'react'

const url = "http://localhost:8080/api/todos"

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodoData = () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        // Sort the Todos by 'lastUpdate' in descending order
        // data.sort((a,b) => new Date(b.lastUpdate) 
        // - new Date(a.lastUpdate))

        // Sort the 'not done' Todos to be on top
        data.sort((a,b) => (a.isDone && !b.isDone ? 1 : -1));
        setTodos(data)})
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
