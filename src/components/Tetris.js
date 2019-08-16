import React from 'react';
import styled from 'styled-components';

import { createStage } from '../gameHelpers';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #130f40;
  overflow: hidden;
`;

const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
