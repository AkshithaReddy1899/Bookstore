import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Bookstore CMS',
    },
    {
      id: 2,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 3,
      path: '/Categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav>
      <ul className="navlist">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="navitem"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <p>Login</p>
    </nav>
  );
};

export default Nav;
