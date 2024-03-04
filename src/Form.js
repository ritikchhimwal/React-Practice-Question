//Form that displays real time user data

import React, { useState } from 'react'

const Form = () => {

    const [input,setInput] = useState('');
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>User Input: {input}</p>
    </div>
  )
}

export default Form