import React, { useEffect } from "react";
import "./style.css";

const Container = () => {
  async function getAllNote() {
    let url = "http://localhost:3000/events";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
  useEffect(() => {
    getAllNote();
  }, [])
  return (
    <>
      <div className="d-flex">
        <div className="col-md-4">
          <div className="card my-3">
            <div className="card-body">
              <div className="d-flex flex-column">
                <h4 className="card-title">Rahul Events</h4>
              </div>
              <div className="d-flex flex-column">
                <table className="table">
                  <tr>
                    <th>Purpose: </th>
                    <td>Marriage</td>
                  </tr>
                  <tr>
                    <th>Name: </th>
                    <td>Rahul Singh</td>
                  </tr>
                  <tr>
                    <th>Address: </th>
                    <td>Ranchi,Jharkahnd</td>
                  </tr>
                  <tr>
                    <th>Phone No.: </th>
                    <td>9342316782</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
