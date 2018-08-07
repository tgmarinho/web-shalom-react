import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      <header className="cabecalhoPrincipal">
        <div className="container">
          <h1 className="cabecalhoPrincipal-titulo">
            <Link
              to="/"
            >
              Shalom
            </Link>

          </h1>
          <nav className="cabecalhoPrincipal-nav">

            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/palavra/equipe"
            >
              Palavra
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/louvor/equipe"
            >
              Louvor
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/infantil/equipe"
            >
              Infantil
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/lirio-dos-vales/equipe"
            >
              Lírio dos Vales
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/meetup/equipe"
            >
              Meetup
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/musicas"
            >
              Músicas
            </Link>
            <Link
              className="cabecalhoPrincipal-nav-link"
              to="/fotos"
            >
              Fotos
            </Link>
          </nav>
        </div>
      </header>
    </div>


  );

  // return (
  //   <header className="sans-serif">
  //     {/* <div className="cover bg-left bg-center-l" style={{ backgroundImage: 'url(http://mrmrs.github.io/photos/u/011.jpg)' }}> */}
  //     <div className="bg-black-60 pb5 pb2-m pb3-l">
  //       <nav className="dt w-100 mw8 center">
  //         <div className="dtc w2 v-mid pa3">
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/"
  //           >
  //             Shalom
  //           </Link>
  //         </div>
  //         <div className="dtc v-mid tr pa3">
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/palavra/equipe"
  //           >
  //             Palavra
  //           </Link>
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/louvor/equipe"
  //           >
  //             Louvor
  //           </Link>
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/infantil/equipe"
  //           >
  //             Infantil
  //           </Link>
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/lirio-dos-vales/equipe"
  //           >
  //             Lírio dos Vales
  //           </Link>
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/meetup/equipe"
  //           >
  //             Meetup
  //           </Link>
  //           <Link
  //             className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
  //             to="/musicas"
  //           >
  //             Músicas
  //           </Link>
  //         </div>
  //       </nav>

  //       {/* </div> */}
  //     </div>
  //   </header>
  // );
};

export default NavBar;
