import React, { useEffect, useRef, useState } from 'react';
import {
  StMyAvatar,
  StMyPageContainer,
  StMyPageProfile,
  StMyPageProfileHeader,
  StMyPageProfileMain,
  StMyPageProfileNameBox,
} from './style';
import { Link } from 'react-router-dom';
import { auth } from 'config/firebase';
import { updateProfile } from 'firebase/auth';

export default function EditProfiles() {
  const nickNameRef = useRef('');
  const authData = auth.currentUser;
  const [changeNickName, setChangeNickName] = useState('');
  const onChange = (e) => {
    setChangeNickName(e.target.value);
  };
  const onClick = () => {
    if (!changeNickName) return alert('닉네임을 입력해주세요.');
    if (changeNickName === authData.displayName)
      return alert('닉네임이 같습니다.');
    if (!window.confirm('닉네임을 변경하시겠습니까?')) return;
    updateProfile(authData, {
      displayName: changeNickName,
    });
    alert('닉네임이 변경되었습니다.');
    window.location.reload();
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
            <StMyAvatar $src={authData.photoURL}></StMyAvatar>
            <StMyPageProfileNameBox>
              <input
                type="text"
                placeholder={authData.displayName}
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
