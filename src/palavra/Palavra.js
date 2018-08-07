import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Palavra = () => {

    return (
        <div>

            <NavBar />

            <div className="container">

                <h1>Palavra</h1>
                <h3>Equipe Ministerial</h3>

                <div className="row">
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#">
                                <img className="card-img-top" src="/img/palavra/lia2.jpg" alt />
                            </a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Pastora Lia Oliveira</a>
                                </h4>
                                <p className="card-text">Presidente e fundadorada da Shalom, foi missionária em Serrita-PE e na Índia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#">
                                <img className="card-img-top" src="/img/palavra/adivaldo.jpg" alt />
                            </a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Sem. Adivaldo</a>
                                </h4>
                                <p className="card-text">Pregador da Palavra e obreiro da Shalom, auxiliar de capelania no HU.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>

    )

}

export default Palavra