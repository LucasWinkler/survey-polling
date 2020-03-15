import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className='nav'>
      <h3>Logo</h3>
      <ul className='nav__links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/polls'>Polls</Link>
        </li>
      </ul>
    </nav>
  );
}
