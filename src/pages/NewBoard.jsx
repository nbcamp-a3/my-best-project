import React, { useState } from 'react';
import {
  StBtnContainer,
  StBtn,
  StRedBtn,
  StDiv,
  StGitHub,
  StImageFile,
  StIconsDiv,
  StTitle,
  StTextarea,
} from 'components/NewBoard/styles';
import { useLoggedIn } from 'hooks/useAuth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'config/firebase';
import { useNavigate } from 'react-router-dom';
import { categories } from 'components/AllBoard/AllBoardIndex';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/modules/boards';
import { storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useInput } from 'hooks/useInput';

export default function NewBoard() {
  const navigate = useNavigate();
  const { loginState } = useLoggedIn();
  const dispatch = useDispatch();

  const title = useInput('');
  const content = useInput('');
  const category = useInput('project');
  const github = useInput('');

  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //사진 첨부 안 할 시 산타르탄이 등장
  const defaultImage =
    'https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker.gif';

  const onChangeImage = (e) => {
    setIsLoading(true);
    //구분성을 위해 uuid 사용
    const imgs = ref(storage, `image/${uuidv4()}_${loginState.email}`);
    const uploadTask = uploadBytesResumable(imgs, e.target.files[0]);
    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        alert('사진 업로드에 실패했습니다.');
        console.error(error);
      },
      () => {
        getDownloadURL(imgs).then((downloadUrl) => {
          setIsLoading(false);
          setImage(downloadUrl);
        });
      },
    );
  };

  const handleAddBoard = async (e) => {
    e.preventDefault();

    if (isLoading) {
      alert('이미지 로딩중입니다.');
      return;
    }

    const newBoard = {
      category: category,
      createdAt: new Date().toISOString(),
      uid: loginState.uid,
      avatar: loginState.photoURL,
      userid: loginState.email,
      title,
      content,
      github,
      img: image[0] ? image : defaultImage,
    };
    if (title === '' || content === '') {
      alert('제목과 내용을 입력해주세요.');
      return false;
    }
    dispatch(addBoard(newBoard));

    const collectionRef = collection(db, 'boards');
    await addDoc(collectionRef, newBoard);

    alert('등록되었습니다😀');
    navigate(-1);
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
          <div>
            <StTitle type="text" placeholder="제목을 입력하세요." {...title} />
            <StIconsDiv>
              <p>카테고리</p>
              <select onChange={category.onChangeCategories}>
                {categories.map((c) => {
                  return (
                    <option key={c.value} value={c.value}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <StImageFile
                type="file"
                accept=".gif, .jpg, .png"
                onChange={onChangeImage}
              />
              <StGitHub>
                GitHub: <input type="url" {...github} />
              </StGitHub>
            </StIconsDiv>
            <StTextarea
              rows={50}
              placeholder="내용을 입력하세요."
              {...content}
            ></StTextarea>
          </div>
          {image && <img src={image} alt="" />}
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
