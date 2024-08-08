import React from "react";
import "./login.css";

function LogIn() {
  return (
    <div className="login__container">
      <form>
      <h1>Admin Login form</h1>
        <input
          type="email"
          placeholder="Enter Admin email"
          id="input__field"
          autoComplete="off"
          required
        />
        <input
          type="password"
          placeholder="Enter Admin password"
          id="input__field"
          required
        />
        <button type="submit" id="">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
