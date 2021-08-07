import React, { Fragment } from "react";
import ImageGallery from "react-image-gallery";
import Fade from "react-reveal/Fade";
// Style
import "react-image-gallery/styles/css/image-gallery.css";

const PREFIX_URL = "../img/galeria/";

export class Photos extends React.Component {
  render() {
    const images = (quantity) => {
      const img = [];
      for (let i = 1; i <= quantity; i++) {
        if (i != 6) {
          img.push({
            original: `${PREFIX_URL}${i}.jpg`,
            thumbnail: `${PREFIX_URL}${i}.jpg`,
          });
        }
      }

      return img;
    };

    return (
      <Fragment>
        <Fade duration={5000}>
          <div className="container">
            <ImageGallery items={images(25)} />
          </div>
        </Fade>
      </Fragment>
    );
  }
}
