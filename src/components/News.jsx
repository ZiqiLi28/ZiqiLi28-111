import React from "react";
import "./News.css";

const News = ({ item }) => {
  return (
    <div className="podcast-detail">
      <div className="image-container">
        <img src={item.image} alt={item.title} className="podcast-image" />
      </div>
      <div className="content-container">
        <h1 className="podcast-title">{item.title}</h1>
        <p className="podcast-category">{item.category}</p>
        <p className="podcast-text">{item.text}</p>
        <p className="podcast-date">Published on: {item.uploadDate}</p>
      </div>
    </div>
  );
};

export default News;