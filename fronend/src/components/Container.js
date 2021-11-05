import React, { useEffect } from "react";
import "./style.css";

const Container = ({ purpose, name, title, address, phone }) => {
  return (
    <>
        <div className="col-md-4">
          <div className="card my-3">
            <div className="card-body main_container">
              <div className="d-flex flex-column">
                <h4 className="card-title">{title}</h4>
              </div>
              <div className="d-flex flex-column">
                <table className="table main_container">
                  <tbody>
                    <tr>
                      <th>Purpose: </th>
                      <td>{purpose}</td>
                    </tr>
                    <tr>
                      <th>Name: </th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th>Address: </th>
                      <td>{address}</td>
                    </tr>
                    <tr>
                      <th>Phone No.: </th>
                      <td>{phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Container;
