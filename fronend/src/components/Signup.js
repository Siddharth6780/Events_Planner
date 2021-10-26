import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <>
      <div class="form_div">
        <p class="form_label">SIGNUP FORM</p>
        <form action="">
          <p>
            <input type="text" placeholder="Enter Name" />
          </p>
          <p>
            <input type="email" placeholder="Enter Email" />
          </p>
          <p>
            <input type="password" placeholder="**********" />
          </p>
          <p>
            <input type="submit" value="SIGNUP" />
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
