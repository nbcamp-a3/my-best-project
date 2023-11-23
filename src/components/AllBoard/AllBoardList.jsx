import React, { useEffect, useState } from 'react';
import { StAllBoardList } from './styles';
import AllBoardCard from './AllBoardCard';
import { fakeData } from 'mock/allBoards';
import { useSelector } from 'react-redux';

export default function AllBoardList() {
  const [boards, setBoards] = useState(fakeData);
  const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    setBoards(fakeData.filter((board) => board.category === selectedCategory));
  }, [selectedCategory]);

  return (
    <StAllBoardList>
      {boards.map((data, index) => (
        <AllBoardCard key={index} data={data} />
      ))}
    </StAllBoardList>
  );
}
