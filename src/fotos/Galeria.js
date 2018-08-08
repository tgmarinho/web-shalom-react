import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';


const Galeria = () => {

    return (
        <div>

            <NavBar />

            <div className="container">
                <h1 className="my-4 text-center text-lg-left">Galeria de Fotos da Shalom</h1>
                <Scroll>

                    <div className="row text-center text-lg-left">
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/1.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/2.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/3.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/3.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/4.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/5.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/14.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/7.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/8.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/9.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/10.jpg" alt />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/img/galeria/11.jpg" alt />
                            </a>
                        </div>
                        
                        
                        <div className="container">
                            <a href="https://www.facebook.com/pg/avivamentoshalom/photos/" target="_BLANK" className="btn btn-dark">+ Fotos</a>
                        </div>
                    </div>
                </Scroll>
            </div>

            <Footer />
        </div>

    )

}

export default Galeria