import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="header flex items-center justify-center gap-x-6 text-white py-10 mb-5">
      <NavLink className="text-primary" to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </header>
  );
};

export default Navigation;
