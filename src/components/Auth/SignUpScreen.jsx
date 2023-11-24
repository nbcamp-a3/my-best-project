import React from 'react';
import { StGoToBackBtn, StSignForm } from './styles';
import { FaArrowLeft } from 'react-icons/fa';

export default function SignUpScreen({ toggleComponent }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <h2>회원가입</h2>
      </header>
      <StSignForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            autoComplete="nickname"
            placeholder="닉네임 입력"
            required
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            autoComplete="username"
            placeholder="이메일 입력"
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호 입력"
            required
          />
        </div>
        <div>
          <label htmlFor="password-check">비밀번호</label>
          <input
            id="password-check"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호 확인"
            required
          />
        </div>
        <div>
          <button type="submit">가입하기</button>
        </div>
      </StSignForm>
      <StGoToBackBtn onClick={() => toggleComponent('email')}>
        <FaArrowLeft />
        뒤로
      </StGoToBackBtn>
    </>
  );
}
