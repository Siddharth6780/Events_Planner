import React from "react";
import "./style.css"

const Container = () => {
  return (
    <>
      <div className="d-flex">
        <div className="col-md-3">
          <div className="card my-3">
            <div className="card-body">
              <div className="d-flex flex-column">
                <h4 className="card-title">Rahul Events</h4>
              </div>
              <div className="d-flex flex-column">
                <p className="card-text"><b>Purpose</b>: Marriage</p>
                <p className="card-text"><b>Name</b>: Rahul Singh</p>
                <p className="card-text"><b>Address</b>: Ranchi,Jharkahnd</p>
                <p className="card-text"><b>Phone No.</b>: 9342316782</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
