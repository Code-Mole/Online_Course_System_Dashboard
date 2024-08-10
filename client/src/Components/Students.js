import React from "react";
import "./GeneralStyles.css";
import SideBar from "./SideBar";

function Students() {
  return (
    <>
     <div>
          <SideBar/>
    </div>
    <div className="dashboard__container">
      <h1 className="header">Students</h1>
      <div className="message__table__container">
          <table className="message__table">
            <thead>
              <tr>
                <th>first Name</th>
                <th>last Name</th>
                <th>Email</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                
              </tr>
              <tr>
                <td>John Doe</td>
                <td>0503822323</td>
                <td>john@example.com</td>
                
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </>
  );
}

export default Students;
