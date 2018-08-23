import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Pulse from "react-reveal/Pulse";
import Footer from "../components/Footer";
import { Input, Form } from "antd";
import { getLyricsByPiece } from "../api/getLyrics";

const { Search, TextArea } = Input;
const FormItem = Form.Item;

class Lyrics extends Component {
    state = {
        piece: '',
        lyrics: ''
    };

    handleOnChange = event => {
        const piece = event.target.value;
        this.setState({lyrics: '' });
        // Não permitir ir na API para buscar uma palavra tão irrelevante com quatro caracteres apenas
        if (piece.length <= 4 || piece.trim() === '') {
            return;
        }   
        this.setState({ piece });
        this.showLyrics();
    };

    showLyrics = async () => {
        const lyrics = await getLyricsByPiece(this.state.piece);
        this.setState({ lyrics });
    };

    render() {
        return (
            <Fragment>
                <NavBar />

                {/* Page Content */}
                <div className="container tc">
                    {/* Introduction Row */}
                    <Pulse>
                        <h1 className="my-4">VAMOS CANTAR</h1>
                        <p>
                            Digite o nome da música ou parte da letra, ou ainda o nome do cantor, e ela aparece para
                            você! =)
                        </p>
                        <p>Todo ser que respira, louve, louve ao Senhor!</p>
                    </Pulse>

                    <br />
                </div>
                <div className="container">
                    <Form layout="vertical" className="login-form">
                        <FormItem>
                            <Search
                                placeholder="digite o nome da música..."
                                onChange={this.handleOnChange}
                            />
                                <TextArea hidden={this.state.piece.trim() === ''} autosize value={this.state.lyrics} />
                        </FormItem>
                    </Form>
                </div>

                <Fade duration={3000}>
                    <Footer />
                </Fade>
            </Fragment>
        );
    }
}

export default Lyrics;
