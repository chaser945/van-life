import React from "react";
import { Link, NavLink } from "react-router-dom";


const currentStyle = {
  textDecoration: 'underline',
  color: 'black',
}

export default function NavBar() {

  

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        #vanlife
      </Link>
      <ul>
        <NavLink
          to="/host"
          style={({ isActive }) => isActive ? currentStyle : null}
        >Host</NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => isActive ? currentStyle : null}
        >About</NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => isActive ? currentStyle : null}
        >Vans</NavLink>
      </ul>
    </nav>
  );
}

export {currentStyle}