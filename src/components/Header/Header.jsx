import React, { useState } from 'react';
import { login } from 'config/firebase';
import { StLoginBtn, StLogo, StNav, StPtag, Stcontainer } from './styles';
import mbplogoimg from 'assets/mbplogoimg.png';
import { VscAccount } from 'react-icons/vsc';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const [Login, setLogin] = useState(true);

  const handleLogin = () => {
    login();
    setLogin(!Login);
  };
  return (
    <>
      {Login ? (
        <Stcontainer>
          <StLogo
            onClick={() => {
              navigate('/');
            }}
            src={mbplogoimg}
          />
          <StNav>
            <NavLink to="/boards">과제</NavLink>
            <NavLink to="">알고리즘</NavLink>
            <NavLink to="">튜터코멘트</NavLink>
          </StNav>
          <StLoginBtn onClick={handleLogin}>로그인</StLoginBtn>
        </Stcontainer>
      ) : (
        <Stcontainer>
          <StLogo src={mbplogoimg} />
          <StNav>
            <StPtag to="/boards">과제</StPtag>
            <StPtag to="">알고리즘</StPtag>
            <StPtag to="">튜터코멘트</StPtag>
          </StNav>
          <StLoginBtn onClick={handleLogin}>
            <VscAccount size="3em" />
          </StLoginBtn>
        </Stcontainer>
      )}
    </>
  );
}
