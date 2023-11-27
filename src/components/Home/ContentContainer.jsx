import React, { useEffect, useState } from 'react';
import { StContentContainer } from './style';
import ContexntBox from './ContexntBox';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { db } from 'config/firebase';
import { setBoards } from 'redux/modules/boards';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentContainer() {
  const dispatch = useDispatch();
  const boards = useSelector((store) => store.boards);
  // const [filteredBoards, setFilteredBoards] = useState([]);
  // const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    getDocs(query(collection(db, 'boards'), orderBy('createdAt', 'desc')))
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
  }, [dispatch]);

  const sliced = boards.slice(0, 4);

  return (
    <StContentContainer>
      {sliced.map((data, index) => {
        return <ContexntBox key={index} data={data} />;
      })}
    </StContentContainer>
  );
}
