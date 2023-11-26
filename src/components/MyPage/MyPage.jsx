import {
  StMyAvatar,
  StMyPageContainer,
  StMyPageGridBox,
  StMyPageNameBox,
  StMyPageProfile,
  StMyPageProfileHeader,
  StMyPageProfileMain,
  StMyPageProjectBox,
  StMyPageProjectImg,
} from 'components/MyPage/style';
import { auth, db } from 'config/firebase';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function MyPage() {
  const authData = auth.currentUser;
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    console.log(authData.uid);
    getDocs(
      query(
        collection(db, 'boards'),
        where('uid', '==', authData.uid),
        orderBy('createdAt', 'desc'),
      ),
    )
      .then((res) => {
        return res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt).toLocaleDateString('ko', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            }),
          };
        });
      })
      .then((data) => {
        setBoards(data);
      });
  }, []);

  console.log(boards);

  return (
    <>
      <StMyPageContainer>
        <StMyPageProfileHeader>
          <div>안녕하세요, {authData.displayName ?? authData.email}님😊</div>
          <button>프로필 수정 {'>'} </button>
        </StMyPageProfileHeader>
        <StMyPageProfileMain>
          <StMyPageProfile>
            <StMyAvatar $src={authData.photoURL}></StMyAvatar>
            <StMyPageNameBox>
              <div>{authData.displayName ?? authData.email}</div>
            </StMyPageNameBox>
            <div>
              <p>{boards.length}</p>&nbsp;개의 프로젝트를 보여주고 있습니다!
            </div>
          </StMyPageProfile>
          <StMyPageProjectBox>
            <StMyPageGridBox>
              {boards.map((board) => {
                return (
                  <div key={board.id}>
                    <Link to={`/boards/${board.id}`}>
                      <StMyPageProjectImg $src={board.img}></StMyPageProjectImg>
                      <h1>{board.title}</h1>
                      <div>{board.createdAt}</div>
                    </Link>
                  </div>
                );
              })}
            </StMyPageGridBox>
          </StMyPageProjectBox>
        </StMyPageProfileMain>
      </StMyPageContainer>
    </>
  );
}
