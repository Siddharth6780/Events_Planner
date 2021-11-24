import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const ButtonsContainer = () => {
  const [Button, setButton] = useState([]);
  const getButtons = async () => {
    const url = process.env.REACT_APP_ALL_EVENTS;
    const res = await fetch(url);
    const data = await res.json();
    setButton(data.message);
  };

  useEffect(() => {
    getButtons();
  }, []);

  const btnContainer = new Set();
  Button.map((ele) => {
    btnContainer.add(ele.title);
  });
  const it = [...btnContainer];

  return (
    <div>
      <div className="row my-3 d-flex main_container">
        <div className="d-flex justify-content-center mr-auto p-2 mx-2">
          {it.map((ele) => {
            return <Buttons button={ele} />;
          })}
        </div>

        <Link className="nav-link" to="/addEvents">
          <button type="button" className="btn btn-outline-primary mx-2">
            Add Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonsContainer;
