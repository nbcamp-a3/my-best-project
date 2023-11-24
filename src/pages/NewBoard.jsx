import React, { useState } from 'react';
import {
  StBtnContainer,
  StContainer,
  StBtn,
  StRedBtn,
  StDiv,
} from 'components/NewBoard/styles';
// import { FaCode } from 'react-icons/fa';
import { useLoggedIn } from 'hooks/useAuth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'config/firebase';
import { useNavigate } from 'react-router-dom';
import { fakeData } from 'mock/allBoards';
import { categories } from 'components/AllBoard/AllBoardIndex';

export default function NewBoard() {
  const navigate = useNavigate();
  const { loginState } = useLoggedIn();
  // console.log('loginState', loginState);

  const getCategoty = categories;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('project');
  const [boards, setBoards] = useState(fakeData);
  const [image, setImage] = useState(null);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeCategories = (e) => setCategory(e.target.value);
  const onChangeImage = (e) => setImage(e.target.files[0]);

  console.log(image);

  const handleAddBoard = async (e) => {
    e.preventDefault();
    const newBoard = {
      category: category,
      uid: loginState.uid,
      avatar: loginState.photoURL,
      userid: loginState.email,
      title,
      content,
      img: image,
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

  const handleCancel = () => {
    if (!(title === '') || !(content === '')) {
      if (!window.confirm('저장되지 않은 데이터는 지워집니다.')) return;
    }
    navigate('/boards');
  };

  return (
    <>
      <StDiv>
        <h2>너의 프로젝트를 보여줘!</h2>
        <form onSubmit={handleAddBoard}>
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
                {getCategoty.map((c) => {
                  return (
                    <option key={c.value} value={c.value}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              {/* <FaCode size={20} /> */}
              <input type="file" onChange={onChangeImage} />
            </div>
            <textarea
              rows={50}
              placeholder="내용을 입력하세요."
              value={content}
              onChange={onChangeContent}
            ></textarea>
          </StContainer>
          <StBtnContainer>
            <StBtn type="button" onClick={handleCancel}>
              취소
            </StBtn>
            <StRedBtn type="submit">글쓰기</StRedBtn>
          </StBtnContainer>
        </form>
      </StDiv>
    </>
  );
}
