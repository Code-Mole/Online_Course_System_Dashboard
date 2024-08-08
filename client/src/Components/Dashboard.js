import React from "react";
import "./Dashboard.css";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="dashboard__container">
        <h1>Dashboard</h1>
        <input type="date" />

        <div className="dashboard__left">
          <div className="dashboard__left__top">
          <div className="track__box1"></div>
          <div className="track__box2"></div>
          <div className="track__box3"></div>
          </div>
          <div className="dashboard__left__bottom">
            <h2>Recent Enrolled Courses</h2>
          </div>
          
        </div>
        <div className="dashboard__right">
          <div className="dashboard__right__top"></div>
          <div className="dashboard__right__bottom"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
