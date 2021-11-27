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
  price,
  updateEvent,
  photo,
  description,
}) => {
  const context = useContext(EventsContext);
  const { deleteEvents, editEvents } = context;
  console.log(photo);
  return (
    <>
      <div className="col-md-4">
        <div className="card my-3">
          <div className="main_container">
            <div className="p-2 bd-highlight new_icon d-flex bd-highlight">
              <div className="p-2 bd-highlight">
                <i
                  className="far fa-trash-alt mx-2 fa-1x"
                  onClick={() => {
                    deleteEvents(id);
                  }}
                >
                  {" "}
                  Delete
                </i>
              </div>
              <div className="ml-auto p-2 bd-highlight">
                <i
                  className="far fa-edit mx-2 fa-1x"
                  onClick={() => {
                    updateEvent({ purpose, name, title, address, phone, id, description, photo, price });
                  }}
                >
                  {" "}
                  Edit
                </i>
              </div>
            </div>
            <div className="d-flex flex-column card-body">
              <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                <img
                  class="d-inline-block img-fluid mb-2"
                  src={photo}
                  alt="Image Description"
                />
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
                        <th>Price: </th>
                        <td>रु{price}</td>
                      </tr>
                      <tr>
                        <th>Address: </th>
                        <td>{address}</td>
                      </tr>
                      <tr>
                        <th>Phone No.: </th>
                        <td>{phone}</td>
                      </tr>
                      <tr>
                        <th>Description: </th>
                        <td>{description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventsContainer;
