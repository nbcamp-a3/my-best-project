import React, { forwardRef, useEffect, useRef } from 'react';
import { logout } from 'config/firebase';
import { useLoggedIn } from 'hooks/useAuth';

import {
  StArrowBox,
  StLogout,
  StModalContainer,
  StMypage,
  StNameEmailBox,
  StUserInfo,
} from './style';
import { Link } from 'react-router-dom';

function Headermodal({ loginState, isModalOpen, setIsModalOpen }, ref) {
  const handleLogout = () => {
    logout();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StModalContainer ref={ref}>
      <StArrowBox />
      <StUserInfo>
        <img src={loginState.photoURL} alt="이미지" />
        <StNameEmailBox>
          <h3>{loginState.displayName}</h3>
          <p>{loginState.email}</p>
        </StNameEmailBox>
      </StUserInfo>
      <Link to="/mypage">
        <StMypage
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          마이페이지
        </StMypage>
      </Link>
      <StLogout onClick={handleLogout}>로그아웃</StLogout>
    </StModalContainer>
  );
}

export default forwardRef(Headermodal);
