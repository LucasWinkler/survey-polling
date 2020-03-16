import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
  return (
    <nav className='nav'>
      <h3>Logo</h3>
      <ul className='nav__links'>
        <li>
          <Link to='/' className='nav__link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav__link'>
            About
          </Link>
        </li>
        <li>
          <Link to='/users' className='nav__link'>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
