import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Scroll from './Scroll';

import YouTube from 'react-youtube';
import 'tachyons';

const opts = {
    height: '345',
    width: '420',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
};

const Musics = () => {
    console.log('fui chamado e agora ')
    return (

        <div>
            <NavBar />


            <div className="container">
                <h2>As músicas mais tocadas na Shalom</h2>
                <div>
                    <a href="https://www.youtube.com/watch?v=j4XERp65uAM&list=PLVmmUbMkc13WV-jnj8AcQO0Yek9mo4wp8" target="_BLANK">
                        Quer ouvir todas elas em sequência no  youtube? Clique aqui!
      </a>
                </div>


                <Scroll>

                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                        <YouTube videoId="qJmO-tHl7yo" opts={opts} />
                        <div>
                            <h2>Pra  Sempre - Avivah</h2>
                            <p>Avivah</p>
                        </div>
                    </div>

                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>

                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>




                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                        <YouTube videoId="j4XERp65uAM" opts={opts} />
                        <div>
                            <h3>Luz do Mundo</h3>
                            <p>Vineyard</p>
                        </div>
                    </div>

                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                        <YouTube videoId="HvmrBpnn0Ig" opts={opts} />
                        <div>
                            <h3>Tu és Bom</h3>
                            <p>Fred Arrais</p>
                        </div>
                    </div>


                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                        <YouTube videoId="-8u764hTRSw" opts={opts} />

                        <div>
                            <h2>Quero conhecer Jesus</h2>
                            <p>Cia. Salt</p>
                        </div>
                    </div>



                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>

                        <YouTube videoId="YwtdA--0QmI" opts={opts} />
                        <div>
                            <h2> Para que entre o Rei da Glória</h2>
                            <p>Morada</p>
                        </div>
                    </div>


                    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                        <YouTube videoId="CxTGfqKV4xU" opts={opts} />

                        <div>
                            <h2> A tua cruz </h2>
                            <p>Cordeiro  Santo - Filhos do Homem </p>
                        </div>
                    </div>


                    {/* Nada além do sangue - Fernandinho */}
                    <YouTube videoId="k-ZuAJd2NbM" opts={opts} />
                    {/* Teu amor não falha - Nívea Soares */}
                    <YouTube videoId="uOK4JZlHLtI" opts={opts} />
                    {/* Majestade Santa -  Nova Geração */}
                    <YouTube videoId="epgZdOt7skA" opts={opts} />
                    {/* Agnus day - David Quinlan */}
                    <YouTube videoId="GfE3bVIH0I8" opts={opts} />
                    {/* Vitória no Deserto  - Aline Barros */}
                    <YouTube videoId="ZD3A_XabCRk" opts={opts} />
                    {/* Galileu - Fernandinho */}
                    <YouTube videoId="XfTRhuBHnZA" opts={opts} />
                    {/* Maranata - Avivah */}
                    <YouTube videoId="1DFltZN5mAE" opts={opts} />
                    {/* Pai nosso - Pedras Vivas */}
                    <YouTube videoId="oUgmDMZ49vg" opts={opts} />
                    {/* Lá na Cruz - Pedras Vivas */}
                    <YouTube videoId="uNbjepPByqw" opts={opts} />
                    {/* Creio que  Tu És a cura - Gabriela Rocha */}
                    <YouTube videoId="2I2TNbbgweo" opts={opts} />
                    {/* Canção do Apocalipse  - Avivah */}
                    <YouTube videoId="Thpui3amzhA" opts={opts} />
                    {/* Nosso Deus - Gui Rebustine */}
                    <YouTube videoId="dq-KDQDsGFw" opts={opts} />
                    {/* Lugar Secreto -  Gabriela Rocha */}
                    <YouTube videoId="AuybkVKgDvg" opts={opts} />
                    {/* Lindo lindo  és - Kingdom */}
                    <YouTube videoId="tjgFHeI9JGs" opts={opts} />
                    {/* Estrela da manhã - Lucas Souza */}
                    <YouTube videoId="HnFUpGZl1qg" opts={opts} />


                </Scroll>

                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h3 className="section-heading text-white">
                            <a href="https://www.youtube.com/watch?v=j4XERp65uAM&list=PLVmmUbMkc13WV-jnj8AcQO0Yek9mo4wp8" target="_BLANK">
                                Quer ouvir todas elas em sequência no  youtube? Clique aqui!
          </a>
                        </h3>
                        <hr className="light" />
                    </div>
                </div>


            </div>

            <Footer />

        </div>
    )

}

export default Musics