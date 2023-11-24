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
import { categories } from 'components/AllBoard/AllBoardIndex';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/modules/boards';
import { storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function NewBoard() {
  const navigate = useNavigate();
  const { loginState } = useLoggedIn();
  const dispatch = useDispatch();
  const getCategoty = categories;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('project');
  const [image, setImage] = useState([]);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeCategories = (e) => setCategory(e.target.value);
  const onChangeImage = (e) => {
    //구분성을 위해 uuid 사용
    const imgs = ref(storage, `image/${uuidv4()}_${loginState.email}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, 'imgs');
      getDownloadURL(data.ref)
        .then((val) => {
          setImage(val);
        })
        .catch((error) => {
          console.log('error', error);
          alert('사진 업로드에 실패했습니다.');
        });
    });
  };

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
    dispatch(addBoard(newBoard));

    const collectionRef = collection(db, 'boards');
    await addDoc(collectionRef, newBoard);

    // 사진이 storage에 올라가는 시간 때문에 만약을 대비해 setTimeout 사용
    setTimeout(() => {
      alert('등록되었습니다😀');
      setContent('');
      setTitle('');
      navigate(-1);
    }, 2000);
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
              <input
                type="file"
                accept=".gif, .jpg, .png"
                onChange={onChangeImage}
              />
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
