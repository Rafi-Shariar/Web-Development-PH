import React from "react";
import { NavLink } from "react-router";
import  './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
const Navbar = () => {

  const links = <>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='cart' className='text-xl'><FaShoppingCart /></NavLink>
                <NavLink to='favourites' className='text-xl'><FaBookmark /></NavLink>
                </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between px-20">
        <div className="">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex gap-7">

          {
            links
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
