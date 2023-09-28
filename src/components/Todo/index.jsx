import { useState } from "react"

const todoTemplate = {
    id: "",
    name: "",
    completed: "",
}
function Todo({ element, handleChecked }) {

    // const [data, setData] = useState({
    //     content: "",
    //     completed: false
    // })

    return (
        <>
            <label>{element.name}</label>
            <input type="checkbox" checked={element.completed} onChange={handleChecked} />
        </>
    )
}

export default Todo