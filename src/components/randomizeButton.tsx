import React from 'react';
import styled from 'styled-components';

interface RandomizeButtonProps {
  onClick: () => void;
}

const RandButton = styled.button`
  position: relative;
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: 'DIN Round', sans-serif;
  font-size: 1.5vw;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.5; /* Set to a relative value or unit */
  margin: 0 auto;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s, background-color 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 30%;
  height: auto;

  &:after {
    background-clip: padding-box;
    background-color: #1CB0F6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:focus,
  &:main {
    user-select: auto;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }

  &:active {
    border-width: 4px 0 0;
    background: none;
  }
`;

const RandomizeButton: React.FC<RandomizeButtonProps> = ({ onClick }) => {
  return (
    <RandButton onClick={onClick}>Randomize</RandButton>
  );
};

export default RandomizeButton;