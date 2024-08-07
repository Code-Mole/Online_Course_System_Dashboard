import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
import Courses from "./Components/Courses.js";
import Students from "./Components/Students.js";
import Tutors from "./Components/Tutors.js";
import Messages from "./Components/Messages.js";
import SideBar from "./Components/SideBar.js";
import LogIn from "./Components/LogIn.js";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <SideBar />
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Tutors" element={<Tutors />} />
            <Route path="/Messages" element={<Messages />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
