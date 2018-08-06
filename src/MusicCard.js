import React from 'react'
import YouTube from 'react-youtube';

const opts = {
    height: '345',
    width: '420',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
};

const MusicCard = ({ videoId, name, artist }) => {

    return (

        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <YouTube videoId={videoId} opts={opts} />
            <div>
                <h2>{name}</h2>
                <p>{artist}</p>
            </div>
        </div>

    )

}

export default MusicCard