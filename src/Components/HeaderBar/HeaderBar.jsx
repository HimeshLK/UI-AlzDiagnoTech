import React from "react";
import { NavLink } from "react-router-dom";

function HeaderBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <span className="navbar-brand mb-0 h1 col-md-8">  </span>

      <ul className="navbar-nav col-md-4">
       
       {/* Book Your Appointment */}
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="font-weight-bold"
            exact
            to="/"
          >
            Book Your Appointment
          </NavLink>
        </li>
        
        {/* View Your Appointment */}
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="font-weight-bold"
            to="/NameList"
          >
            View Your Appointment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderBar;
