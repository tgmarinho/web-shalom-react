import React, { Fragment, Component } from "react";
import YouTube from "react-youtube";
import { Spin } from 'antd';

const opts = {
  height: "345",
  width: "420",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

class MusicCard extends Component {

  state = {
    showSpin: true
  }

  render() {

    const { videoId, name, artist } = this.props;

    return (
      <Fragment>
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={() => this.setState({ showSpin: false })} />
          <div>
            { this.state.showSpin &&  <Spin size="large" /> }
            <h2>{name}</h2>
            <p>{artist}</p>
          </div>
        </div>
      </Fragment>
    )

  }

}

export default MusicCard;
