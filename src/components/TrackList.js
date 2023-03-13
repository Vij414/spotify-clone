import React from "react";

import Track from "../img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";


function TrackList() {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} />
        <p className="trackName">
         Sample Name <span className="trackSpan"> Artist</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        

        <input type="range" />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export {TrackList};
