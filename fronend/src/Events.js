import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/Container";

const Events = () => {
  const [Events, setEvents] = useState([]);
  async function getAllNote() {
    let url = "http://localhost:3000/events";
    const res = await fetch(url);
    const data = await res.json();
    setEvents(data);
  }
  useEffect(() => {
    getAllNote();
  }, []);

  return (
    <>
      <div className="row my-3 d-flex">
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
        <div class="d-flex justify-content-center ml-auto p-2">
          <Link className="nav-link" to="/about">
            <button type="button" class="btn btn-outline-primary mx-2">
              Add Events
            </button>
          </Link>
        </div>
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
