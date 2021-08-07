import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { topMusics } from "./topMusics";
import MusicList from "./MusicList";
import Fade from "react-reveal/Fade";
import "tachyons";

const Musics = () => {
  return (
    <div>
      <NavBar />
      <Fade duration={7000}>
        <div className="tc">
          <h2 className="f1">As músicas mais tocadas na Shalom</h2>
          <div>
            <a
              href="https://www.youtube.com/watch?v=j4XERp65uAM&list=PLVmmUbMkc13WV-jnj8AcQO0Yek9mo4wp8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quer ouvir todas elas em sequência no youtube? Clique aqui!
            </a>
          </div>

          <MusicList musics={topMusics} />

          <hr className="light" />
          <div className="tc">
            <h3 className="f1">
              <a
                href="https://www.youtube.com/watch?v=j4XERp65uAM&list=PLVmmUbMkc13WV-jnj8AcQO0Yek9mo4wp8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quer ouvir todas elas em sequência no youtube? Clique aqui!
              </a>
            </h3>
            <hr className="light" />
          </div>
        </div>
      </Fade>

      <Fade duration={3000}>
        <Footer />
      </Fade>
    </div>
  );
};

export default Musics;
