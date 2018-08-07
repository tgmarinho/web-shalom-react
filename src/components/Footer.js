import React from 'react';

const Footer = () => {

    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1 text-center">
                            <h4><strong><a href="#">Igreja Batista do Avivamento Shalom</a></strong></h4>
                            <span className="text-muted">
                            <a href="https://goo.gl/maps/PRCvJ8rypt32" target="_BLANK">Visite-nos</a></span>
                            <p>Rua Duque de Caxias, 76
            <br />Vila Sulmat, Dourados/MS</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-phone fa-fw" /> (67) 3423-9804</li>
                                <li><i className="fa fa-envelope-o fa-fw" /> <a href="mailto:avivamentoshalom@gmail.com">avivamentoshalom@gmail.com</a>
                                </li>
                            </ul>
                            <br />
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/avivamentoshalom/" target="_BLANK"><i className="fa fa-facebook fa-fw fa-3x" /></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCEunYWfZZUyRLiy0WxEErVw" target="_BLANK"><i className="fa fa-youtube fa-fw fa-3x" /></a>
                                </li>
                                <li>
                                    <a href="https://chat.whatsapp.com/DQ1irY556cx5taDKAsGIRd" target="_BLANK"><i className="fa fa-whatsapp fa-fw fa-3x" /></a>
                                </li>
                            </ul>
                            <hr className="small" />
                            <p className="text-muted">Copyright © 2017 - <a href="http://tgmarinho.com" target="_BLANK">@tgmarinho</a> </p>
                        </div>
                    </div>
                </div>
                <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x" /></a>
            </footer>
        </div>

    )

}

export default Footer