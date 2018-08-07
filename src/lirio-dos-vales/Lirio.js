import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Lirio = () => {

    return (
        <div>
<NavBar />
            <div className="container">

                <h1 className="my-4">Projeto Social
      <small>Lírios dos Vale</small>
                </h1>
                <div className="row">
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/lirio/alexandrina.jpg" alt /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Alexandrina</a>
                                </h4>
                                <p className="card-text">Assistente Social e líder do projeto.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/lirio/ivone.jpg" alt /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Ivone</a>
                                </h4>
                                <p className="card-text">Colaboradora e vice-líder do projeto.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <h1 className="my-4">FAÇA PARTE
      </h1>
                    <p>Quer fazer parte dessa equipe, entre em contato com a Alexandrina ou Ivone.</p>
                    <p>Estamos visitando o Lar dos Idosos nas sextas-feiras às 14h!</p>
                    <p>Temos grupo do Whatsapp para comunicações!</p>
                    {/* <p>Em breve o link do convite para  participar do grupo</p> */}
                    <br />
                </div>

            </div>

            <Footer/>

        </div>

    )

}

export default Lirio