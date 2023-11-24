import React, { useState } from 'react';
import {
  StBtnContainer,
  StContainer,
  StBtn,
  StRedBtn,
  StDiv,
} from 'components/NewBoard/styles';
import { FaCode } from 'react-icons/fa';
import { useLoggedIn } from 'hooks/useAuth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'config/firebase';
import { useNavigate } from 'react-router-dom';
import { fakeData } from 'mock/allBoards';

export default function NewBoard() {
  const navigate = useNavigate();
  const { loginState } = useLoggedIn();
  // console.log('loginState', loginState);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState('project');
  const [boards, setBoards] = useState(fakeData);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeCategories = (e) => setCategories(e.target.value);

  const addBoard = async (e) => {
    e.preventDefault();
    const newBoard = {
      category: categories,
      uid: loginState.uid,
      avatar: loginState.photoURL,
      userid: loginState.email,
      title,
      content,
    };
    if (title === '' || content === '') {
      alert('제목과 내용을 입력해주세요.');
      return false;
    }
    setBoards([...boards, newBoard]);
    setContent('');
    setTitle('');

    const collectionRef = collection(db, 'boards');

    await addDoc(collectionRef, newBoard);
  };

  const cancel = () => {
    if (!(title === '') || !(content === '')) {
      return window.confirm('저장되지 않은 데이터는 지워집니다.')
        ? navigate('/boards')
        : false;
    } else {
      navigate('/boards');
    }
  };

  return (
    <>
      <StDiv>
        <h2>너의 프로젝트를 보여줘!</h2>
        <form onSubmit={addBoard}>
          <StContainer>
            <input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={onChangeTitle}
            />
            <div>
              <p>카테고리</p>
              <select onChange={onChangeCategories}>
                <option value="project">개인로그</option>
                <option value="teamproject">팀로그</option>
                <option value="algorithm">알고리즘</option>
                <option value="tutor">튜터코멘트</option>
              </select>
              <FaCode size={20} />
            </div>
            <textarea
              rows={50}
              placeholder="내용을 입력하세요."
              value={content}
              onChange={onChangeContent}
            ></textarea>
          </StContainer>
          <StBtnContainer>
            <StBtn type="button" onClick={cancel}>
              취소
            </StBtn>
            <StRedBtn type="submit">글쓰기</StRedBtn>
          </StBtnContainer>
        </form>
      </StDiv>
    </>
  );
}
