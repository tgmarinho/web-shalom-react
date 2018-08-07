import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// import "/css/ministerios/css/2-col-portfolio.css"
//TODO deixar a imagem redonda e ver se foi usado o jquery, ver o repo em html/js/css

const Louvor = () => {

    return (
        <div>

            <NavBar />

            {/* Page Content */}
            <div className="container">
                {/* Introduction Row */}
                <h1 className="my-4">ADORAÇÃO AO SENHOR
      <small>Digno &amp; Santo És</small>
                </h1>
                <p>Equipe de Louvor da Shalom</p>
                <p><a href="./musica.html"> As 20+ músicas tocadas na Shalom</a></p>
                {/* Team Members Row */}
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="my-4">Nossa equipe</h2>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/mayk.jpg" alt />
                        <h3>Maykon Miguel
          <small>Guitarra</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/samer.jpg" alt />
                        <h3>Samer Murad
          <small>Violão</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/daniel.jpg" alt />
                        <h3>Daniel Rodrigues
          <small>Bateria</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/luana.jpg" alt />
                        <h3>Luana Bortolon
          <small>Bateria</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/carla.jpg" alt />
                        <h3>Carla Suzana
          <small>Líder / Vocal</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/fabiana.jpg" alt />
                        <h3>Fabiana Bortolon
          <small>Vocal</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/hanai_ok.jpg" alt />
                        <h3>Hanay
          <small>Vocal</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="/img/louvor/valdir2.jpg" alt />
                        <h3>Valdir Nascimento
          <small>Violão / Vocal</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt />
                        <h3>Jamille Cruz
          <small>Vocal</small>
                        </h3>
                    </div>
                    <div className="col-lg-4 col-sm-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt />
                        <h3>Silvana Maria
          <small>Vocal</small>
                        </h3>
                    </div>
                </div>
                {/* Introduction Row */}
                <div className="center">
                    <h1 className="my-4">FAÇA PARTE
      </h1>
                    <p>Quer fazer parte dessa equipe, entre em contato com a Carla Suzana.</p>
                    <p>Estamos tendo aula de canto!</p>
                    <p>Embreve, os vídeos das músicas mais tocadas na Shalom!</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/louvor/equipe.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/louvor/equipe2.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/louvor/equipe3.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="/img/louvor/equipe4.jpg" alt /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.container */}
            <br />
            <br />

            <Footer />

        </div>

    )

}

export default Louvor