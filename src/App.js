import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/tiktok/create");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    // BEM naming convention
    <div className='app'>
      {/* app container */}
      {/* videos */}
      <h4>Work in porgress....</h4>
      <div className='app__videos'>
        {/* <Videos /> */}
        {videos.map(
          ({
            sources,
            title,
            description,
            subtitle,
            likes,
            messages,
            shares,
          }) => (
            <Video
              url={sources}
              channel={title}
              song={subtitle}
              likes={20}
              messages={1}
              description={description}
              shares={89}
            />
          )
        )}

        {/* <Video
          url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          channel='wildenali'
          description='Wow Epic MERN TOKTOK Clone App'
          song='Hey whatsup cool 3 2 1 clone the door'
          likes={1200}
          messages={120}
          shares={12}
        />

        <Video
          url='https://www.w3schools.com/html/mov_bbb.mp4'
          channel='aliwilden'
          description='Wadidaw Odading'
          song='Odading Mang Oleh seperti ironman'
          likes={2250}
          messages={420}
          shares={220}
        /> */}
      </div>
    </div>
  );
}

export default App;
