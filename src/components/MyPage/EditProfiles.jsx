import React, { useEffect, useRef, useState } from 'react';
import {
  StMyAvatar,
  StMyPageContainer,
  StMyPageProfile,
  StMyPageProfileHeader,
  StMyPageProfileMain,
  StMyPageProfileNameBox,
} from './style';
import { Link, useNavigate } from 'react-router-dom';
import { auth, storage } from 'config/firebase';
import { updateProfile } from 'firebase/auth';
import { TbCameraCog } from 'react-icons/tb';
import { useInput } from 'hooks/useInput';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function EditProfiles() {
  const authData = auth.currentUser;

  const navigate = useNavigate();
  const nickNameRef = useRef('');
  const [image, setImage] = useState();

  const { value: changeNickName, onChange } = useInput(authData.displayName);

  const onClick = (e) => {
    console.log('click');
    e.preventDefault();
    if (!changeNickName) return alert('닉네임을 입력해주세요.');
    if (changeNickName === authData.displayName && !image)
      return alert('변경사항이 없습니다.');
    if (!window.confirm('프로필을 변경하시겠습니까?')) return;
    updateProfile(authData, {
      displayName: changeNickName,
      photoURL: image,
    }).then(() => {
      alert('프로필이 변경되었습니다.');
      authData.reload().then(() => {
        navigate(-1);
      });
    });
  };

  const onChangeImage = (e) => {
    const imgs = ref(storage, `image/${uuidv4()}_${authData.email}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref)
        .then((val) => {
          setImage(val);
        })
        .catch((error) => {
          alert('사진 업로드에 실패했습니다.');
        });
    });
  };

  useEffect(() => {
    nickNameRef.current.focus();
  }, []);

  return (
    <div>
      <StMyPageContainer>
        <StMyPageProfileHeader>
          <Link to={`/mypage`}>
            <button> {'<'} 뒤로 가기 </button>
          </Link>
          <div>프로필 수정😊</div>
          <button onClick={onClick}> 저장 하기 </button>
        </StMyPageProfileHeader>
        <StMyPageProfileMain>
          <StMyPageProfile>
            <StMyAvatar $src={image ?? authData.photoURL}>
              <label htmlFor="changeImg">
                <TbCameraCog size={27} />
              </label>
              <input
                id="changeImg"
                type="file"
                accept=".gif, .jpg, .png"
                onChange={onChangeImage}
              />
            </StMyAvatar>
            <StMyPageProfileNameBox>
              <input
                type="text"
                placeholder={'닉네임을 입력해주세요.'}
                onChange={onChange}
                value={changeNickName}
                ref={nickNameRef}
                maxLength={8}
              ></input>
            </StMyPageProfileNameBox>
          </StMyPageProfile>
        </StMyPageProfileMain>
      </StMyPageContainer>
    </div>
  );
}
