import React from "react";
import "./GeneralStyles.css";
import SideBar from "./SideBar";

function AddCourses() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="dashboard__container">
        <h1 className="header">+ AddCourses</h1>
        <div className="addCourse__form__container">
          <h2>Fill All Details To Add A Course </h2>
          <form>
            <input
              id="input__field"
              type="text"
              placeholder="Course Title"
              autoComplete="off"
              required
            />
            <input
              id="input__field"
              type="text"
              placeholder="Course Description"
              autoComplete="off"
              required
            />
            <input
              id="input__field"
              type="text"
              placeholder="Course Price"
              autoComplete="off"
              required
            />
            <input
              id="input__field"
              type="d"
              placeholder="Upload Course Image"
              autoComplete="off"
              required
            />
            <input
              id="input__field"
              type="text"
              placeholder="Course Rating between 1 to 5"
              autoComplete="off"
              required
            />
            <button type="submit">Add Course</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCourses;
