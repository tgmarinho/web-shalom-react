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

class Download extends Component {
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
            <h1 className="my-4">Materiais da Shalom</h1>
            <p>Baixe os nossos materiais disponíveis para Download</p>
            <p>
              <i>Seja edificado na Rocha!</i>
            </p>
          </Pulse>

          <br />
        </div>
        <div className="container">
          <ul className="container">
            <li>
              <a
                href="https://github.com/tgmarinho/web-shalom-react/raw/master/public/downloads/Li%C3%A7%C3%B5es%20de%20preparativos%20para%20o%20Batismo%20-%20Shalom.pdf"
                target="_BLANK"
              >
                Lições para classe de Batismo
              </a>
            </li>
            <br />
            <li>
              <a
                href="https://github.com/tgmarinho/web-shalom-react/raw/master/public/downloads/meusonho_pra_lia.jpg"
                target="_BLANK"
              >
                Meu sonho - Pra. Lia
              </a>
            </li>
            <br />
            <li>
              <a
                href="https://github.com/tgmarinho/web-shalom-react/raw/master/public/downloads/lia_vencendo_a_dor_com_jesus.jpg"
                target="_BLANK"
              >
                Vencendo a dor com Jesus - Testemunho Pra. Lia
              </a>
            </li>
            <br />
            <li>
              <a
                href="https://github.com/tgmarinho/web-shalom-react/raw/master/public/downloads/Livro%20Semeadores%20-%20Mananciais%20do%20Sert%C3%A3o%20Nordestinos.pdf"
                target="_BLANK"
              >
                Livro Semeadores - Mananciais do Sertão Nordestinos -
                Participação Pra. Lia
              </a>
            </li>
            <br />
            <li>
              <a
                href="https://github.com/tgmarinho/web-shalom-react/blob/master/public/downloads/ORACAO_DE_GUERRA_ESPIRITUAL.pdf"
                target="_BLANK"
              >
                Oração de Guerra Espiritual
              </a>
            </li>
            <br />
          </ul>
        </div>

        <div className="tc">
          <small>Deus te abençoe</small>
        </div>

        <Fade duration={3000}>
          <Footer />
        </Fade>
      </Fragment>
    );
  }
}

export default Download;
