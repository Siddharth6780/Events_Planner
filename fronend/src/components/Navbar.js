import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/events">
                All Events
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="nav-link" to="/users/login">
              <button type="button" className="btn btn-primary">
                Log In
              </button>
            </Link>
            <Link className="nav-link" to="/users/signup">
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
