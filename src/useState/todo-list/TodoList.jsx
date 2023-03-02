import React, { useRef, useState } from 'react'

export default function TodoList() {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

    const addList = () => {
        setTodos([...todos, value]);
        setValue('')
    }

    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={addList}>Add Todo List</button>

            <ul>
                {todos.map((todo => (<li key={todo}> {todo} </li>)))}
            </ul>
        </div>
    )
}
