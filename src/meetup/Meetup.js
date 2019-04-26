import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Meetup = () => {
  return (
    <div>
      <NavBar />
      <Fade duration={3000}>
        <div className="container">
          <h1 className="my-4">
            Meetup JS |<small>Meetup Teens Shalom</small>
          </h1>
          <p>
            Encontro de Juniores e Adolescentes que se reunem em nome de Jesus
            para viver o melhor de Deus.
          </p>
          <div className="center">
            <h1 className="my-4">PARTICIPE!!</h1>
            <p>
              Quer participar dos encontros? Você é muito bem vindo, fale com
              Dina e Jhon aqui na Shalom
            </p>
            {/* <a href="https://chat.whatsapp.com/LaMS3n5kXdIBJJaX1Qqlmg"><h4>Clique aqui e entre no nosso grupo! \o/</h4></a> */}
            <br />
            <br />
          </div>
        </div>
      </Fade>
      <div className="container">
        <Fade duration={4000}>
          <div className="row">
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="/img/meetupteens/meetupteens4.jpeg"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="/img/meetupteens/meetupteens1.jpeg"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="/img/meetupteens/meetupteens2.jpeg"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="/img/meetupteens/meetupteens3.jpeg"
                    alt
                  />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Fade duration={3000}>
        <Footer />
      </Fade>
    </div>
  );
};

export default Meetup;
