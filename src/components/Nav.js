import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';
import svg from '../styles/profile.svg';

const Nav = () => {
  console.log('GI');
  return (
    <nav>
      <ul className="navlist">
        <li className="navitem logo">
          <h2>
            <NavLink
              to="/"
              style={{
                color: '#0290ff',
                fontSize: '2rem',
                textDecoration: 'none',
              }}
            >
              Bookstore CMS
            </NavLink>
          </h2>
        </li>
        <li className="navitem">
          <NavLink
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '1.9px',
            }}
          >
            BOOKS
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink
            to="/Categories"
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '1.9px',
            }}
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <span>
        <img src={svg} alt="profile" />
      </span>
    </nav>
  );
};

export default Nav;
