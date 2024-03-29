import React, { Fragment } from "react";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <Fragment>
      <Fade>
        {/* <!-- Header --> */}
        <header id="top" className="header">
          <img src="img/bg3.jpeg" className="header" />
          <div className="text-vertical-center">
            {/* <!-- <h1>SHALOM</h1> --> */}
            {/* <!-- <h3>Igreja Batista do Avivamento Shalom</h3> --> */}
            <br />
            {/* <!-- <a href="#about" class="btn btn-dark btn-lg">Saiba Mais</a> --> */}
          </div>
        </header>
      </Fade>
    </Fragment>
  );
};

export default Header;
