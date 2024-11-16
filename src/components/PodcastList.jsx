import React from 'react';
import './PodcastList.css';

export default function PodcastList({ podcasts, handlePodcastClick }) {

  const handleClick = (podcastId) => {
    // Call the handlePodcastClick function with the podcast id when clicked
    handlePodcastClick(podcastId);
  };

  return (
    <div className="podcast-list">
      {podcasts.map((podcast) => (
      <div
        key={podcast.id}
        className="podcast-item"
        onClick={() => handleClick(podcast.id)}
      >
          <img src={podcast.image} alt={podcast.title} className="podcast-image" />
          <div className="podcast-info">
            <h3 className="podcast-title">{podcast.title}</h3>
            <p className="podcast-category">{podcast.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};