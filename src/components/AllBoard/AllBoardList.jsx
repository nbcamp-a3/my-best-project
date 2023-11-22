import React from 'react';
import { StAllBoardList } from './styles';
import AllBoardCard from './AllBoardCard';
import { fakeData } from 'mock/allBoards';

export default function AllBoardList() {
  return (
    <StAllBoardList>
      {fakeData.map((data, index) => (
        <AllBoardCard key={index} data={data} />
      ))}
    </StAllBoardList>
  );
}
