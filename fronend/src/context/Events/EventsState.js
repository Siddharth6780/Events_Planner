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
    let url = "https://backend-manage-in-minutes.onrender.com/events/myevents";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
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
    let url = `https://backend-manage-in-minutes.onrender.com/events/deleteEvent/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "auth-token": localStorage.getItem("token"),
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

  const editEvents = async (id, etitle, epurpose, ename, eaddress, ephone, edescription, eprice, ephoto) => {
    let url = `https://backend-manage-in-minutes.onrender.com/events/updateEvents/${id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ id, etitle, epurpose, ename, eaddress, ephone, edescription, eprice, ephoto }),
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
          newEvents[index].description = edescription;
          newEvents[index].price = eprice;
          newEvents[index].photo = ephoto;
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
