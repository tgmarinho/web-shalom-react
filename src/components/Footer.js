import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fragment>
      <Fade>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 text-center">
                <h4>
                  <strong>
                    <a href="#">Igreja Batista do Avivamento Shalom</a>
                  </strong>
                </h4>
                <span className="text-muted">
                  <a
                    href="https://goo.gl/maps/PRCvJ8rypt32"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visite-nos
                  </a>
                </span>
                <p>
                  Rua Duque de Caxias, 76
                  <br />
                  Vila Sulmat, Dourados/MS
                  <br />
                  CEP 79806-080
                </p>
                <p>
                  <strong>Conta Bancária: Sicoob</strong>
                  <br />
                  Cooperativa: 4447
                  <br />
                  Conta: 11.494-4
                  <br />
                  PIX/CNPJ:{" "}
                  <a href="#">
                    <span
                      onClick={() =>
                        navigator.clipboard.writeText("03549481000187")
                      }
                    >
                      03.549.481/0001-87
                    </span>
                  </a>
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-envelope-o fa-fw" />{" "}
                    <a href="mailto:avivamentoshalom@gmail.com">
                      avivamentoshalom@gmail.com
                    </a>
                  </li>
                </ul>
                <br />
                <ul className="list-inline">
                  <li>
                    <a
                      href="https://www.facebook.com/avivamentoshalom/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook fa-fw fa-3x" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC2wcGpgGrbr84Po3Xxly1Ag"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-youtube fa-fw fa-3x" />
                    </a>
                  </li>
                </ul>
                <hr className="small" />
                <p className="text-muted">
                  Site desde 2017 - última atualização 06/03/2022 às 19h por{" "}
                  <a
                    href="http://tgmarinho.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @tgmarinho
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <a id="to-top" href="#top" className="btn btn-dark btn-lg">
            <i className="fa fa-chevron-up fa-fw fa-1x" />
          </a>
        </footer>
      </Fade>
    </Fragment>
  );
};

export default Footer;
