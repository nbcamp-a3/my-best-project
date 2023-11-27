import AllBoardIndex from 'components/AllBoard/AllBoardIndex';
import AllBoardList from 'components/AllBoard/AllBoardList';
import { StAllboardContainer } from 'components/AllBoard/styles';
import React from 'react';

export default function AllBoard() {
  return (
    <StAllboardContainer>
      <AllBoardIndex />
      <AllBoardList />
    </StAllboardContainer>
  );
}
