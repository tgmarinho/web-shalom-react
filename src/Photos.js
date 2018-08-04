import React from 'react';

const Photos = () => {

    return (
        <div>

            <div className="container">
                <br />
                <br />
                <br />
            </div>

            <section id="fotos" className="portfolio">
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1 text-center">
                            <h2>Fotos</h2>
                            <hr className="small" />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="portfolio-item">
                                        <a href="#">
                                            <img className="img-portfolio img-responsive" src="img/church/5.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="portfolio-item">
                                        <a href="#">
                                            <img className="img-portfolio img-responsive" src="img/church/4.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="portfolio-item">
                                        <a href="#">
                                            <img className="img-portfolio img-responsive" src="img/church/8.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="portfolio-item">
                                        <a href="#">
                                            <img className="img-portfolio img-responsive" src="img/church/9.jpg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* /.row (nested) */}
                            <a href="/fotos/galeria.html" className="btn btn-dark">Veja Mais Fotos</a>
                        </div>
                        {/* /.col-lg-10 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            {/* Call to Action */}
            <aside className="call-to-action bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>Nossa fanpage no Facebook com mais fotos e divulgações...</h3>
                            <a href="https://www.facebook.com/avivamentoshalom" className="btn btn-lg btn-dark">Facebook</a>
                        </div>
                    </div>
                </div>
            </aside>
        </div>

    )

}

export default Photos