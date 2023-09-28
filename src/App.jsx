import { useState } from "react"
import CreateTodo from "./components/CreateTodo";
import ShowTodoList from "./components/ShowTodoList";
import "./App.css";

  function App() {
    const [todoList, setTodoList] = useState([]);

    return (
      <div className="main-panel">
        <h1>DjSvili's Todo List</h1>
        <CreateTodo todoList={todoList} setTodoList={setTodoList} />
        <ShowTodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    )
  }

export default App
