import React, { useEffect } from 'react';
import { logout } from 'config/firebase';

// import { useNavigate } from 'react-router-dom';

import {
  StArrowBox,
  StLogout,
  StModalContainer,
  StMypage,
  StNameEmailBox,
  StUserInfo,
} from './style';

export default function Headermodal() {
  const handleLogout = () => logout();

  return (
    <StModalContainer>
      <StArrowBox />
      <StUserInfo>
        <img alt="이미지" />
        <StNameEmailBox>
          <h3>dfdafsdf</h3>
          <p>alswnsgdfffsur11933542@gmail.com</p>
        </StNameEmailBox>
      </StUserInfo>
      <StMypage>마이페이지</StMypage>
      <StLogout onClick={handleLogout}>로그아웃</StLogout>
    </StModalContainer>
  );
}
