import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const AddEvents = () => {
  let history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push("/users/login");
  }
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const OnSummit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_INSERT_EVENTS;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          name,
          purpose,
          address,
          phone,
          description,
          price,
          photo,
        }),
      });
      const data = await res.json();
      if (data.success === true) {
        toast.success("Event added");
        history.push("./myevents");
      } else {
        toast.error("Enter Correct Details");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };
  return (
    <>
      <div className="addEvents">
        <div className="addEvents-triangle"></div>

        <h2 className="addEvents-header">Add Event</h2>

        <form className="addEvents-container" onSubmit={OnSummit}>
          <p>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <input
              required={true}
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={purpose}
              placeholder="Purpose"
              onChange={(e) => setPurpose(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </p>
          <p>
            <input
              type="tel"
              value={phone}
              placeholder="Phone"
              pattern="[0-9]{10}"
              onChange={(e) => setPhone(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={photo}
              placeholder="Price"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </p>
          <p>
            <input type="submit" value="Add" />
          </p>
        </form>
      </div>
    </>
  );
};

export default AddEvents;
