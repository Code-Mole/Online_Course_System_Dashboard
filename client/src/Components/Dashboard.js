import React from "react";
import "./Dashboard.css";
import SideBar from "./SideBar";
import Cards from "./Cards/Cards";

function Dashboard() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="dashboard__containerMain">
        <h1>Dashboard</h1>
        <input type="date" />
        <div className="dashboard__division">
          <div className="dashboard__left">
            <div className="dashboard__left__top">
              <Cards />
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
      </div>
    </>
  );
}

export default Dashboard;
