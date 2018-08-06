import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const NavBar = () => {
  return (
    <header className="sans-serif">
      {/* <div className="cover bg-left bg-center-l" style={{ backgroundImage: 'url(http://mrmrs.github.io/photos/u/011.jpg)' }}> */}
      <div className="bg-black-60 pb5 pb2-m pb3-l">
        <nav className="dt w-100 mw8 center">
          <div className="dtc w2 v-mid pa3">
            <Link
              className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
              to="/"
            >
              Shalom
            </Link>
          </div>
          <div className="dtc v-mid tr pa3">
            <Link
              className="f3 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
              to="/"
            >
              Voltar
            </Link>
            {/* <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/">Pricing</a> */}
            {/* <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">About</a> */}
            {/* <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">Careers</a> */}
            {/* <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/">Shalom</a> */}
          </div>
        </nav>

        {/* </div> */}
      </div>
    </header>
  );
};

export default NavBar;
