import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                {/* <a href="/"></a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/user2'>User2</NavLink>
                
            
            </nav>
        </div>
    );
};

export default Header;