import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import podcastImage from './kaleva.png';
import audio1 from './audio1.mp3';
import audio2 from './audio2.mp3';

export default function App() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [audio, setAudio] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const playlistRef = useRef(null);

  const episodes = [
    {
      title: 'Episode 1',
      description: 'Description of episode 1',
      date: '14.11.2024',
      duration: '8 min',
      audioSrc: audio1,
    },
    {
      title: 'Episode 2',
      description: 'Description of episode 2',
      date: '12.11.2024',
      duration: '4 min',
      audioSrc: audio2,
    },
  ];

  // Handle play/pause for the selected episode
  const handlePlayAudio = (index) => {
    if (playingIndex === index) {
      audio.paused ? audio.play() : audio.pause();
    } else {
      if (audio) audio.pause();
      const newAudio = new Audio(episodes[index].audioSrc);
      newAudio.play();
      setAudio(newAudio);
      setPlayingIndex(index);
      newAudio.onended = () => setPlayingIndex(null);
    }
  };

  // Add episode to the playlist
  const handleAddToPlaylist = (index) => {
    const episode = episodes[index];
    if (!playlist.some(item => item.title === episode.title)) {
      setPlaylist(prev => [...prev, episode]);
    }
  };

  // Toggle playlist visibility
  const togglePlaylist = () => setShowPlaylist(!showPlaylist);

  // Close playlist when clicking outside of it
  const handleClickOutside = (e) => {
    if (playlistRef.current && !playlistRef.current.contains(e.target)) {
      setShowPlaylist(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="episodes-section">
        <div className="episodes-list">
          {episodes.map((episode, index) => (
            <div key={index} className="episode">
              <div className="episode-info">
                <svg
                  onClick={() => handlePlayAudio(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44 44"
                  width="2em"
                  height="2em"
                  className="play-icon"
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                >
                  <path
                    fill="#fff"
                    d="M16.317 10.933a.86.86 0 0 1 .877.032l16.041 10.312a.86.86 0 0 1 0 1.446L17.194 33.035a.86.86 0 0 1-1.324-.722V11.686a.86.86 0 0 1 .447-.754"
                    clipRule="evenodd"
                  />
                </svg>
                <img src={podcastImage} alt="Episode" className="episode-image" />
                <div>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                  <span>{episode.duration} • {episode.date}</span>
                </div>
              </div>
              <button className="more-options" onClick={() => handleAddToPlaylist(index)}>
                Add to Playlist
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Playback Bar */}
      {playingIndex !== null && (
        <div className="playback-bar">
          <div className="playback-info">
            <h4>{episodes[playingIndex].title}</h4>
            <p>{episodes[playingIndex].duration}</p>
          </div>
          <button className="pause-button" onClick={() => handlePlayAudio(playingIndex)}>
            {audio.paused ? 'Play' : 'Pause'}
          </button>
          <button className="playlist-button" onClick={togglePlaylist}>
            Playlist
          </button>
        </div>
      )}

      {/* Playlist Section */}
      {showPlaylist && playlist.length > 0 && (
        <div ref={playlistRef} className="playlist-section">
          <h3>Playlist</h3>
          <ul>
            {playlist.map((episode, index) => (
              <li key={index}>
                {episode.title} - {episode.duration}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Footer/>
    </div>
  );
}
