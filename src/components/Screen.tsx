import React from 'react';
import { baseCards } from '../Base-Set/Cards';
import CardsComponent from './CardsComponent';


const Screen: React.FC = () => {

  return (
    <>
    <CardsComponent cards={baseCards} />
    </>
      
  );
};

export default Screen;
