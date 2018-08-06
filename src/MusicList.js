import React from "react";
import MusicCard from "./MusicCard";

const MusicList = ({ musics }) => {
    return (
        <div>
            {musics.map((music, i) => {
                return <MusicCard key={i} videoId={music.videoId} name={music.name} artist={music.artist} />;
            })}
        </div>
    );
};

export default MusicList;
