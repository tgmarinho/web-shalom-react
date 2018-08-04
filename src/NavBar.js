import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <ul className="sidebar-nav">
          <li>
            <Link to="/">
              Voltar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
