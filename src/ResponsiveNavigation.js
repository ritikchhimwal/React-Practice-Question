//implement a responsive navigation menu with a hamburger icon.
import React, { useState } from 'react';
import './ResponsiveNavigation.css';

const ResponsiveNavigation = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
        ☰
        </button>
        <ul className={`menu ${isOpen?'open':''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
        </ul>
    </div>
  )
}

export default ResponsiveNavigation
