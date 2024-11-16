import React, { useState, useRef, useEffect } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Playlist from '../components/Playlist.jsx';

export default function PlaylistPage() {

  return (
    <>
        <Header/>
        <Playlist/>
        <Footer/>
    </>
  );
}