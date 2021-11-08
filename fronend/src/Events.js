import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/Container";

const Events = () => {
  const [Events, setEvents] = useState([]);
  async function getAllNote() {
    let url = process.env.REACT_APP_ALL_EVENTS;
    const res = await fetch(url);
    const data = await res.json();
    setEvents(data.message);
  }
  useEffect(() => {
    getAllNote();
  }, []);

  return (
    <>
      <div className="row my-3 d-flex main_container">
        <div class="d-flex justify-content-center mr-auto p-2 mx-2">
          <button type="button" class="btn btn-outline-primary mx-1">
            Party
          </button>
          <button type="button" class="btn btn-outline-primary mx-1">
            Marriage
          </button>
          <button type="button" class="btn btn-outline-primary mx-1">
            Reunion
          </button>
          <button type="button" class="btn btn-outline-primary mx-1">
            Birthday
          </button>
        </div>
        <Link className="nav-link" to="/addEvents">
          <button type="button" class="btn btn-outline-primary mx-2">
            Add Events
          </button>
        </Link>
      </div>
      <div className="row my-3">
        {Events.map((ele) => {
          return (
            <Container
              purpose={ele.purpose}
              name={ele.name}
              title={ele.title}
              address={ele.address}
              phone={ele.phone}
            />
          );
        })}
      </div>
    </>
  );
};

export default Events;
