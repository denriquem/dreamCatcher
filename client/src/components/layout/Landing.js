import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing" data-test="component-landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DreamCatcher</h1>
          <p className="lead">Share and interpret your dreams</p>
          <div className="buttons">
            <Link
              data-test="register-button"
              to="/register"
              className="btn btn-primary"
            >
              Sign Up
            </Link>
            <Link
              data-test="login-button"
              to="/login"
              className="btn btn-light"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
