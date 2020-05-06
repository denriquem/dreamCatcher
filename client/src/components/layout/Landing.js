import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

export const Landing = () => {
  return (
    <Router>
      <section className="landing" data-test="component-landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">DreamCatcher</h1>
            <p className="lead">Share and interpret your dreams</p>
            <div className="buttons">
              <Link
                to="/register"
                className="btn btn-primary"
                data-test="register-button"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="btn btn-light"
                data-test="login-button"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default Landing;
