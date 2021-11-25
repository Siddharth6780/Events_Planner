import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Events from "./Events";
import AddEvents from "./components/AddEvents";
import MyEvents from "./components/MyEvents";
import NoteState from "./context/Events/EventsState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const App = () => {
  return (
    <>
      <NoteState>
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
                <Events />
              </Route>
              <Route exact path="/addEvents">
                <AddEvents />
              </Route>
              <Route exact path="/myevents">
                <MyEvents />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
      <ToastContainer autoClose={2500} />
    </>
  );
};

export default App;
