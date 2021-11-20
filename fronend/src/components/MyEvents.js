import React, { useContext, useEffect } from "react";
import Buttons from "./Buttons";
import EventsContext from "../context/Events/EventsContext";
import MyEventsContainer from "./MyEventsContainer";

const MyEvents = () => {
  const context = useContext(EventsContext);
  const { Events, setEvents, getMyEvents } = context;

  useEffect(() => {
    getMyEvents();
  }, []);

  return (
    <div>
      <Buttons />
      <div className="row my-3">
        {Events.map((ele) => {
          return (
            <MyEventsContainer
              purpose={ele.purpose}
              name={ele.name}
              title={ele.title}
              address={ele.address}
              phone={ele.phone}
              id={ele._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyEvents;
