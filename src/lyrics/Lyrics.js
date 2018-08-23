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

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ trecho: event.target.value });
        this.showLetra()
    };

    showLetra = async () => {
        console.log('entrei aqui')
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
                    <Form layout="vertical">

                        <FormItem>
                            <Search

                                placeholder="digite um trecho da música o nome do artista tbm"
                                onChange={this.handleChange}
                                // onPressEnter={this.showLetra}
                            />
                       
                            <TextArea  autosize value={this.state.letra} />
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
