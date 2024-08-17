import React, { useState } from 'react';
import { Card, CardType } from '../types';
import CardBack from './utils/Card-Back.jpg';
import styled from 'styled-components';
import gears from './utils/gears-icon.png';
import Params from './Params';

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
  width: 80%;
  color: white;
  font-size: 2.5vw;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  border-radius: 5px;
  text-align: center;
  z-index: 1; 
  cursor: pointer; 
`;

const GearsIcon = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 5vw;
  height: 5vw;
  z-index: 2;
`;

const ParamsOverlay = styled.div`
  position: absolute;
  top: 19vw;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardComponent: React.FC<MyComponentProps> = ({ card, cardType }) => {
  const [showBack, setShowBack] = useState(true);
  const [overylayText, setOverlayText] = useState(cardType);
  const [showParams, setShowParams] = useState(false);

  const toggleBack = () => {
    if (!overylayText) {
      setShowBack((prev) => !prev);
    }
  };

  const toggleParams = () => {
    setShowParams((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setOverlayText(undefined);
  };

  return (
    <Container>
      <Image
        alt={card.name}
        src={showBack ? CardBack : card.image}
        onClick={toggleBack}
      />
      {showBack && <GearsIcon alt="Gears Icon" src={gears} onClick={toggleParams} />}
      {overylayText && (
        <OverlayText onClick={handleOverlayClick}>
          {overylayText}
        </OverlayText>
      )}
      {showParams && (
        <ParamsOverlay>
          <Params onClose={toggleParams} setOverlay={setOverlayText}/>
        </ParamsOverlay>
      )}
    </Container>
  );
};

export default CardComponent;
