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
            to="/login"
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
        <li>
          <NavLink
            to="/memory"
            className="hover:underline text-white"
          >
            Memory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/forms"
            className="hover:underline text-white"
          >
            Forms
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
