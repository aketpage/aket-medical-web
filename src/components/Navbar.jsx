import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Aketzali
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
