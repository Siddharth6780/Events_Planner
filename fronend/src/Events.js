import React, { useEffect, useState } from "react";
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
