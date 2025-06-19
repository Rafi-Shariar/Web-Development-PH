import React from "react";
import { Links, NavLink } from "react-router";
import logoImg from '../../assets/images/logo.png';
const Navbar = () => {
//     Services
// Coverage
// About Us
// Pricing
// Be a Rider
 const links = <>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink to={'/aboutus'}>About Us</NavLink>
        <NavLink to={'/pricing'}>Pricing</NavLink>
        <NavLink to={'/bearider'}>Be a Rider</NavLink>
 </>
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="navbar bg-base-100 shadow-sm rounded-2xl p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="">
              <img src={logoImg} alt="" className=""/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow" 
            >
                {
                    // mobile
                    links
                }
            </ul>
          </div>
          <a className=" text-2xl mt-4 -ml-4 font-semibold">Profast</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10">
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-xl">Sign In</a>
          <a className="btn btn-primary rounded-xl ml-5 text-black">Be A Rider</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
