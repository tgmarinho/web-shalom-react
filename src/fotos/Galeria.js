import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Photos } from "./Photos";

const Galeria = () => {
  return (
    <Fragment>
      <NavBar />
      <h1 className="my-4 text-center text-lg-left">
        Galeria de Fotos da Shalom
      </h1>
      <Photos />
      {/* <div className="container">
                <a href="https://www.facebook.com/pg/avivamentoshalom/photos/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">+ Fotos</a>
            </div> */}
      <Fade duration={3000}>
        <Footer />
      </Fade>
    </Fragment>
  );
};

export default Galeria;
