import { auth, db } from 'config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  StComment,
  StCommentBtn,
  StCommentDate,
  StCommentsContainer,
  StDelEditBtn,
  StUserName,
} from './styles';

export default function Comments() {
  const authData = auth.currentUser;
  const { id } = useParams();
  const [comment, setComment] = useState('');

  useEffect(() => {
    getDocs(query(collection(db, 'comments'), orderBy('createdAt', 'desc')))
      .then((res) => {
        return res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
      })
      .then((data) => {
        setAllComments(data);
      });
  }, []);

  const [allComments, setAllComments] = useState([]);
  const onChangeComment = (e) => setComment(e.target.value);

  const hanbleAddComment = async (e) => {
    e.preventDefault();
    if (!authData.email) {
      alert('로그인 후 이용해주세요!😀');
      return false;
    }
    if (comment === '') {
      alert('댓글 내용을 입력해주세요!😀');
      return false;
    }
    const newComment = {
      createdAt: new Date().toISOString(),
      userNickname: authData.displayName || authData.email,
      comment,
      boardid: id,
      uuid: uuidv4(),
    };
    const collectionRef = collection(db, 'comments');
    const res = await addDoc(collectionRef, newComment);
    alert('등록되었습니다😀');
    setComment('');
    setAllComments([
      {
        ...newComment,
        id: res.id,
      },
      ...allComments,
    ]);
  };

  const handleDeleteComment = async (docId) => {
    console.log(docId, allComments);
    const deletedComment = allComments.filter((c) => {
      return c.id !== docId;
    });
    if (!window.confirm('삭제하시겠습니까?')) return;
    alert('삭제되었습니다.');
    const commentRef = doc(db, 'comments', docId);
    await deleteDoc(commentRef);
    setAllComments(deletedComment);
  };

  return (
    <StCommentsContainer>
      <StComment>댓글</StComment>
      {authData && (
        <form onSubmit={hanbleAddComment}>
          <input
            placeholder="댓글을 입력해주세요!"
            value={comment}
            onChange={onChangeComment}
          />
          <StCommentBtn $padding="20px" type="submit">
            등록
          </StCommentBtn>
        </form>
      )}
      <ul>
        {allComments.map((c) => {
          return (
            id === c.boardid && (
              <li key={c.uuid}>
                <StUserName>{c.userNickname}</StUserName>
                <StCommentDate>
                  <p>{c.comment}</p>
                  <p>
                    {new Date(c.createdAt).toLocaleDateString('ko', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </StCommentDate>
                {authData?.displayName === c.userNickname ||
                authData?.email === c.userNickname ? (
                  <StDelEditBtn>
                    <StCommentBtn
                      $padding="10px"
                      type="button"
                      onClick={() => {
                        handleDeleteComment(c.id);
                      }}
                    >
                      삭제
                    </StCommentBtn>
                  </StDelEditBtn>
                ) : (
                  ''
                )}
              </li>
            )
          );
        })}
      </ul>
    </StCommentsContainer>
  );
}
