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
    </div>
    </>
  );
}

export default Courses;
