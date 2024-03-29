import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal";

const Services = () => {
  return (
    <Fragment>
      <Fade duration={5000}>
        {/* The circle icons use Font Awesome's stacked icon classes. For more information, visit http://fontawesome.io/examples/ */}
        <section id="ministerios" className="services bg-primary">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-10 col-lg-offset-1">
                <h2>Ministérios</h2>
                <hr className="small" />
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-paypal fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Palavra</strong>
                      </h4>
                      <p>Pra. Lia Oliveira e equipe</p>
                      {/* <Link to="/palavra/equipe" className="btn btn-light">
                        Equipe
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-music fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Louvor e Adoração</strong>
                      </h4>
                      <p>Hanay e equipe</p>
                      {/* <Link to="/louvor/equipe" className="btn btn-light">
                        Equipe
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-child fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Infantil</strong>
                      </h4>
                      <p>Silvana e equipe</p>
                      {/* <Link to="/infantil/equipe" className="btn btn-light">
                        Equipe
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-gamepad fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Teens</strong>
                      </h4>
                      <p>Dinamene e equipe</p>
                      {/* <a href="#" className="btn btn-light">
                        Equipe
                      </a> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-shield fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Universidade da Família</strong>
                      </h4>
                      <p>Marily e equipe</p>
                      {/* <a href="#" class="btn btn-light">Equipe</a> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-thumbs-o-up fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Introdução</strong>
                      </h4>
                      <p>Marily</p>
                      {/* <a href="#" class="btn btn-light">Leia mais</a> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-camera fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Mídia</strong>
                      </h4>
                      <p>Roberson, Jacqueline e equipe</p>
                      {/* <a href="#" class="btn btn-light">Leia mais</a> */}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-play-circle fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Áudio</strong>
                      </h4>
                      <p>Felipe e equipe</p>
                      {/* <a href="#" class="btn btn-light">Leia mais</a> */}
                    </div>
                  </div>
                  {/* <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-home fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Lírio dos Vale</strong>
                      </h4>
                      <p>Alexandrina e Ivone</p>
                      <Link
                        to="/lirio-dos-vales/equipe"
                        className="btn btn-light"
                      >
                        Equipe
                      </Link>
                    </div>
                  </div> */}
                  {/* <div className="col-md-3 col-sm-6">
                    <div className="service-item">
                      <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-diamond fa-stack-1x text-primary" />
                      </span>
                      <h4>
                        <strong>Meetup</strong>
                      </h4>
                      <p>Teens</p>
                      <Link to="/meetup/equipe" className="btn btn-light">
                        Equipe
                      </Link>
                    </div>
                  </div> */}
                </div>
                {/* /.row (nested) */}
              </div>
              {/* /.col-lg-10 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
      </Fade>
    </Fragment>
  );
};

export default Services;
