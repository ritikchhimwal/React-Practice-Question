// make counter app which increse and descrese the value


import React, { useState } from 'react'

export default function Counter() {

    const [counter,setCounter] = useState(0);

    function add(){

        setCounter(counter+1);
    }
    function minus(){
        setCounter(counter-1);
    }
    

  return (
    <div>
        <button onClick={add}>+</button>
        <span>{counter}</span>
        <button onClick={minus}>-</button>
    </div>
  )
}
