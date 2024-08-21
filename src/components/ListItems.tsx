import React, { useState } from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';

interface ListItemsProps {
  items: string[];
  colour: string;
  oneAtATime?: boolean;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
`;

const ListItems: React.FC<ListItemsProps> = ({ items, colour, oneAtATime }) => {

    const [selectedIndexes, setSelectedIndexes] = useState([] as string[]);

    const [showFirstComponent, setShowFirstComponent] = useState(true);

    const handleSelect = (item: string) => {
      setShowFirstComponent(false);
      setSelectedIndexes(prevIndexes => {
        let newSelectedIndexes = [...prevIndexes];
        if (oneAtATime && newSelectedIndexes.length > 0) {
          newSelectedIndexes.pop();
        }
        if (!newSelectedIndexes.includes(item)) {
          newSelectedIndexes.push(item);
        } else {
          newSelectedIndexes = newSelectedIndexes.filter(element => element !== item);
        }
        return newSelectedIndexes;
      });
    };

  return (
    <GridContainer>
      {items.map((item, index) => (
        <ListItem
          key={item}
          content={item}
          colour={colour}
          isSelected={selectedIndexes.includes(item) || (showFirstComponent && index === 0)}
          onSelect={() => handleSelect(item)}
        />
      ))}
    </GridContainer>
  );
};

export default ListItems;