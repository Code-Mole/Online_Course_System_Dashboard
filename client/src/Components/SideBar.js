import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./SideBar.css";
// import MenuIcon from "@mui/icons-material/Menu";

function SideBar() {
  
 

  return (
    <div className="sideBar__container">
      <nav className="navbar">
        <div className="sideBar__logo">
          <img className="logo" src="./images/logo.png" alt="logo.pic" />
          <h1>
            EduEmpower <span> Academy</span>
          </h1>
        </div>
        
        <ul id="linksContainer">
              <li>
                <NavLink className="NavLink" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLink" to="/students">
                  Students
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLink" to="/tutors">
                  Tutors
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLink" to="/messages">
                  Messages <span id="Message__num">45</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLink" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="NavLink" to="/addCourses">
                  Add course
                </NavLink>
              </li>
              <div className="LogOut">
              <li>
                <NavLink className="NavLink" to="/">
                  LogOut
                </NavLink>
              </li>
              </div>
      
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
