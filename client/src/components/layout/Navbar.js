import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, Provider } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          Dreamers
          <i className="fas fa-sing-out alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Dreamers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <Provider>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fab fa-centos"></i> DreamCatcher
          </Link>
        </h1>
        {!loading && (
          <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
        )}
      </nav>
    </Provider>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
