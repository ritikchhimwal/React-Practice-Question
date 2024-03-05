//create a component that changes its background color when clicked

import React, { useState } from 'react'

const Changecolor = () => {

    const [backgroundColor,setBackgroundColor] = useState('white');
    
    const handleClick = ()=>{
        const newColor = backgroundColor === 'white' ? 'lightblue' : 'white';
        setBackgroundColor(newColor);
    }

  return (
    <div onClick={handleClick} style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>
        <button>Change Color</button>
    </div>
  )
}

export default Changecolor
