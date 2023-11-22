import React, { useState } from 'react';
import { login } from 'config/firebase';
import { StLoginBtn, StLogo, StNav, StPtag, Stcontainer } from './styles';
import mbplogoimg from 'assets/mbplogoimg.png';
import { VscAccount } from 'react-icons/vsc';

export default function Header() {
  const [Login, setLogin] = useState(true);

  const handleLogin = () => {
    login();
    setLogin(!Login);
  };
  return (
    <>
      {Login ? (
        <Stcontainer>
          <StLogo src={mbplogoimg} />
          <StNav>
            <StPtag>과제</StPtag>
            <StPtag>알고리즘</StPtag>
            <StPtag>튜터코멘트</StPtag>
          </StNav>
          <StLoginBtn onClick={handleLogin}>로그인</StLoginBtn>
        </Stcontainer>
      ) : (
        <Stcontainer>
          <StLogo src={mbplogoimg} />
          <StNav>
            <StPtag>과제</StPtag>
            <StPtag>알고리즘</StPtag>
            <StPtag>튜터코멘트</StPtag>
          </StNav>
          <StLoginBtn onClick={handleLogin}>
            <VscAccount size="3em" />
          </StLoginBtn>
        </Stcontainer>
      )}
    </>
  );
}
