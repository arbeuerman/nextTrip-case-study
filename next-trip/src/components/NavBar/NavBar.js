import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Menu } from 'react-burger-menu';

import './NavBar.css'

const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className='nav-container'>
      <button onClick={ () => setIsOpen(!isOpen) } className="menu-button">Menu</button>
        {isOpen ? 
          <div className='nav-menu-items'>
            <Link to='/' onClick={ () => setIsOpen(false)} className='menu-link'>
              Home
            </Link>
            <Link to='/route-selector' onClick={ () => setIsOpen(false)} className='menu-link'> 
              Select a route
            </Link>
          </div>
          : null
        }
    </div>
  )
}

export default NavBar;