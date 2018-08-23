import React, { Component, Fragment } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Pulse from "react-reveal/Pulse";
import Footer from "../components/Footer";

import { Input, Form } from 'antd';

const { Search, TextArea } = Input;

const FormItem = Form.Item;

const key = "0efde0cb9c9f9dde0f3b8be3251063f0";


const getLyricsById = async (id) => {

    const queryById = `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`


    return await axios
        .get(
            queryById
        )
        .then(data => {
            console.log("getLyricsById", data);
            console.log({ data });
            // alert(data.data.mus[0].text)
            return data.data.mus[0].text;
        })
        .catch(error => {
            console.log("error", error);
        });

}

const getLyricsByTrecho = async (trecho) => {



    const queryByTrecho = `https://api.vagalume.com.br/search.excerpt?q=${trecho}&extra=relmus&apikey=${key}`



    return await axios
        .get(
            queryByTrecho
        )
        .then(data => {
            console.log("getLyricsByTrecho", data);
            console.log(data.data.response.docs[0].id)
            return getLyricsById(data.data.response.docs[0].id)

        })
        .catch(error => {
            console.log("error", error);
        });
};

class Lyrics extends Component {

    state = {
        trecho: '',
        letra: ''
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const trecho = event.target.idSearch.value
        // Não permitir ir na API para buscar uma palavra tão simples
        this.setState({ letra: 'Procurando...'})
        if (trecho.length <= 3) {
            return
        }

        this.setState({ trecho });
        this.showLetra()
    };

    showLetra = async () => {
        const letra = await getLyricsByTrecho(this.state.trecho)
        await console.log('letra buscada', letra)
        this.setState({ letra });
    };

    render() {

        const { classes } = this.props;


        return (
            <Fragment>
                <NavBar />

                {/* Page Content */}
                <div className="tc">
                    {/* Introduction Row */}
                    <Pulse>
                        <h1 className="my-4">
                            VAMOS CANTAR
                        </h1>
                        <p>Digite um trecho da letra/cantor e a da música aparece para você</p>
                        <p>Todo ser que respira, louve, louve ao Senhor!</p>

                    </Pulse>

                    <br /><br />

                    <br /><br />
                </div>
                <div className="container">
                    <Form layout="vertical" onSubmit={this.handleOnSubmit}>

                        <FormItem>
                            <Search id="idSearch"
                                placeholder="digite um trecho da música..."
                            />

                          { this.state.trecho && <TextArea autosize value={this.state.letra} /> }
                        </FormItem>

                    </Form>
                </div>
                {/* {getLyricsByTrecho()} */}


                <Fade duration={3000}>
                    <Footer />
                </Fade>
            </Fragment>

        );
    }
};

export default Lyrics;
