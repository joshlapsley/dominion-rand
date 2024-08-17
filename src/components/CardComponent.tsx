import React, { useState } from 'react';
import { Card, CardType } from '../types';
import CardBack from './utils/Card-Back.jpg';
import styled from 'styled-components';

interface MyComponentProps {
  card: Card;
  cardType?: CardType;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%; 
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block; 
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%; /* Ensures the overlay takes up the full width of the image */
  color: white;
  font-size: 2.5vw; /* Dynamically adjusts the font size based on the viewport width */
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  border-radius: 5px;
  text-align: center; /* Centers the text horizontally within the overlay */
  z-index: 1; 
  cursor: pointer; 
`;

const CardComponent: React.FC<MyComponentProps> = ({ card, cardType }) => {
  const [showBack, setShowBack] = useState(true);
  const [overylayText, setOverlayText] = useState(cardType);

  const toggleBack = () => {
    if(!overylayText) {
      setShowBack(prev => !prev);
    }
  };

  const handleOverlayClick = () => {

    setOverlayText(undefined)
  };

  const randomizeCard = () => {

  }

  return (
    <Container>
      <Image
        alt={card.name}
        src={showBack ? CardBack : card.image}
        onClick={toggleBack}
      />
      {overylayText && (
        <OverlayText onClick={handleOverlayClick}>
          {overylayText}
        </OverlayText>
      )}
    </Container>
  );
};

export default CardComponent;