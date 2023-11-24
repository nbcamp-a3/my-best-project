import React, { useEffect, useState } from 'react';
import { StAllBoardList, StWriteButton, StWriteButtonBox } from './styles';
import AllBoardCard from './AllBoardCard';
import { fakeData } from 'mock/allBoards';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AllBoardList() {
  const [boards, setBoards] = useState(fakeData);
  const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    setBoards(fakeData.filter((board) => board.category === selectedCategory));
  }, [selectedCategory]);

  return (
    <StAllBoardList>
      <StWriteButtonBox>
        <StWriteButton>
          <Link to="/boards/new">글쓰기</Link>
        </StWriteButton>
      </StWriteButtonBox>
      {boards.map((data, index) => (
        <AllBoardCard key={index} data={data} />
      ))}
    </StAllBoardList>
  );
}
