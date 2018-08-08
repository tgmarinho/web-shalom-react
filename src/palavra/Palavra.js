import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation"
import PalavaCard from "./PalavraCard";
import { teamPalavra } from "./teamPalavra";

const Palavra = () => {
  return (
    <div>

      <NavBar />

      <div className="container">
        <Presentation title="Palavra" description="Equipe Ministerial" />

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
      </div>

      <Footer />

    </div>
  );
};

export default Palavra;
