import React, { useState } from 'react';
import './App.css';
import podcastImage from './kaleva.png';
import audio1 from './audio1.mp3';
import audio2 from './audio2.mp3';

function App() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [audio, setAudio] = useState(null);

  const episodes = [
    {
      title: '1111111111111111111111111',
      description: '1111111111111111111',
      date: '14.11.2024',
      duration: '8 min',
      audioSrc: audio1,
    },
    {
      title: '22222222222222222222222222',
      description: '222222222222222222222222222222',
      date: '12.11.2024',
      duration: '4 min',
      audioSrc: audio2,
    },
  ];

  const handlePlayAudio = (index) => {
    if (playingIndex === index) {
      audio.pause();
      setPlayingIndex(null);
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(episodes[index].audioSrc);
      newAudio.play();
      setAudio(newAudio);
      setPlayingIndex(index);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="text-content">
          <h1>Kaleva News</h1>
          <button className="play-button">Listen</button>
        </div>
        <div className="image-content">
          <img src={podcastImage} alt="Podcast" />
        </div>
      </div>
      
      <div className="episodes-section">
        <div className="episodes-list">
          {episodes.map((episode, index) => (
            <div key={index} className="episode">
              <div className="episode-info">
                <svg
                  onClick={() => handlePlayAudio(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 44 44"
                  width="2em"
                  height="2em"
                  className="play-icon"
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                >
                  <path
                    fill="#000"
                    fillOpacity="0.2"
                    stroke="#fff"
                    strokeWidth="1.5"
                    d="M43.25 22c0 11.736-9.514 21.25-21.25 21.25S.75 33.736.75 22 10.264.75 22 .75 43.25 10.264 43.25 22Z"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeWidth="1.5"
                    d="M43.25 22c0 11.736-9.514 21.25-21.25 21.25S.75 33.736.75 22 10.264.75 22 .75 43.25 10.264 43.25 22Z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M16.317 10.933a.86.86 0 0 1 .877.032l16.041 10.312a.86.86 0 0 1 0 1.446L17.194 33.035a.86.86 0 0 1-1.324-.722V11.686a.86.86 0 0 1 .447-.754"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <img src={podcastImage} alt="Episode" className="episode-image" />
                <div>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                  <span>{episode.duration} • {episode.date}</span>
                </div>
              </div>
              <button className="more-options">Add to Playlist</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
