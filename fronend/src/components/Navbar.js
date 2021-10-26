import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css"

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
              <Link className="nav-link btn" to="/about">
                About
              </Link>
            </li>
            <div className="container btn_login_signup d-flex">
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
              <button type="button" class="btn btn-primary btn-sm">Log In</button>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signup">
              <button type="button" class="btn btn-primary btn-sm">Sign Up</button>
              </Link>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
