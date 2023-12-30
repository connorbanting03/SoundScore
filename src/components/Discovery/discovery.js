import React from 'react';
import './Discovery.css';
import Post from '../Post/Post.js'; // Adjust the path based on your project structure

function Discovery() {
  return (
    <div className="discovery-container">
      <Post embededURL="https://open.spotify.com/embed/track/7e8utCy2JlSB8dRHKi49xM?utm_source=generator"/>
      <Post embededURL="https://open.spotify.com/embed/track/1ksVGMm8GlcSWFie5mYPcI?utm_source=generator"/>
      <Post embededURL="https://open.spotify.com/embed/track/1L94M3KIu7QluZe63g64rv?utm_source=generator"/>
      <Post embededURL="https://open.spotify.com/embed/track/0bYg9bo50gSsH3LtXe2SQn?utm_source=generator"/>
      <Post embededURL="https://open.spotify.com/embed/track/5UWwZ5lm5PKu6eKsHAGxOk?utm_source=generator"/>
    </div>
  );
}

export default Discovery;