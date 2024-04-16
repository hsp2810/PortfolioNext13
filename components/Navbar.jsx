"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className='navbar p-7 absolute w-full'>
        <ul className='nav_items flex justify-center'>
          <NavItem title='Home' href='/' />
          <NavItem title='Projects' href='/projects' />
          <NavItem title='Contact' href='/contact' />
        </ul>
      </nav>
    </>
  );
};

const NavItem = ({ title, href }) => {
  return (
    <li className='nav_lists ml-6'>
      <Link
        href={href}
        className='hover:text-primaryColor hover:shadow-2xl cursor-pointer transition ease-in-out p-3 rounded-xl'
      >
        {title}
      </Link>
    </li>
  );
};

export default Navbar;
