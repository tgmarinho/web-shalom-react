import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Scroll from './Scroll'
import { topMusics } from './topMusics'
import MusicList from './MusicList'

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

                    <MusicList musics={topMusics} />

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