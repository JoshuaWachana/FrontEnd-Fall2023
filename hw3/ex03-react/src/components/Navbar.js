import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/home' className='tba'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/search' className='tba'>
              Search
            </Link>
          </li>
          <li>
            <Link to='/houses' className='tba'>
              Houses
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
