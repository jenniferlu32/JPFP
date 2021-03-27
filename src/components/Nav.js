import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/students'><li>Students</li></Link>
        <Link to='/campuses'><li>Campuses</li></Link>
      </ul>
    </nav>
  )
}

export default Nav;
