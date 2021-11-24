import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Home = () => {
  let location = useLocation();
  let history = useHistory();
  const HandleLogout = () => {
    toast.success("Logout successfully");
    localStorage.removeItem("token");
    history.push("/users/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            M in M
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/events">
                  All Events
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                <li className="nav-item active">
                  <Link className="nav-link" to="/myevents">
                    My Events
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex p-2 bd-highlight">
                <Link
                  className="btn btn-primary mx-2"
                  to="/users/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/users/signup"
                  role="button"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <form className="d-flex p-2 bd-highlight">
                <button onClick={HandleLogout} className="btn btn-primary mx-2">
                  Logut
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
