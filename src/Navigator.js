import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Navigator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuToggle: ''
        }
    }


    // Closes the sidebar menu
    // $("#menu-close").click(function(e) {
    //     e.preventDefault();
    //     $("#sidebar-wrapper").toggleClass("active");
    // });
    // // Opens the sidebar menu
    // $("#menu-toggle").click(function(e) {
    //     e.preventDefault();
    //     $("#sidebar-wrapper").toggleClass("active");
    // });

    handleMenuToggle = async (e) => {
        e.preventDefault();
        this.state.menuToggle === 'active' ? (this.setState(() => {
            this.setState({ menuToggle: '' })
        })) : (this.setState(() => {
            this.setState({ menuToggle: 'active' })
        }))
    }

     handleMenuClose = async (e) => {
        e.preventDefault();
        this.setState(() => {
            this.setState({ menuToggle: '' })
        })

    }


    render() {
        return (
            <div>
                    <a id='menu-toggle' href='#' onClick={this.handleMenuToggle} className={'btn btn-dark btn-lg toggle'}><i className='fa fa-bars'></i></a>
                    <nav id='sidebar-wrapper' className={this.state.menuToggle}>
                        <ul className='sidebar-nav'>
                            <a id='menu-close' onClick={this.handleMenuClose} href='#' className='btn btn-light btn-lg pull-right toggle'><i className='fa fa-times'></i></a>
                            <li className='sidebar-brand'>
                                <Link to='#top' onClick={this.handleMenuClose} >SHALOM</Link>
                            </li>
                            <li >
                                <Link to='#top' onClick={this.handleMenuClose}>Início</Link>
                            </li>
                            <li>
                                <Link to='#sobre' onClick={this.handleMenuClose}>Sobre</Link>
                            </li>
                            <li>
                                <Link to='#ministerios' onClick={this.handleMenuClose}>Ministério</Link>
                            </li>
                            <li>
                                <Link to='#agenda' onClick={this.handleMenuClose}>agenda</Link>
                            </li>
                            <li>
                                <Link to='#fotos' onClick={this.handleMenuClose}>Fotos</Link>
                            </li>
                            <li>
                                <Link to='#contato' onClick={this.handleMenuClose}>Contato</Link>
                            </li>
                            <li>
                                <Link to='/musicas'>Músicas</Link>
                            </li>

                        </ul>
                    </nav>

                   
                </div>

        )

    }

}

export default Navigator