import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Events from "./Events";
import AddEvents from "./components/AddEvents";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/users/login">
              <Login />
            </Route>
            <Route exact path="/users/signup">
              <Signup />
            </Route>
            <Route exact path="/events">
              <Events/>
            </Route>
            <Route exact path="/addEvents">
              <AddEvents/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
