import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark" data-test="component-navbar">
      <h1>
        <Link to="/">
          <i className="fab fa-centos"></i> DreamCatcher
        </Link>
      </h1>
      <ul>
        <li>
          <a href="!#">Dreamers</a>
        </li>
        <li>
          <Link to="/register" data-test="register-button">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" data-test="login-button">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
