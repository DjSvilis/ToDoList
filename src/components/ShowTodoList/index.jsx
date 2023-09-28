import Todo from "../Todo";

function ShowTodoList({ todoList, setTodoList }) {

  const handleChecked = (event, element) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo === element) {
        return { ...todo, completed: event.target.checked };
      }
      return todo;
    })

    setTodoList(updatedTodoList);
  }


  return (
    <>
      <ul>
        {todoList.map((element,index) => {
          return (
            <li key={index}>
              <Todo element={element} handleChecked={() => handleChecked(event, element)} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ShowTodoList