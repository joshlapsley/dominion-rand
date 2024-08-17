import React from 'react';
import styled from 'styled-components';
import CardComponent from './CardComponent'; // Import your CardComponent
import { Card } from '../types'; // Assuming you have a Card type defined

interface CardsContainerProps {
  cards: Card[];
}

const Container = styled.div`
  display: grid;
  gap: 3%;
  width: 100%;
  max-width: 75%; 
  margin: 0 auto;
  grid-template-columns: auto auto auto auto auto;
`;

const CardsContainer: React.FC<CardsContainerProps> = ({ cards }) => {


  return (
    <Container>
      {cards.slice(0, 10).map((card, index) => (
        <CardComponent key={index} card={card} />
      ))}
    </Container>
  );
};

export default CardsContainer;