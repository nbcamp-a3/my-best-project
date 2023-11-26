import { categories } from 'components/AllBoard/AllBoardIndex';
import {
  StBtn,
  StBtnContainer,
  StDiv,
  StDownloadImg,
  StGitHub,
  StIconsDiv,
  StImageFile,
  StRedBtn,
  StTextarea,
  StTitle,
} from 'components/NewBoard/styles';
import { db, storage } from 'config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useLoggedIn } from 'hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function EditBoardContent() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { loginState } = useLoggedIn();
  const navigate = useNavigate();

  // 정보 불러오기
  useEffect(() => {
    const boardRef = doc(db, 'boards', id);
    getDoc(boardRef).then((res) => {
      setData(res.data());
      setEditTitle(res.data().title);
      setEditContents(res.data().content);
      setEditCategory(res.data().category);
      setEditGithub(res.data().github);
      setEditImage(res.data().img);
    });
  }, [id]);

  const [editTitle, setEditTitle] = useState('');
  const [editContents, setEditContents] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editGithub, setEditGithub] = useState('');
  const [editImage, setEditImage] = useState('');

  const onChangeEditTitle = (e) => setEditTitle(e.target.value);
  const onChangeEditContents = (e) => setEditContents(e.target.value);
  const onChangeEditCategory = (e) => setEditCategory(e.target.value);
  const onChangeEditGithub = (e) => setEditGithub(e.target.value);
  const onChangeEditImage = (e) => {
    const imgs = ref(storage, `image/${uuidv4()}_${loginState.email}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, 'imgs');
      getDownloadURL(data.ref)
        .then((val) => {
          setEditImage(val);
        })
        .catch((error) => {
          console.log('error', error);
          alert('사진 업로드에 실패했습니다.');
        });
    });
  };

  const handleCancel = () => {
    if (!(data.title === editTitle) || !(data.content === editContents)) {
      if (!window.confirm('변경했던 내용이 저장되지 않을 수도 있습니다.'))
        return;
    }
    navigate('/boards');
  };

  const handleEditBoard = async (e) => {
    e.preventDefault();
    if (
      data.title === editTitle &&
      data.content === editContents &&
      data.img === editImage &&
      data.category === editCategory &&
      data.github === editGithub
    ) {
      alert('수정한 내용이 없습니다.');
      return;
    }
    const editBoard = {
      ...data,
      category: editCategory,
      title: editTitle,
      content: editContents,
      github: editGithub,
      img: editImage,
    };
    const collectionRef = doc(db, 'boards', id);
    await updateDoc(collectionRef, editBoard);
    alert('수정되었습니다😀');
    navigate(-1);
  };

  if (!data) return null;
  return (
    <>
      <StDiv>
        <h2>너의 프로젝트를 보여줘!</h2>
        <form onSubmit={handleEditBoard}>
          <div>
            <StTitle
              type="text"
              value={editTitle}
              onChange={onChangeEditTitle}
            />
            <StIconsDiv>
              <p>카테고리</p>
              <select onChange={onChangeEditCategory} value={editCategory}>
                {categories.map((c) => {
                  return (
                    <option key={c.value} value={c.value}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <StGitHub>
                GitHub:
                <input
                  placeholder="GitHub 주소를 입력해주세요."
                  type="url"
                  value={editGithub}
                  onChange={onChangeEditGithub}
                />
              </StGitHub>
            </StIconsDiv>
            <StTextarea
              rows={50}
              value={editContents}
              onChange={onChangeEditContents}
              placeholder="내용을 입력하세요."
            ></StTextarea>
            <div>
              <StImageFile
                type="file"
                accept=".gif, .jpg, .png"
                onChange={onChangeEditImage}
              />
              <StDownloadImg>
                <p>이미지 미리보기</p>
                <img src={editImage || null} />
              </StDownloadImg>
            </div>
          </div>
          <StBtnContainer>
            <StBtn type="button" onClick={handleCancel}>
              취소
            </StBtn>
            <StRedBtn type="submit">수정</StRedBtn>
          </StBtnContainer>
        </form>
      </StDiv>
    </>
  );
}
