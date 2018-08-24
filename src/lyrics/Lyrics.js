import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Pulse from "react-reveal/Pulse";
import Footer from "../components/Footer";
import { Input, Form } from "antd";
import { getLyricsByPiece } from "../api/getLyrics";
import { Spin } from "antd";

const { Search, TextArea } = Input;
const FormItem = Form.Item;

class Lyrics extends Component {
  state = {
    piece: "",
    lyrics: "",
    loading: true,
    hiddenTextArea: true
  };

  handleOnChange = event => {
    const piece = event.target.value;
    this.setState({ lyrics: "" });
    this.setState({ hiddenTextArea: true });
    // Não permitir ir na API para buscar uma palavra tão irrelevante com quatro caracteres apenas
    if (piece.length <= 4 || piece.trim() === "") {
      return;
    }
    this.setState({ piece });
    this.showLyrics();
  };

  showLyrics = async () => {
    this.setState({ loading: false });
    this.setState({ hiddenTextArea: true });
    const lyrics = await getLyricsByPiece(this.state.piece);
    this.setState({ loading: true });
    this.setState({ hiddenTextArea: false });
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
              Digite o nome da música com ou sem o nome do cantor, e ela aparece
              para você acompanhar a letra da música! =)
            </p>
            <p>
              <i>Todo ser que respira, louve, louve ao Senhor!</i>
            </p>
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
              <TextArea
                hidden={this.state.hiddenTextArea}
                autosize
                value={this.state.lyrics}
              />
              <div className="container tc">
                <br />
                <Spin size="large" tip="Buscando..." hidden={this.state.loading} />
              </div>
            </FormItem>
          </Form>
        </div>

        <div className="tc">
          <small>
            Créditos a <a href="http://www.vagalume.com.br/"> VAGALUME </a>{" "}
          </small>
        </div>

        <Fade duration={3000}>
          <Footer />
        </Fade>
      </Fragment>
    );
  }
}

export default Lyrics;
