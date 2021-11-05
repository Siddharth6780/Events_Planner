import React from "react";
import "./style.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form className="login-container">
          <p>
            <input type="email" placeholder="Email" />
          </p>
          <p>
            <input type="password" placeholder="Password" />
          </p>
          <p>
            <input type="submit" value="Log in" />
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
