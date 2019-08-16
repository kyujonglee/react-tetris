import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
