import { useState } from "react";
import EventsContext from "./EventsContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const NoteState = (props) => {
  let history = useHistory();
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
      toast.error("Some error occurred");
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
      toast.error("Some error occurred");
    } else {
      const newEvents = Events.filter((ele) => {
        return ele._id !== id;
      });
      toast.success("Event deleted");
      setEvents(newEvents);
    }
  };

  const editEvents = async (id, etitle, epurpose, ename, eaddress, ephone) => {
    let url = `http://localhost:3000/events/updateEvents/${id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4Zjk1YjAyMDljNmNiZWY1NTI1ODE2In0sImlhdCI6MTYzNzMwNTg4MX0.Kjc3Sw0mjOufe4ofoqyR5XPEC_oEgaw07Y70Nq70NkM",
      },
      body: JSON.stringify({ id, etitle, epurpose, ename, eaddress, ephone }),
    });
    const data = await res.json();
    if (data.success === false) {
      toast.error("Some error occurred");
    } else {
      let newEvents = JSON.parse(JSON.stringify(Events));
      for (let index = 0; index < newEvents.length; index++) {
        const element = newEvents[index];
        if (element._id === id) {
          newEvents[index].title = etitle;
          newEvents[index].purpose = epurpose;
          newEvents[index].name = ename;
          newEvents[index].address = eaddress;
          newEvents[index].phone = ephone;
          break;
        }
      }
      toast.success("Event edited");
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
