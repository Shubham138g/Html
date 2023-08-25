import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
    <div className="navBar">
      <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
      <NavLink exact activeClassName="active_class" to="/user">User</NavLink>
      
    </div>
    </>
  );
}

export default NavBar;
