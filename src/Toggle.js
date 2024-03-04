//toggle button 
import React, { useState } from 'react'

const Toggle = () => {
    const [isToggle,setisToggle] = useState(false);

    function change(){
        if(isToggle == true){
        setisToggle(false);
        }else{
            setisToggle(true);
        }
    }
  return (
    <div>
        <input type='checkbox' onChange={change}/>
        <p>{isToggle ? "On":"Off"}</p>
    </div>
  )
}

export default Toggle