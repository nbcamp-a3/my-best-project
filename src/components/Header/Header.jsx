import React, { useEffect, useState } from 'react';
import { StLoginBtn, StLogo, StNav, Stcontainer } from './styles';
import mbplogoimg from 'assets/mbplogoimg.png';
import { VscAccount } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import AuthModal from 'components/Auth/AuthModal';
import { useLoggedIn } from 'hooks/useAuth';
import { logout } from 'config/firebase';

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loginState } = useLoggedIn();

  const handleLoginClickedBtn = () => setShowLoginModal(true);
  const handleClosedBtn = () => setShowLoginModal(false);

  useEffect(() => {
    if (loginState) setShowLoginModal(false);
  }, [loginState]);

  return (
    <>
      <Stcontainer>
        <Link to="/">
          <StLogo src={mbplogoimg} />
        </Link>
        <StNav>
          <NavLink to="/boards">과제</NavLink>
          <NavLink to="">알고리즘</NavLink>
          <NavLink to="">튜터코멘트</NavLink>
        </StNav>

        {loginState ? (
          <StLoginBtn>
            <VscAccount size="3em" />
          </StLoginBtn>
        ) : (
          <StLoginBtn onClick={handleLoginClickedBtn}>로그인</StLoginBtn>
        )}
        {showLoginModal && <AuthModal onClose={handleClosedBtn} />}
      </Stcontainer>
    </>
  );
}
