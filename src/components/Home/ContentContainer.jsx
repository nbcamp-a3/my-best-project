import React, { useEffect, useState } from 'react';
import { StContentContainer } from './style';
import ContexntBox from './ContexntBox';
import { collection, getDocs } from '@firebase/firestore';
import { db } from 'config/firebase';
import { setBoards } from 'redux/modules/boards';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentContainer() {
  const dispatch = useDispatch();
  const boards = useSelector((store) => store.boards);
  const [filteredBoards, setFilteredBoards] = useState([]);
  const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    getDocs(collection(db, 'boards'))
      .then((res) => {
        console.log(res);
        return res.docs.map((doc) => {
          console.log(doc.data());
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
    <StContentContainer>
      {filteredBoards.map((data, index) => {
        return <ContexntBox key={index} data={data} />;
      })}
    </StContentContainer>
  );
}
