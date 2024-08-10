import React from "react";
import "./GeneralStyles.css";
import SideBar from "./SideBar";

function Courses() {
  return (
    <>
     <div>
          <SideBar/>
    </div>
    <div className="dashboard__container">
      <h1 className="header">Courses</h1>
      <div className="message__table__container">
          <table className="message__table">
            <thead>
              <tr>
                <th>Cousre Title</th>
                <th>course Description</th>
                <th>course Price</th>
                <th>course Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                <td>I said something</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                <td>I said something</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                <td>I said something</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                <td>I said something</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                <td>I said something</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                <td>I said something</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </>
  );
}

export default Courses;
