import React from 'react';
import {NavLink} from 'react-router';
import './header.css';
const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/login' className='p-3'>Login</NavLink>
            </ul>
            
        </nav>
    );
};

export default Header;