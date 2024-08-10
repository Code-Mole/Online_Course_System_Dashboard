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
        <h1 className="header">Messages</h1>
      </div>
    </>
  );
}

export default Messages;
