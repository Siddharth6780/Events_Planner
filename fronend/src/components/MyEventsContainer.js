import React, { useContext, useRef, useState } from "react";
import EventsContext from "../context/Events/EventsContext";
import "./style.css";

const MyEventsContainer = ({
  purpose,
  name,
  title,
  address,
  phone,
  id,
  updateEvent,
}) => {
  const context = useContext(EventsContext);
  const { deleteEvents, editEvents } = context;

  return (
    <>
      <div className="col-md-4">
        <div className="card my-3">
          <div className="card-body main_container">
            <div className="d-flex flex-row">
              <div className="mr-auto p-2 bd-highlight">
                <h4 className="card-title">{title}</h4>
              </div>
              <div className="p-2 bd-highlight">
                <i
                  className="far fa-trash-alt mx-2 fa-1x"
                  onClick={() => {
                    deleteEvents(id);
                  }}
                ></i>
                <i
                  className="far fa-edit mx-2 fa-1x"
                  onClick={() => {
                    updateEvent({ purpose, name, title, address, phone, id });
                  }}
                ></i>
              </div>
            </div>
            <div className="d-flex flex-column">
              <table className="table main_container">
                <tbody>
                  <tr>
                    <th>Purpose: </th>
                    <td>{purpose}</td>
                  </tr>
                  <tr>
                    <th>Name: </th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Address: </th>
                    <td>{address}</td>
                  </tr>
                  <tr>
                    <th>Phone No.: </th>
                    <td>{phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventsContainer;
