import React from 'react';
import { StButton } from './styles';
import { FaGithub } from 'react-icons/fa';
import { login } from 'config/firebase';

export default function AuthStartScreen({ toggleComponent }) {
  const handleGithubLogin = () => login();

  return (
    <>
      <header>
        <h2>내.베.프</h2>
        <span>My Best Project</span>
      </header>
      <div>
        <span>내일배움캠프 React 3기 수강생 여러분!</span>
        <span>서로의 프로젝트를 공유해 보세요!</span>
      </div>
      <div>
        <StButton onClick={handleGithubLogin} $github>
          <FaGithub size="1rem" />
          깃헙으로 3초만에 시작하기
        </StButton>
        <StButton onClick={toggleComponent}>이메일로 시작하기</StButton>
      </div>
    </>
  );
}
