import React, { Fragment } from "react";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import PalavaCard from "./PalavraCard";
import { teamPalavra } from "./teamPalavra";

const Palavra = () => {
  return (
    <Fragment>
      <NavBar />

      <div className="container">
        <Fade top left>
          <Presentation title="Palavra" description="Equipe Ministerial" />
        </Fade>
        <Pulse duration={2000}>
          <div className="row">
            {teamPalavra.map((person, id) => {
              return (
                <PalavaCard
                  key={id}
                  name={person.name}
                  bio={person.bio}
                  photo={person.photo}
                />
              );
            })}
          </div>
        </Pulse>
      </div>

      <Fade duration={3000}>
        <Footer />
      </Fade>
      
    </Fragment>
  );
};

export default Palavra;
