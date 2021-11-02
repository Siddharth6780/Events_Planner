import React, { useState } from "react";
import "./style.css";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signupUser(e) {
    e.preventDefault();
    let url = process.env.REACT_APP_SIGNUP_API;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const json = await response.json();
    } catch (error) {
      console.log("Err occured");
    }
  }

  return (
    <>
      <div className="form_div">
        <p className="form_label">SIGNUP FORM</p>
        <form onSubmit={signupUser}>
          <p>
            <input
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setname(e.target.value)}
            />
          </p>
          <p>
            <input
              value={email}
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <input
              value={password}
              type="password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
            />
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
