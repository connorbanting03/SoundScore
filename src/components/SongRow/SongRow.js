// SongRow.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SongRowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  position: relative;
`;

const SongCard = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const SongIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  color: white;
  font-size: 20px;
  cursor: pointer;

  ${({ right }) => right && 'right: 0;'}
  ${({ left }) => left && 'left: 0;'}
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
            Prev
          </NavigationButton>
        )}
        {currentIndex + 4 < songUrls.length && (
          <NavigationButton right onClick={handleNext}>
            Next
          </NavigationButton>
        )}
      </SongRowContainer>
    </div>
  );
};

export default SongRow;
