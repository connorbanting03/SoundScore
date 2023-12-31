// SongRow.js
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '../Images/Left.png';
import RightArrow from '../Images/Right.png';

const SongRowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  position: relative;
  overflow-x: hidden; /* Hide horizontal overflow */
  transform-origin: top left; /* Set the transform origin to the top left corner */
`;

const SongCard = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const SongIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px 8px 0 0;
  pointer-events: none; /* Ignore pointer events */
`;

const Rating = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  background-color: #333; /* Set background color */
  color: white;
  border-radius: 0 0 8px 8px;
`;

const SongTitle = styled.h2`
  text-align: left;
  margin-bottom: 20px;
  color: white;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 20px 10px; /* Increase hit area (20px top and bottom, 10px left and right) */

  ${({ right }) => right && 'right: 0;'}
  ${({ left }) => left && 'left: 0;'}

  img {
    width: 20px; /* Adjust the width of the images as needed */
    height: 50px; /* Adjust the height of the images as needed */
  }

  &:hover {
    opacity: 1;
  }
`;

const SongRow = ({ title, songUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = currentIndex + 4;
    setCurrentIndex(Math.min(nextIndex, songUrls.length - 1));
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 4;
    setCurrentIndex(Math.max(prevIndex, 0));
  };

  return (
    <div>
      <SongTitle>{title}</SongTitle>
      <SongRowContainer>
        {songUrls.slice(currentIndex, currentIndex + 4).map((songUrl, index) => (
          <SongCard key={index}>
            <SongIframe
              title={`Song ${currentIndex + index + 1}`}
              src={songUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </SongCard>
        ))}
        {currentIndex > 0 && (
          <NavigationButton left onClick={handlePrev}>
            <img src={LeftArrow} alt="Prev" />
          </NavigationButton>
        )}
        {currentIndex + 4 < songUrls.length && (
          <NavigationButton right onClick={handleNext}>
            <img src={RightArrow} alt="Next" />
          </NavigationButton>
        )}
      </SongRowContainer>
    </div>
  );
};

export default SongRow;