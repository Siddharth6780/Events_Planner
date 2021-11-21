import React, { useEffect, useState } from "react";
import Container from "./Container.js";

const Event = () => {
  const [Events, setEvents] = useState([]);
  const getAllEvents = async () => {
    let url = process.env.REACT_APP_ALL_EVENTS;
    const res = await fetch(url);
    const data = await res.json();
    if (data.success === false) {
      alert(data.message);
    } else {
      setEvents(data.message);
    }
  };
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      <div className="row my-3">
        {Events.map((ele) => {
          return (
            <Container
              key={ele._id}
              purpose={ele.purpose}
              name={ele.name}
              title={ele.title}
              address={ele.address}
              phone={ele.phone}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Event;
