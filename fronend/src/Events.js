import React, { useEffect, useState } from "react";
import Container from "./components/Container";

const Events = () => {
  const [Events, setEvents] = useState({});
  async function getAllNote() {
    let url = "http://localhost:3000/events";
    const res = await fetch(url);
    const data = await res.json();
    console.log(typeof(data))
    setEvents(data);

  }
  useEffect(() => {
    getAllNote();
  }, []);

  return (
    <>
      <Container/>
    </>
  );

  
};

export default Events;
