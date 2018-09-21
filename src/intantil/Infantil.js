import React from 'react'
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Infatil = () => {

    return (
        <div>

            <NavBar />

            {/* Page Content */}
            <Pulse duration={3000}>
                <div className="container">
                    {/* Introduction Row */}
                    <h1 className="my-4">CULTO INFANTIL
                </h1>
                    <h2>Classinhas aos Domingos</h2>
                    <p>"Mas Jesus lhes ordenou: “Deixai vir a mim as crianças, não as impeçais, pois o Reino dos céus pertence aos que se tornam semelhantes a elas". Mt  19.14</p>
                </div>
            </Pulse>
            <div className="container">
                <div className="row">
                    <Fade left duration={2000}>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/img/infantil/kids1.jpg" alt="" /></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={2000}>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/img/infantil/kids2.jpg" alt="" /></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade left duration={2000}>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/img/infantil/kids3.jpg" alt="" /></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={2000}>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/img/infantil/kids4.jpg" alt="" /></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade left duration={2000}>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/img/infantil/kids5.jpg" alt="" /></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={2000}>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/img/infantil/kids6.jpg" alt="" /></a>
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* Introduction Row */}
                <div className="center">
                    <h1 className="my-4">FAÇA PARTE</h1>
                    <p>Quer fazer parte dessa equipe, entre em contato com Hanay.</p>
                    <p>Após o louvor as crianças vão para as classinhas, crianças até 10 anos.</p>
                </div>
            </div>
            {/* /.container */}
            <br />
            <br />

            <Fade duration={3000}>
                <Footer />
            </Fade>
        </div>

    )

}

export default Infatil