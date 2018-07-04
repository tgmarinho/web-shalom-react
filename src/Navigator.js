import React from 'react'
import * as $ from 'jquery'



const Navigator = props => {
    return (
        <div>
            <a id='menu-toggle' href='#' className='btn btn-dark btn-lg toggle'><i className='fa fa-bars'></i></a>
            <nav id='sidebar-wrapper'>
                <ul className='sidebar-nav'>
                    <a id='menu-close' href='#' className='btn btn-light btn-lg pull-right toggle'><i className='fa fa-times'></i></a>
                    <li className='sidebar-brand'>
                        <a href='#top' onClick={$("#menu-close").click()}>SHALOM</a>
                    </li>
                    <li>
                        <a href='#top'>Início</a>
                    </li>
                    <li>
                        <a href='#sobre'>Sobre</a>
                    </li>
                    <li>
                        <a href='#ministerios'>Ministério</a>
                    </li>
                    <li>
                        <a href='#agenda' className='calendar'>Agenda</a>
                    </li>
                    <li>
                        <a href='#fotos'>Fotos</a>
                    </li>
                    <li>
                        <a href='#contato'>Contato</a>
                    </li>
                    <li>
                        <a href='%PUBLIC_URL%/ministerio/louvor/musica.html'>Músicas</a>
                    </li>

                </ul>
            </nav>


        </div>
    )
}

export default Navigator