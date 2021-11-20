import { useState } from "react";
import EventsContext from "./EventsContext";

const NoteState = (props) => {
  const Eventsinitial = [];
  const [Events, setEvents] = useState(Eventsinitial);

  const getMyEvents = async () => {
    let url = "http://localhost:3000/events/myevents";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4Zjk1YjAyMDljNmNiZWY1NTI1ODE2In0sImlhdCI6MTYzNzMwNTg4MX0.Kjc3Sw0mjOufe4ofoqyR5XPEC_oEgaw07Y70Nq70NkM",
      },
    });
    const data = await res.json();
    if (data.success === false) {
      alert(data.message);
    } else {
      setEvents(data.message);
    }
  };

  const deleteEvents = async (id) => {
    let url = `http://localhost:3000/events/deleteEvent/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4Zjk1YjAyMDljNmNiZWY1NTI1ODE2In0sImlhdCI6MTYzNzMwNTg4MX0.Kjc3Sw0mjOufe4ofoqyR5XPEC_oEgaw07Y70Nq70NkM",
      },
    });
    const data = await res.json();
    if (data.success === false) {
      alert(data.message);
    } else {
      const newEvents = Events.filter((ele) => {
        return ele._id !== id;
      });
      setEvents(newEvents);
    }
  };

  const editEvents = async (id, title, purpose, name, address, phone) => {
    let url = `http://localhost:3000/events/updateEvents/${id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4Zjk1YjAyMDljNmNiZWY1NTI1ODE2In0sImlhdCI6MTYzNzMwNTg4MX0.Kjc3Sw0mjOufe4ofoqyR5XPEC_oEgaw07Y70Nq70NkM",
      },
      body: JSON.stringify({ id, title, purpose, name, address, phone }),
    });
    const data = await res.json();
    if (data.success === false) {
      alert(data.message);
    } else {
      let newEvents = JSON.parse(JSON.stringify(Events));
      for (let index = 0; index < newEvents.length; index++) {
        const element = newEvents[index];
        if (element._id === id) {
          newEvents[index].title = title;
          newEvents[index].purpose = purpose;
          newEvents[index].name = name;
          newEvents[index].address = address;
          newEvents[index].phone = phone;
          break;
        }
      }
      setEvents(newEvents);
    }
  };

  return (
    <EventsContext.Provider
      value={{ Events, setEvents, deleteEvents, editEvents, getMyEvents }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};
export default NoteState;
