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

function Headermodal({ loginState }, ref) {
  // console.log(loginState);
  console.log('ref:', ref);
  const handleLogout = () => logout();

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
      <StMypage>마이페이지</StMypage>
      <StLogout onClick={handleLogout}>로그아웃</StLogout>
    </StModalContainer>
  );
}

export default forwardRef(Headermodal);
