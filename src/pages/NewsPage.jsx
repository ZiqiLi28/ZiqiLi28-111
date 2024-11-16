import React from "react";
import { useParams } from 'react-router-dom';
import News from "../components/News";
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const item = {
  id: 1,
  title: "Rubaiyat p1",
  category: "Education",
  text: `Awake! for Morning in the Bowl of Night
   Has flung the Stone that puts the Stars to Flight:
   And Lo! the Hunter of the East has caught
   The Sultan's Turret in a Noose of Light.`,
  duration: "1:30",
  audio: "audio2.mp3",
  image: "pic1.jpg",
  uploadDate: "2023-10-01",
};

const NewsPage = () => {

  const { id } = useParams();
  
  return (
    <>
      <Header />
      <News item={item} />
      <Footer />
    </>
  );
};

export default NewsPage;