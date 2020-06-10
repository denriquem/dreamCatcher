import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li></li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sing-out alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Dreamers</Link>
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
  );

  return (
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
