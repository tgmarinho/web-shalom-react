import React, { Fragment } from "react";
import MusicCard from "./MusicCard";

const MusicList = ({ musics }) => {
    return (
        <Fragment>
          
            {musics.map((music, i) => {
                return <MusicCard 
                        key={i}
                        videoId={music.videoId}
                        name={music.name} 
                        artist={music.artist} 
                      />;
            })}
        </Fragment>
    );
};

export default MusicList;
