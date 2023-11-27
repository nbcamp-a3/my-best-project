import React, { useRef, useState } from 'react';
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
  StDownloadImg,
} from 'components/NewBoard/styles';
import { useLoggedIn } from 'hooks/useAuth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from 'config/firebase';
import { useNavigate } from 'react-router-dom';
import { categories } from 'components/AllBoard/AllBoardIndex';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/modules/boards';
import { storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import BoardEditor from 'components/BoardEditor/BoardEditor';

export default function NewBoardContent() {
  const authData = auth.currentUser;
  const navigate = useNavigate();
  const { loginState } = useLoggedIn();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('project');
  const [github, setGithub] = useState('');
  // const [image, setImage] = useState();
  const editorRef = useRef();
  //사진 첨부 안 할 시 산타르탄이 등장
  const defaultImage =
    'https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker.gif';

  const onChangeTitle = (e) => setTitle(e.target.value);
  // const onChangeContent = (e) => setContent(e.target.value);
  const onChangeCategories = (e) => setCategory(e.target.value);
  const onChangeGithub = (e) => setGithub(e.target.value);
  // const onChangeImage = (e) => {
  //   //구분성을 위해 uuid 사용
  //   const imgs = ref(storage, `image/${uuidv4()}_${loginState.email}`);
  //   uploadBytes(imgs, e.target.files[0]).then((data) => {
  //     getDownloadURL(data.ref)
  //       .then((val) => {
  //         setImage(val);
  //       })
  //       .catch((error) => {
  //         alert('사진 업로드에 실패했습니다.');
  //       });
  //   });
  // };

  const handleAddBoard = async (e) => {
    e.preventDefault();

    const content = editorRef.current.set();

    if (title === '') {
      return alert('제목을 입력해주세요.');
    }

    if (content === '<p><br></p>') {
      return alert('내용을 입력해주세요.');
    }

    const newBoard = {
      category: category,
      createdAt: new Date().toISOString(),
      avatar: loginState.photoURL,
      userid: loginState.email,
      title,
      content,
      github,
      uid: authData.uid,
      like: 0,
      img: defaultImage,
      // img: image || defaultImage,
      displayName: authData.displayName,
    };

    dispatch(addBoard(newBoard));
    const collectionRef = collection(db, 'boards');
    await addDoc(collectionRef, newBoard);
    alert('등록되었습니다😀');
    setContent('');
    setTitle('');
    navigate(-1);
  };

  const handleCancel = () => {
    if (!(title === '') || !(content === '')) {
      if (!window.confirm('저장되지 않은 데이터는 지워집니다.')) return;
    }
    navigate('/boards');
  };

  return (
    <StDiv>
      <h2>너의 프로젝트를 보여줘!</h2>
      <form onSubmit={handleAddBoard}>
        <div>
          <StTitle
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={onChangeTitle}
          />
          <StIconsDiv>
            <p>카테고리</p>
            <select onChange={onChangeCategories}>
              {categories.map((c) => {
                return (
                  <option key={c.value} value={c.value}>
                    {c.name}
                  </option>
                );
              })}
            </select>
            <StGitHub>
              GitHub:{' '}
              <input
                placeholder="GitHub 주소를 입력해주세요."
                type="url"
                value={github}
                onChange={onChangeGithub}
              />
            </StGitHub>
          </StIconsDiv>
          <div>
            <BoardEditor ref={editorRef} />
          </div>
          {/* <StTextarea
            rows={50}
            placeholder="내용을 입력하세요."
            value={content}
            onChange={onChangeContent}
          ></StTextarea> */}
          {/* <div>
            <StImageFile
              type="file"
              accept=".gif, .jpg, .png"
              onChange={onChangeImage}
            />
            <StDownloadImg>
              <p>이미지 미리보기</p>
              <img src={image || null} />
            </StDownloadImg>
          </div> */}
        </div>
        <StBtnContainer>
          <StBtn type="button" onClick={handleCancel}>
            취소
          </StBtn>
          <StRedBtn type="submit">글쓰기</StRedBtn>
        </StBtnContainer>
      </form>
    </StDiv>
  );
}
