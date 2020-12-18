import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ title, description, subtittle }) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{title}</h3>
        <p>{subtittle}</p>
        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{subtittle}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter__record'
        src='https://static.thenounproject.com/png/934821-200.png'
      />
    </div>
  );
}

export default VideoFooter;
