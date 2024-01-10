import React, { useState, useEffect } from 'react';
import './SearchBar.css'; // Import your CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetch(`http://127.0.0.1:5000/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.tracks || []);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery.length > 0 && searchResults.length > 0 && (
          <ul className="search-dropdown">
            {searchResults.map(track => (
              <li key={track.id} onClick={() => console.log('Selected:', track.name)}>
                <img
                  src={track.album.images.length > 0 ? track.album.images[0].url : ''}
                  alt={track.name}
                  className="album-image"
                />
                <span className="song-details">
                  {track.name} by {track.artist}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
