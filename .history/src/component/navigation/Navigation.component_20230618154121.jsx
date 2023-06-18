import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="header flex items-center justify-center gap-x-6 text-white py-10 mb-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Navigation;
