import React, { useState } from 'react';
import styled from 'styled-components';

interface ParamsProps {
  onClose: () => void;
  setOverlay: (item: string) => void;
}

const categories = ["Expansion", "Cost", "Card Type"];

const expansions = ["Base Set"];

const costs = ["1", "2", "3", "4", "5", "6"];

const cardTypes = [
  "Village", "Drawer", "Trasher", "Payload", "Cantrip", "Draw-to-x", 
  "Gainer", "Victory", "Sifter", "Treasure", "Attack", "Reaction", 
  "Throne", "Junker",
];

const ParamContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 12vw;
  left: 0;
  overflow: hidden;
  z-index: 1;
  position: absolute;

`;

const ParamItem = styled.li`
  padding: 1vw;
  cursor: pointer;
  font-size: 1.5vw;
  background-color: 'white';

  &:hover {
    background-color: lightblue;
  }
`;

const Params: React.FC<ParamsProps> = ({onClose, setOverlay}) => {

  const [dropdownParams, setDropDownParams] = useState(categories)

  const changeSelected = (item: string) => {
    setOverlay(item);
    onClose();
  };

  const getListByKeyword = (keyword: string) => {
    if(keyword === "Expansion") {
      return expansions;
    } else if (keyword === "Cost") {
      return costs;
    } else {
      return cardTypes;
    }
  }

  const handleClick = (item: string) => {
    if(categories.includes(item)) {
      setDropDownParams(getListByKeyword(item))
    } else {
      changeSelected(item)
    }
  }

  return (
    <ParamContent id="sus">
      {dropdownParams.map((item) => (
        <ParamItem
          key={item}
          onClick={() => handleClick(item)}
        >
          {item}
        </ParamItem>
      ))}
    </ParamContent>
  );
};

export default Params;