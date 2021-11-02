import React from "react";
import "./style.css"

const Login = () => {
  return (
    <>
      <div className="form_div">
        <label className="form_label">LOGIN FORM</label>
        <form action="">
          <p>
            <input type="email" placeholder="Enter Email" />
          </p>
          <p>
            <input type="password" placeholder="**********" />
          </p>
          <p>
            <input type="submit" value="LOGIN" />
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
