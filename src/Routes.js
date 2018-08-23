import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./principal/Home";
import Musics from "./musics/Musics";
import Palavra from "./palavra/Palavra"
import Louvor from "./Louvor/Louvor";
import Infatil from "./intantil/Infantil";
import Lirio from "./lirio-dos-vales/Lirio";
import Meetup from "./meetup/Meetup";
import Galeria from "./fotos/Galeria";
import Lyrics from "./lyrics/Lyrics"

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/musicas" component={Musics} />
      <Route path="/palavra/equipe" component={Palavra} />
      <Route path="/louvor/equipe" component={Louvor} />
      <Route path="/infantil/equipe" component={Infatil} />
      <Route path="/lirio-dos-vales/equipe" component={Lirio} />
      <Route path="/meetup" component={Meetup} />
      <Route path="/fotos" component={Galeria} />
      <Route path="/letrasDasMusicas" component={Lyrics} />
  
    </div>
  </Router>
);
