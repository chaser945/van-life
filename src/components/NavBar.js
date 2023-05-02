import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        #vanlife
      </Link>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/">Vans</Link>
      </ul>
    </nav>
  );
}
