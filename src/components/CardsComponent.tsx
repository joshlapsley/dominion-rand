import React from 'react';
import styled from 'styled-components';
import CardComponent from './CardComponent'; 
import { Card } from '../types'; 

interface CardsContainerProps {
  cards: Card[];
}

const Container = styled.div`
  display: grid;
  gap: 3%;
  width: 100%;
  max-width: 65%; 
  margin: 0 auto;
  grid-template-columns: auto auto auto auto auto;
`;

const CardsComponent: React.FC<CardsContainerProps> = ({ cards }) => {

  return (
    <Container>
      {cards.slice(0, 10).map((card, index) => (
        <CardComponent card={card} />
      ))}
    </Container>
  );
};

export default CardsComponent;