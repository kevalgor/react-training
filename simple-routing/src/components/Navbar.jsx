import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "black" }
              : { textDecoration: "none", color: "gray" }
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "black" }
              : { textDecoration: "none", color: "gray" }
          }
        >
          <li>about</li>
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "black" }
              : { textDecoration: "none", color: "gray" }
          }
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
}
