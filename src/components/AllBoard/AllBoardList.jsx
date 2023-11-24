import React, { useEffect, useState } from 'react';
import { StAllBoardList, StWriteButton, StWriteButtonBox } from './styles';
import AllBoardCard from './AllBoardCard';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { setBoards } from 'redux/modules/boards';
import AllBoardEmptyCard from './AllBoardEmptyCard';

export default function AllBoardList() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const boards = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  const [filteredBoards, setFilteredBoards] = useState([]);
  const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    getDocs(collection(db, 'boards'))
      .then((res) => {
        return res.docs.map((doc) => doc.data());
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
        <StWriteButton>
          <Link to="/boards/new">글쓰기</Link>
        </StWriteButton>
      </StWriteButtonBox>
      {filteredBoards.length === 0 ? (
        <AllBoardEmptyCard/>
      ) : ( 
        filteredBoards.map((data, index) => (
          <AllBoardCard key={index} data={data} />
        ))
      )}
    </StAllBoardList>
  );
}
