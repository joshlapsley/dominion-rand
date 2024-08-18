import React, { useEffect, useState } from 'react';
import { baseCards } from '../Base-Set/Cards';
import CardsComponent from './CardsComponent';
import RandomizeButton from './randomizeButton';
import styled from 'styled-components';
import { shuffleDeck } from './utils/shuffleDeck';
import { Card, Reshuffledcard } from '../types';
import { BlankCard } from './utils/BlankCard';

const Container = styled.div`
  display: grid;
  gap: 6%;
  width: 100%;
  max-width: 65%; 
  margin: 0 auto;
`;

const CardsAndRandomizeButton: React.FC = () => {

  const [shuffledDeck, setShuffledDeck] = useState(baseCards);
  const [kingdom, setKingdom] = useState(baseCards);
  const [reShuffledCards, setReShuffledCards] = useState<Reshuffledcard[]>([]);

  const shuffleCards = () => {
    setShuffledDeck(shuffleDeck(shuffledDeck))

    let shuffledCards = [] as Card[];
    let foundACardToReplace = false;
    for(let i = 0; i < 10; i++) {
      if(isCardBeingReShuffled(reShuffledCards, kingdom[i])) {
        for(let i = 0; i < shuffledDeck.length; i++) {
          if(!kingdom.includes(shuffledDeck[i]) && !shuffledCards.includes(shuffledDeck[i])) {
            shuffledCards.push(shuffledDeck[i]);
            foundACardToReplace = true;
            break;
          }
        }
        foundACardToReplace ? foundACardToReplace = false : shuffledCards.push(BlankCard);
      } else {
        shuffledCards.push(kingdom[i])
      }
    }
    setKingdom(shuffledCards);
    setReShuffledCards([]);
  }

  const shuffleAllCards = () => {
    
    setShuffledDeck(shuffleDeck(shuffledDeck))
    let shuffledCards = [];
    for(let i = 0; i < 10; i++) {
      shuffledCards.push(shuffledDeck[i])
    }
    setKingdom(shuffledCards);
  }

  const isCardBeingReShuffled = (cards: Reshuffledcard[], card: Card) => {
    for(let i = 0; i<cards.length; i++) {
      if(cards[i].card === card) {
        return true;
      }
    }
    return false;
  }

  const removeCardFromListOfReshuffles = (cards: Reshuffledcard[], card: Card) => {
    for(let i = 0; i<cards.length; i++) {
      if(cards[i].card === card) {
        cards.splice(i, 1);
      }
    }
  }

  const handleReShuffles = (card: Reshuffledcard, action: string) => {
    let currentReShuffledCards = reShuffledCards;
    if(action === "add") {
      if(isCardBeingReShuffled(reShuffledCards, card.card)) {
        removeCardFromListOfReshuffles(reShuffledCards, card.card)
      }
      currentReShuffledCards.push(card);
    } else if (action === "remove") {
      removeCardFromListOfReshuffles(reShuffledCards, card.card)
    }
    setReShuffledCards(currentReShuffledCards);
  };

  useEffect(() => {
    shuffleAllCards()
  },[])
  

  return (
    <Container>
      <CardsComponent cards={kingdom} handleReShuffles={handleReShuffles} />
      <RandomizeButton onClick={shuffleCards} />
    </Container>
      
  );
};

export default CardsAndRandomizeButton;
