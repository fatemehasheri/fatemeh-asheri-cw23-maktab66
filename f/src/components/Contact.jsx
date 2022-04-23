import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page">
      <h1>This is contact page</h1>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
      >
        go to contact page
      </NavLink>
      <br></br>
      <NavLink
        to="/invoice"
        style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
      >
        go to invoice page
      </NavLink>
    </div>
  );
};

export default Contact;
