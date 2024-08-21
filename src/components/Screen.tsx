import React from 'react';
//import CardsAndRandomizeButton from './CardsAndRandomizeButton';
import ListItems from './ListItems';

const Screen: React.FC = () => {

  return (
    <ListItems colour="#50bcf2" items={["test", "test2", "josh", "test5"]} oneAtATime={true}/>
  );
};

export default Screen;
