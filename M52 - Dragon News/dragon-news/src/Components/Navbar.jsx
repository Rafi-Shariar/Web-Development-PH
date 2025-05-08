import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {

    const {user, LogOut} = use(AuthContext)
    const handleLogOut = () =>{
        LogOut().then(()=> alert('logged out')).catch(error => console.log(error)
        )

    }
    return (
        <div className='flex justify-between mt-5'>
            
            <div className="nav flex gap-5 text-slate-700">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5 items-center">
            <div className=""> {user && user.email}</div>
                <img src={userImg} alt="" />
                {
                    user ? <Link className='btn btn-primary px-10' to="/auth/login" onClick={handleLogOut}>LogOut</Link> : <Link className='btn btn-primary px-10' to="/auth/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;