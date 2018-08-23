import axios from "axios";

// API Key do Vagalume
const key = "0efde0cb9c9f9dde0f3b8be3251063f0";

const getLyricsById = async id => {
  const queryById = `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`;

  return await axios
    .get(queryById)
    .then(data => {
      const gotLyric = data.data.mus[0].text;
      return gotLyric;
    })
    .catch(error => {
    //   console.log("error_getLyricsById", error);
    });
};

export const getLyricsByPiece = async piece => {
  const queryByPiece = `https://api.vagalume.com.br/search.excerpt?q=${piece}&extra=relmus&apikey=${key}`;

  return await axios
    .get(queryByPiece)
    .then(data => {
      const musicId = data.data.response.docs[0].id;
      return getLyricsById(musicId);
    })
    .catch(error => {
    //   console.log("error_getLyricsByTrecho", error);
    });
};
