import { useState } from "react"

function CreateTodo({ todoList, setTodoList }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name, completed: false }]);
    setName("");
  }

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={name} type="text" onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
}

export default CreateTodo