import React from 'react';
import './discovery.css';
import Post from '../Post/post.js'; // Adjust the path based on your project structure
import SongRow from '../SongRow/SongRow.js';
function Discovery() {
  const rockSongUrls = [
    'https://open.spotify.com/embed/track/4Y6GIje3GErVRIq1Ff5BJq?utm_source=generator',
    'https://open.spotify.com/embed/track/4Y6GIje3GErVRIq1Ff5BJq?utm_source=generator',
    'https://open.spotify.com/embed/track/7bwgSYKRA5P4IIEesnCA53?utm_source=generator',
    'https://open.spotify.com/embed/track/1ksVGMm8GlcSWFie5mYPcI?utm_source=generator',
    'https://open.spotify.com/embed/track/2MLHyLy5z5l5YRp7momlgw?utm_source=generator',
    'https://open.spotify.com/embed/track/6NvRxjfYkkT2SpirAlmsjH?utm_source=generator',
    'https://open.spotify.com/embed/track/1lctRlmXFqukXxW4Gjm5HJ?utm_source=generator',
    'https://open.spotify.com/embed/track/48YkpE5enOln5c7jXSTuHL?utm_source=generator',
    'https://open.spotify.com/embed/track/1gpBDeONibvJyQYEv5HJh9?utm_source=generator'
    
  ];
  const rapSongUrls = [
    'https://open.spotify.com/embed/track/2HbKqm4o0w5wEeEFXm2sD4?utm_source=generator',
    'https://open.spotify.com/embed/track/68Dni7IE4VyPkTOH9mRWHr?utm_source=generator',
    'https://open.spotify.com/embed/track/5gDWsRxpJ2lZAffh5p7K0w?utm_source=generator',
    'https://open.spotify.com/embed/track/7lQ8MOhq6IN2w8EYcFNSUk?utm_source=generator',
    'https://open.spotify.com/embed/track/3FsqOTQT3d7c296eStnEnl?utm_source=generator'
  ]

  const popSongUrls = [
    'https://open.spotify.com/embed/track/34sOdxWu9FljH84UXdRwu1?utm_source=generator',
    'https://open.spotify.com/embed/track/43y1WpBdnEy5TR9aZoSQL9?utm_source=generator',
    'https://open.spotify.com/embed/track/5jrdCoLpJSvHHorevXBATy?utm_source=generator',
    'https://open.spotify.com/embed/track/2uIX8YMNjGMD7441kqyyNU?utm_source=generator'

  ]
  const edmSongUrls = [
    'https://open.spotify.com/embed/track/1Aic3Xbzma3Nb0sSwqGCdf?utm_source=generator'

  ]
  return (
    <div className="discovery-container">
      
      <Post embededURL={rockSongUrls[1]}/>
      <Post embededURL={rockSongUrls[2]}/>
      <Post embededURL={rockSongUrls[4]}/>
      <Post embededURL={rockSongUrls[3]}/>
    </div>

    
  );
}

export default Discovery;