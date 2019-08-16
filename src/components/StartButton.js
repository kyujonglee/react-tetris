import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  all: unset;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2em;
  text-align : center;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
