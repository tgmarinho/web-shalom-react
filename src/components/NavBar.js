import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="cabecalhoPrincipal">
        <div className="container">
          <h1 className="cabecalhoPrincipal-titulo">
            <Link to="/">Shalom</Link>
          </h1>
          <nav className="cabecalhoPrincipal-nav">
            <Link className="cabecalhoPrincipal-nav-link" to="/palavra/equipe">
              Palavra
            </Link>
            <Link className="cabecalhoPrincipal-nav-link" to="/louvor/equipe">
              Louvor
            </Link>
            <Link className="cabecalhoPrincipal-nav-link" to="/infantil/equipe">
              Infantil
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/lirio-dos-vales/equipe"
            >
              Lírios do Vale
            </Link>
            <Link className="cabecalhoPrincipal-nav-link" to="/meetup/equipe">
              Meetup
            </Link>
            <Link className="cabecalhoPrincipal-nav-link" to="/musicas">
              Músicas
            </Link>
            <Link className="cabecalhoPrincipal-nav-link" to="/fotos">
              Fotos
            </Link>
            <Link className="cabecalhoPrincipal-nav-link" to="/download">
              Download
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/letrasDasMusicas"
            >
              Vamos cantar
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
