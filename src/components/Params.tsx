import React from 'react';
import styled from 'styled-components';
import { CardType } from '../types';

interface ParamsProps {
  onClose: () => void;
  setOverlay: (item: CardType) => void;
}

const params = [
  "Village", "Drawer", "Trasher", "Payload", "Cantrip", "Draw-to-x", 
  "Gainer", "Victory", "Sifter", "Treasure", "Attack", "Reaction", 
  "Throne", "Junker", "Base set"
];

const ParamContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute;
  width: 12vw;
  left: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const ParamItem = styled.li`
  padding: 1vw;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.5vw;
  background-color: 'white';

  &:hover {
    background-color: lightblue;
  }
`;

const Params: React.FC<ParamsProps> = ({onClose, setOverlay}) => {

  const changeSelected = (item: CardType) => {
    setOverlay(item);
    onClose();
  };

  return (
    <ParamContent>
      {params.map((item) => (
        <ParamItem
          key={item}
          onClick={() => changeSelected(item as CardType)}
        >
          {item}
        </ParamItem>
      ))}
    </ParamContent>
  );
};

export default Params;