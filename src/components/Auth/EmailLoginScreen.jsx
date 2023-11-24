import React from 'react';
import { StSignForm, StGoToBackBtn, StGoToSignUpBtn } from './styles';
import { FaArrowLeft } from 'react-icons/fa6';

export default function EmailLoginScreen({ toggleComponent }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <h2>이메일 로그인</h2>
      </header>
      <StSignForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            autoComplete="username"
            placeholder="이메일 입력"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호 입력"
          />
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
        <div>
          <span>
            아직 가입하지 않았나요?
            <StGoToSignUpBtn>회원가입하기</StGoToSignUpBtn>
          </span>
        </div>
      </StSignForm>
      <StGoToBackBtn onClick={toggleComponent}>
        <FaArrowLeft />
        뒤로
      </StGoToBackBtn>
    </>
  );
}
