import React, { useEffect, useRef, useState } from 'react';
import { StLoginBtn, StLogo, StLogoBox, StNav, Stcontainer } from './styles';
import mbplogoimg from 'assets/mbplogoimg.png';
import { VscAccount } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import AuthModal from 'components/Auth/AuthModal';
import { useLoggedIn } from 'hooks/useAuth';
import { logout } from 'config/firebase';
import Headermodal from 'components/Headermodal/Headermodal';

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loginState } = useLoggedIn();
  const modalRef = useRef(null);
  const loginBtnRef = useRef(null);

  const handleLoginClickedBtn = () => {
    setShowLoginModal(true);
  };

  const handleClosedBtn = () => setShowLoginModal(false);

  useEffect(() => {
    if (loginState) setShowLoginModal(false);
  }, [loginState]);

  useEffect(() => {
    console.log(modalRef);
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  const clickModalOutside = (event) => {
    if (
      isModalOpen &&
      !modalRef.current?.contains(event.target) &&
      !loginBtnRef.current?.contains(event.target)
    )
      setIsModalOpen(false);
  };

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
          <StLogoBox ref={loginBtnRef}>
            <StLoginBtn onClick={() => setIsModalOpen(!isModalOpen)}>
              <VscAccount size="2em" />
            </StLoginBtn>
            {isModalOpen && (
              <Headermodal ref={modalRef} loginState={loginState} />
            )}
          </StLogoBox>
        ) : (
          <StLoginBtn onClick={handleLoginClickedBtn}>로그인</StLoginBtn>
        )}
        {showLoginModal && <AuthModal onClose={handleClosedBtn} />}
      </Stcontainer>
    </>
  );
}
