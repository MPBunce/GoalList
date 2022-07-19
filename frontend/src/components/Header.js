import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Goal List</Link>
        </div>
        <ul>
            <li>
               <Link to='/Login'>
                    <FaSignInAlt/> Login
                </Link> 
            </li>
            <li>
               <Link to='/Register'>
                    <FaUser/> Register
                </Link> 
            </li>
            <li>
               <Link to='/Dashboard'>
                    <FaSignOutAlt/> Logout
                </Link> 
            </li>
        </ul>
    </header>
  )
}

export default Header