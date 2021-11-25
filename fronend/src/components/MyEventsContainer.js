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
                    updateEvent({ purpose, name, title, address, phone, id });
                  }}
                >
                  {" "}
                  Edit
                </i>
              </div>
            </div>
            <div className="d-flex flex-column">
              <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                <img
                  class="d-inline-block img-fluid mb-2"
                  src="https://cdn0.weddingwire.in/vendor/5985/3_2/640/jpeg/abe63f39-6053-4688-b6c2-845d40cd38fb_15_355985-162737263512015.webp"
                  alt="Image Description"
                />
                <h4 class="h5 g-color-black g-font-weight-600 g-mb-5 main_css">
                  {title}
                </h4>
                <div className="d-flex bd-highlight">
                  <div className=" p-2 bd-highlight">
                    <span className="address_css">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      {address}
                    </span>
                  </div>

                  <div className="ml-auto p-2 bd-highlight">
                    <span className="address_css">{purpose}</span>
                  </div>
                </div>
                <span class="d-block g-color-primary g-font-size-16 mb-3">
                  <i class="fas fa-coins"></i> $50.00
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventsContainer;
