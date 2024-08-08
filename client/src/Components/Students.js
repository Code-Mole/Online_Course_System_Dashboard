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
      <h1>Students</h1>
    </div>
    </>
  );
}

export default Students;
