import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to='/'><li className = 'navItem'>Home</li></Link>
        <Link to='/students' ><li className = 'navItem'>Students</li></Link>
        <Link to='/campuses'><li className = 'navItem'>Campuses</li></Link>
      </ul>
    </nav>
  )
}

export default Nav;
