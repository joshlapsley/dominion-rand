import React, { useEffect, useState } from 'react';
import { Card, Reshuffledcard } from '../types';
import CardBack from './utils/Card-Back.jpg';
import styled from 'styled-components';
import gears from './utils/gears-icon.png';
import Params from './Params';

interface MyComponentProps {
  card: Card;
  reRender?: boolean
  handleReShuffles: (card: Reshuffledcard, action: string) => void;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
`;

const CardComponent: React.FC<MyComponentProps> = ({ card, reRender, handleReShuffles }) => {
  const [showBack, setShowBack] = useState(true);
  const [overlayText, setOverlayText] = useState<string | undefined>(undefined);
  const [showParams, setShowParams] = useState(false);

  useEffect(() => {
    setShowBack(false);
  },[reRender])

  useEffect(() => {
    if(overlayText) {
      handleReShuffles(
        {
          card,
          exclusion: overlayText,
        },
        "add",
      )
    }
  },[overlayText])

  const toggleBack = () => {
    setShowBack((prev) => !prev);
    if(showBack) { //If card is being turned upside remove the card from the shuffled list, 
      handleReShuffles({
        card,
        exclusion: undefined,
      }, "remove")
    } else {
      handleReShuffles({ //If card is being turned upside down add the card to the shuffled list
        card,
        exclusion: undefined,
      }, "add")
    }
  };

  const toggleParams = () => {
    setShowParams((prev) => !prev);
  };

  const handleOverlayClick = () => {
    handleReShuffles(
      {
        card,
        exclusion: undefined,
      },
      "add",
    )
    setOverlayText(undefined);
  };

  return (
    <Container>
      <Image
        alt={card.name}
        src={showBack ? CardBack : card.image}
        onClick={toggleBack}
        role="button"
        draggable={false}
      />
      {showBack && <GearsIcon alt="Gears Icon" src={gears} onClick={toggleParams} role="button" draggable={false}/>}
      {showBack && overlayText && (
        <OverlayText onClick={handleOverlayClick}>
          {overlayText}
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
