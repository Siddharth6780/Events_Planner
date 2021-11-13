import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function LoginUser(e) {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_LOGIN_API;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        alert(data.message);
      } else {
        localStorage.setItem("token", data.message);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form className="login-container" onSubmit={LoginUser}>
          <p>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
