import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar2 = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))



  return (
    <nav className="flex justify-between mx-10 mt-4">
     
      <span className="flex gap-10 " onClick={()=> setOpen(!open)}>
            { 
            open? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>
            }

            <ul className={`md:hidden absolute bg-amber-300 
                ${open ? 'top-10' : '-top-40'}
                duration-500
                text-black p-4`}>
                {links}
            </ul>
                
            <h3>My Custom Navbar</h3>
      </span>

     
      <ul className="md:flex gap-10 hidden">
        {links}
      </ul>

      <button>Click</button>
    </nav>
  );
};

export default Navbar2;
