import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {toast} from 'react-toast';

const url = "https://avivamentoshalom.com";
const message = "Copiado com sucesso!";

const notify = () => toast.success(message);

const copy = (content) => {
    navigator.clipboard.writeText(content);
    notify()      
}

  const shareLink = (e) => {
    if (navigator.canShare) {
       navigator.share({
            url,
            title: "Shalom",
            text: "Acesse o site da Igreja Batista do Avivamento Shalom"
        })
        .then(() => { console.log("Shared"); })
        .catch((error) => { copy(url) });
    
    } else {
      navigator.clipboard.writeText(url);
        copy(url)      
    }

  }

const NavBar = () => {





  return (
    <div>
      <header className="cabecalhoPrincipal">
        <div className="container">
          <h1 className="cabecalhoPrincipal-titulo">
            <Link to="/">Shalom</Link>
          </h1>
          <nav className="cabecalhoPrincipal-nav">
            <Link className="cabecalhoPrincipal-nav-link" to="/">
              Início
            </Link>
            {/* <Link className="cabecalhoPrincipal-nav-link" to="/palavra/equipe">
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
            </Link> */}
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
            <a className="cabecalhoPrincipal-nav-link" href="javascript:void(0);" onClick={shareLink}>
                  <i className="fa fa-share-alt fa-fw fa-1x" />
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
