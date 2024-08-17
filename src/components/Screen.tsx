import React from 'react';
import CardsComponent from './CardsComponent';
import { baseCards } from '../Base-Set/Cards';


const Screen: React.FC = () => {

  return (
   <CardsComponent cards={baseCards}/>
  );
};

export default Screen;
