import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav
      className="w-screen items-start bg-gray-800"
    >
      <ul
        className="flex flex-row gap-5 p-5"
      >
        <li>
          <NavLink
            to="/Login"
            className="hover:underline text-white"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:underline text-white"
          >
            Stopwatch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exemple"
            className="hover:underline text-white"
          >
            Attributes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
