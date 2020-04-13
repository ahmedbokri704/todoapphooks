import React, { useState } from 'react'

function NewToDo(props) {
    const [Newitem, setNewitem] = useState("")
    const addnewitem = () => {
        props.additem({ text: Newitem, iscompleted: false, id: Date.now() })
        setNewitem("")
    }
    return (
        <section>
            <h1>To-Do-App!</h1>
            <h3>Add New To-Do</h3>
            <input type="text" placeholder="Enter New task"
                value={Newitem}
                onChange={(event) => setNewitem(event.target.value)} />
            <button onClick={()=>addnewitem()}>Add </button>
        </section>
    )
}
export default NewToDo