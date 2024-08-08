import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
import Courses from "./Components/Courses.js";
import Students from "./Components/Students.js";
import Tutors from "./Components/Tutors.js";
import Messages from "./Components/Messages.js";
import AddCourses from "./Components/AddCourses.js";
import Home from "./Components/Home.js";


function App() {
  return (
    <>
      <div className="App">
        <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Tutors" element={<Tutors />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/addcourses" element={<AddCourses />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
