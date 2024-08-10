import React from "react";
import "./GeneralStyles.css";
import SideBar from "./SideBar";

function Messages() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="dashboard__container">
        <h1 className="header">Messages From Clients</h1>
        <div className="message__table__container">
          <table className="message__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone-Number</th>
                <th>Email</th>
                <th>Message</th>
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

export default Messages;
