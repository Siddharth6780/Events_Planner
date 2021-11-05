import React, { useState } from "react";

const AddEvents = () => {
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [purpose, setPurpose] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  async function OnSummit(e) {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_INSERT_EVENTS;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          name,
          purpose,
          address,
          phone,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Err occured");
    }
  }
  return (
    <>
      <div className="addEvents">
        <div className="addEvents-triangle"></div>

        <h2 className="addEvents-header">Add Event</h2>

        <form className="addEvents-container" onClick={OnSummit}>
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
            <input type="submit" value="Add" />
          </p>
        </form>
      </div>
    </>
  );
};

export default AddEvents;
