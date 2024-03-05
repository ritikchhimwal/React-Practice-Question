// create an simple todo app

import React, { useState } from 'react'

const TodoList = () => {

    const [input,setInput] = useState('');
    const [todos,setTodos] = useState([]);

    const addTodo = () =>{
        if(input.trim() !== ''){
            setTodos([...todos,input])
            setInput('');
        }
    }

    const delTodo = (index) => {
        const updatedTodos = todos.filter((_,i) => i!==index);
        setTodos(updatedTodos);
    }
  return (
    <div>
        <input type='text' onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo} 
                <button onClick={() => delTodo(index)}>Remove</button>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default TodoList
