import React, { useEffect, useState } from 'react';
import { StAllBoardList, StWriteButton, StWriteButtonBox } from './styles';
import AllBoardCard from './AllBoardCard';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { setBoards } from 'redux/modules/boards';
import AllBoardEmptyCard from './AllBoardEmptyCard';
import { db } from 'config/firebase';

export default function AllBoardList() {
  const boards = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  const [filteredBoards, setFilteredBoards] = useState([]);
  const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    getDocs(collection(db, 'boards'))
      .then((res) => {
        return res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
      })
      .then((data) => {
        dispatch(setBoards(data));
      });
  }, []);

  useEffect(() => {
    if (!boards) return;
    setFilteredBoards(
      boards.filter((board) => board.category === selectedCategory),
    );
  }, [selectedCategory, boards]);

  return (
    <StAllBoardList>
      <StWriteButtonBox>
        <Link to="/boards/new">
          <StWriteButton>글쓰기</StWriteButton>
        </Link>
      </StWriteButtonBox>
      {filteredBoards.length === 0 ? (
        <AllBoardEmptyCard />
      ) : (
        filteredBoards.map((data, index) => (
          <AllBoardCard key={index} data={data} />
        ))
      )}
    </StAllBoardList>
  );
}
