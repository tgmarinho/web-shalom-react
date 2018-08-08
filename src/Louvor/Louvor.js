import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LouvorCard from "./LouvorCard";
import { teamLouvor } from "./teamLouvor";
import PhotoCard from "../components/PhotoCard";
import FacaParte from "../components/FacaParte";

const Louvor = () => {
  return (
    <div>
      <NavBar />

      {/* Page Content */}
      <div className="tc">
        {/* Introduction Row */}
        <h1 className="my-4">
          ADORAÇÃO AO SENHOR
          <small>Digno &amp; Santo És</small>
        </h1>
        <p>Equipe de Louvor da Shalom</p>
        <p>
          <a href="./musica.html"> As 20+ músicas tocadas na Shalom</a>
        </p>
        {/* Team Members Row */}
        <div className="row">
          <div className="col-lg-12">
            <h2 className="my-4">Nossa equipe</h2>
          </div>

          {teamLouvor.map((member, id) => {
            return (
              <LouvorCard
                key={id}
                name={member.name}
                role={member.role}
                photo={member.photo}
              />
            );
          })}
        </div>

        <FacaParte
          title="FAÇA PARTE"
          text="Quer fazer parte dessa equipe, entre em contato com a Carla Suzana.
                    Estamos tendo aula de canto!"
        />
      </div>
      <div className="tc">
        <div className="row">
          <PhotoCard photo="/img/louvor/equipe.jpg" />
          <PhotoCard photo="/img/louvor/equipe2.jpg" />
          <PhotoCard photo="/img/louvor/equipe3.jpg" />
          <PhotoCard photo="/img/louvor/equipe4.jpg" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Louvor;
