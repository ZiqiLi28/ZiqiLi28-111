import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PodcastList from "./components/PodcastList.jsx"
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import './App.css';

import audio1 from './resources/music/audio1.mp3';
import audio2 from './resources/music/audio2.mp3';

import pic1 from './resources/pictures/pic1.jpg';
import pic2 from './resources/pictures/pic2.jpg';
import pic3 from './resources/pictures/pic3.jpg';
import pic4 from './resources/pictures/pic4.jpg';
import pic5 from './resources/pictures/pic5.jpg';
import pic6 from './resources/pictures/pic6.jpg';
import pic7 from './resources/pictures/pic7.jpg';

export default function App() {

  const navigate = useNavigate();

  const handlePodcastClick = (id) => {
    // navigate(`/${id}`);
    navigate(`/weekly`);
  };
  
  const podcasts = [
    { id: 1, title: "Learning React Basics", category: "Education", duration: "15:30", audio: audio2, image: pic1, uploadDate: "2023-10-01" },
    { id: 2, title: "Tech Trends 2024", category: "Technology", duration: "25:45", audio: audio2, image: pic2, uploadDate: "2023-09-20" },
    { id: 3, title: "Mindful Meditation", category: "Wellness", duration: "10:20", audio: audio1, image: pic3, uploadDate: "2023-11-10" },
    { id: 4, title: "True Crime Stories", category: "Crime", duration: "35:15", audio: audio2, image: pic4, uploadDate: "2023-08-15" },
    { id: 5, title: "Startup Success Tips", category: "Business", duration: "20:00", audio: audio1, image: pic5, uploadDate: "2023-10-25" },
    { id: 6, title: "Adventure Travel Guide", category: "Travel", duration: "18:40", audio: audio2, image: pic6, uploadDate: "2023-07-05" },
    { id: 7, title: "Cooking with Passion", category: "Food", duration: "22:10", audio: audio1, image: pic7, uploadDate: "2023-09-30" },
  ];

  return (
    <>
      <Header/>
      <div className="audio-page">
        <h1>Audio</h1>
        <div className="main">
          <div className="main-box" onClick={() => handlePodcastClick(1)}>
            <img src="pic1.jpg" alt="Podcast" className="main-image" />
            <h2 className="box-title">Podcast Title</h2>
            <div className="info-row">
              <span className="category">Category Name</span>
              <span className="duration"> - 10:30 mins</span>
            </div>
            <p className="date">16.11.24</p>
          </div>
          <PodcastList podcasts={podcasts} handlePodcastClick={handlePodcastClick} />
        </div>
        <Footer />
      </div>
    </>
  );
};