import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, title, description, subtitle, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing
    // stop it...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }

    // otherwise if its not playing
    // play it...
  };

  return (
    <div className='video'>
      <video
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        // src="/Videos/contoh2.mp4"
        src={url}></video>

      {/* VideoFooter */}
      <VideoFooter channel={title} description={description} song={subtitle} />

      {/* VideoSIdebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
