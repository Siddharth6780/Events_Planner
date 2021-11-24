import React, { useContext, useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import EventsContext from "../context/Events/EventsContext";
import MyEventsContainer from "./MyEventsContainer";
import ButtonsContainer from "./ButtonsContainer";

const MyEvents = () => {
  const context = useContext(EventsContext);
  const { Events, getMyEvents, editEvents } = context;

  const [etitle, seteTitle] = useState("");
  const [ename, seteName] = useState("");
  const [epurpose, setePurpose] = useState("");
  const [eaddress, seteAddress] = useState("");
  const [ephone, setePhone] = useState("");

  const [Event, setEvent] = useState({});

  const ref = useRef(null);

  const updateEvent = ({ purpose, name, title, address, phone, id }) => {
    ref.current.click();
    setEvent({ purpose, name, title, address, phone, id });
  };

  useEffect(() => {
    getMyEvents();
  }, []);

  return (
    <div>
      <ButtonsContainer/>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Events
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    minLength={5}
                    required
                    type="text"
                    onChange={(e) => seteTitle(e.target.value)}
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="purpose" className="form-label">
                    Purpose
                  </label>
                  <input
                    minLength={5}
                    required
                    type="text"
                    onChange={(e) => setePurpose(e.target.value)}
                    className="form-control"
                    id="epurpose"
                    name="epurpose"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    minLength={5}
                    required
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={(e) => seteName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    minLength={5}
                    required
                    type="text"
                    className="form-control"
                    id="eaddress"
                    name="eaddress"
                    onChange={(e) => seteAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    minLength={5}
                    required
                    type="text"
                    className="form-control"
                    onChange={(e) => setePhone(e.target.value)}
                    id="ephone"
                    name="ephone"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  editEvents(
                    Event.id,
                    etitle,
                    epurpose,
                    ename,
                    eaddress,
                    ephone
                  );
                }}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        {Events.map((ele) => {
          return (
            <MyEventsContainer
              key={ele._id}
              purpose={ele.purpose}
              name={ele.name}
              title={ele.title}
              address={ele.address}
              phone={ele.phone}
              id={ele._id}
              updateEvent={updateEvent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyEvents;
