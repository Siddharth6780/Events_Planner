import React from "react";

const Buttons = ({ button }) => {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary mx-1">
        {button}
      </button>
    </div>
  );
};

export default Buttons;
