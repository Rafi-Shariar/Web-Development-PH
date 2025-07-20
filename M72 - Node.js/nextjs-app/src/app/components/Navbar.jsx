import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-10">
          <Link href={'/'}> <li>Home</li> </Link>
          <Link href={'/blog'}> <li>blog</li> </Link>
          <Link href={'/contact'}> <li>contact</li> </Link>
         
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
