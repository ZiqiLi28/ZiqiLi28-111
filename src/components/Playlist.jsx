import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import audio1 from '../resources/music/audio1.mp3';
import audio2 from '../resources/music/audio2.mp3';

import pic1 from '../resources/pictures/pic1.jpg';
import pic2 from '../resources/pictures/pic2.jpg';
import pic3 from '../resources/pictures/pic3.jpg';
import pic4 from '../resources/pictures/pic4.jpg';
import pic5 from '../resources/pictures/pic5.jpg';
import pic6 from '../resources/pictures/pic6.jpg';
import pic7 from '../resources/pictures/pic7.jpg';

export default function Playlist() {

  const navigate = useNavigate();

  const handlePodcastClick = (id) => {
    navigate(`/${id}`);
  };

    const podcasts = [
        { id: 1, link: "/podcast/1", title: "Learning React Basics", category: "Education", duration: "15:30", audio: audio1, image: pic1, uploadDate: "2023-10-01" },
        { id: 2, link: "/podcast/2", title: "Tech Trends 2024", category: "Technology", duration: "25:45", audio: audio2, image: pic2, uploadDate: "2023-09-20" },
        { id: 3, link: "/podcast/3", title: "Mindful Meditation", category: "Wellness", duration: "10:20", audio: audio1, image: pic3, uploadDate: "2023-11-10" },
        { id: 4, link: "/podcast/4", title: "True Crime Stories", category: "Crime", duration: "35:15", audio: audio2, image: pic4, uploadDate: "2023-08-15" },
        { id: 5, link: "/podcast/5", title: "Startup Success Tips", category: "Business", duration: "20:00", audio: audio1, image: pic5, uploadDate: "2023-10-25" },
        { id: 6, link: "/podcast/6", title: "Adventure Travel Guide", category: "Travel", duration: "18:40", audio: audio2, image: pic6, uploadDate: "2023-07-05" },
        { id: 7, link: "/podcast/7", title: "Cooking with Passion", category: "Food", duration: "22:10", audio: audio1, image: pic7, uploadDate: "2023-09-30" },
    ];

      const [currentPodcast, setCurrentPodcast] = useState(null);
      const [isPlaying, setIsPlaying] = useState(false);

      const audioRef = useRef(null);

      const playPodcast = (podcast) => {
        if (currentPodcast?.id === podcast.id) {
          if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
          } else {
            audioRef.current.play();
            setIsPlaying(true);
          }
        } else {
          setCurrentPodcast(podcast);
          if (audioRef.current) {
            audioRef.current.src = podcast.audio;
            audioRef.current.play();
            setIsPlaying(true);
          }
        }
      };

      const togglePlayPause = () => {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      };

      const skipForward = () => {
        if (audioRef.current) {
          audioRef.current.currentTime += 10;
        }
      };

      const skipBackward = () => {
        if (audioRef.current) {
          audioRef.current.currentTime -= 10;
        }
      };
    
      return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h2>Podcast Playlist</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {podcasts.map((podcast) => (
              <li
                key={podcast.id}
                onClick={() => playPodcast(podcast)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: "#f9f9f9",
                  position: "relative",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6e6e6")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePodcastClick(podcast.id)
                    // window.location.href = podcast.link;
                  }}
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "orange",
                    border: "none",
                    padding: "5px 10px",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Source
                </button>
    
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "5px",
                    marginRight: "15px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h3 style={{ margin: 0 }}>{podcast.title}</h3>
                  <p style={{ margin: 0 }}>
                    <span style={{ color: "orange" }}>{podcast.category}</span> •{" "}
                    <span style={{ color: "gray" }}>{podcast.duration}</span>
                  </p>
                  <p style={{ margin: "5px 0 0 0", color: "gray" }}>Uploaded: {podcast.uploadDate}</p>
                </div>
              </li>
            ))}
          </ul>
          {currentPodcast && (
            <div
              style={{
                position: "sticky",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#ffffff",
                borderTop: "1px solid #ccc",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >

              <div style={{ flex: 1, fontSize: "16px", fontWeight: "bold", paddingLeft: "10px" }}>
                {currentPodcast.title}
              </div>
    
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <button
                  onClick={skipBackward}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  ⏪ 10s
                </button>
                <button
                  onClick={togglePlayPause}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>
                <button
                  onClick={skipForward}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  10s ⏩
                </button>
              </div>
            </div>
          )}
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>
      );
};