import React from "react";
import { Link} from "react-router-dom";

const Buttons = () => {
    const handleOnclick = () =>{
    
    }
  return (
    <div>
      <div className="row my-3 d-flex main_container">
        <div className="d-flex justify-content-center mr-auto p-2 mx-2">
          <button
            type="button"
            className="btn btn-outline-primary mx-1"
            onClick={handleOnclick}
          >
            Party
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            Marriage
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            Reunion
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            Birthday
          </button>
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

export default Buttons;
