import React from 'react';
import BoardDetailContentContainer from './BoardDetailContentContainer';
import { StBoardDetailMain } from './styles';

export default function BoardDetailMain() {
  return (
    <div>
      <StBoardDetailMain>
        <BoardDetailContentContainer />
      </StBoardDetailMain>
    </div>
  );
}
