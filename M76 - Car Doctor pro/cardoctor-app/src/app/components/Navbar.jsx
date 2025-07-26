import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../assets/icons/check.svg';
const Navbar = () => {

    const navMenu = <>

            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/services'}>Services</Link>
            </li>
            <li>
                <Link href={'/blogs'}>Blogs</Link>
            </li>
            <li>
                <Link href={'/contacts'}>contacts</Link>
            </li>
    </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Link href={'/'}>
                <Image src={logo} width={50} height={50} alt="logo"></Image>
              </Link>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
            navMenu
          }
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mx-12">
            <Link href={'/login'}> <button className="btn btn-soft btn-error mr-6">Login</button></Link>
            <Link href={'/register'}> <button className="btn btn-soft btn-warning">Register</button></Link>
          </div>
          <a className="btn btn-error btn-outline">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
