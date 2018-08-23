import React, { Fragment } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Pulse from "react-reveal/Pulse";
import Footer from "../components/Footer";



const key = "0efde0cb9c9f9dde0f3b8be3251063f0";

// const getLyrics = () => {
//     // Exemplo de requisição
//     let artist = "Vineyard";
//     let song = "Quebrantado";

//     const query = `https://api.vagalume.com.br/search.php?art=${artist}&mus=${song}&apikey=${key}`

//     axios
//         .get(query)
//         .then(data => {
//             console.log("reponse", data);
//             console.log({ data });
//             alert(data.data.mus[0].text)
//         })
//         .catch(error => {
//             console.log("error", error);
//         });
// };


const getLyricsById = (id) => {

    const queryById = `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`


    axios
    .get(
        queryById
    )
    .then(data => {
        console.log("getLyricsById", data);
        console.log({ data });
        alert(data.data.mus[0].text)
    })
    .catch(error => {
        console.log("error", error);
    });

}

const getLyricsByTrecho = () => {

    let trecho = "pra sempre avivah"

    
    const queryByTrecho = `https://api.vagalume.com.br/search.excerpt?q=${trecho}&extra=relmus&apikey=${key}`

    // const queryByTrecho2 = `https://api.vagalume.com.br/search.artmus?q=${trecho}&apikey=${key}`

    // https://api.vagalume.com.br/search.artmus?q=Skank%20Vamos%20Fugir&limit=5

// URL: https://api.vagalume.com.br/search.php?art=U2&mus=One&extra=relmus&nolyrics=1&apikey={key}

    axios
        .get(
            queryByTrecho
        )
        .then(data => {
            console.log("reponse", data);
            console.log({ data });
            console.log(data.data.response.docs[0].id)
            getLyricsById(data.data.response.docs[0].id)
            // alert(data.data.mus[0].text)
        })
        .catch(error => {
            console.log("error", error);
        });
};

const Lyrics = () => {

    return (
        <Fragment>
            <NavBar />

            {/* Page Content */}
            <div className="tc">
                {/* Introduction Row */}
                <Pulse>
                    <h1 className="my-4">
                        ADORAÇÃO AO SENHOR
            <small>Digno &amp; Santo És</small>
                    </h1>
                    <p>Equipe de Louvor da Shalom</p>
                    <p>
                        <a href="./musica.html"> As 20+ músicas tocadas na Shalom</a>
                    </p>
                </Pulse>
                {/* Team Members Row */}
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="my-4">Nossa equipe</h2>
                    </div>
                </div>
            </div>

            { getLyricsByTrecho() }


            <Fade duration={3000}>
                <Footer />
            </Fade>
        </Fragment>

    );
};

export default Lyrics;
