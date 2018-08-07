import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Meetup = () => {

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="my-4">Meetup JS |
      <small>Meetup Jovens Shalom</small>
                </h1>
                <p>Encontro de Jovens que se reunem em nome de Jesus para viver o melhor de Deus.</p>
                <div className="center">
                    <h1 className="my-4">PARTICIPE!!
      </h1>
                    <p>Quer participar dos encontros? É para todos, entre em nosso grupo para ficar sabendo dos encontros...</p>
                    <a href="https://chat.whatsapp.com/LaMS3n5kXdIBJJaX1Qqlmg"><h4>Clique aqui e entre no nosso grupo! \o/</h4></a>
                    <br />
                    <br />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/meetup/meetup4.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/meetup/meetup1.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/meetup/meetup2.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/meetup/meetup5.jpg" alt /></a>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </div>

    )

}

export default Meetup