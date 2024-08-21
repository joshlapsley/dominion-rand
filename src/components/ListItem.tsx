import styled from 'styled-components';
import React from 'react';

interface ArticleProps {
  colour: string;
  isSelected: boolean;
}

interface ListItemProps {
  content: string;
  colour: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Article = styled.article<ArticleProps>`
  position: relative;
  width: 140px;
  height: 100px;
  margin: 5px;
  float: left;
  border: 2px solid #50bcf2;
  box-sizing: border-box;
  
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    transition: 0.5s ease;
    background-color: ${({ isSelected, colour }) => (isSelected ? colour : 'transparent')};
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
  }
`;



const ListItem: React.FC<ListItemProps> = ({ content, colour, isSelected, onSelect }) => {
  return (
    <Article colour={colour} isSelected={isSelected}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
      />
      <div>{content}</div>
    </Article>
  );
};

export default ListItem;