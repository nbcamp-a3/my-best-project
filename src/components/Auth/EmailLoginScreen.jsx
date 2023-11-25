import React, { useState } from 'react';
import {
  StSignForm,
  StGoToBackBtn,
  StGoToSignUpBtn,
  StButton,
  StError,
} from './styles';
import { FaArrowLeft } from 'react-icons/fa6';
import { useInput } from 'hooks/useInput';
import { auth } from 'config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ERRORS } from 'config/errors';

export default function EmailLoginScreen({ toggleComponent }) {
  const email = useInput('');
  const password = useInput('');
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (isLoading || !email.value || !password.value) return;

    try {
      await signInWithEmailAndPassword(
        auth,
        email.value.trim(),
        password.value,
      );
    } catch (error) {
      console.log(error.code);
      setError(ERRORS[error.code]);
    } finally {
      setLoading(false);
    }
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
            {...email}
            autoComplete="username"
            placeholder="이메일 입력"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            {...password}
            autoComplete="current-password"
            placeholder="비밀번호 입력 (6자 이상)"
          />
        </div>
        <div>
          <StButton type="submit">로그인</StButton>
        </div>
        {error && <StError>{error}</StError>}
      </StSignForm>
      <div>
        <span>
          아직 가입하지 않았나요?
          <StGoToSignUpBtn
            onClick={() => toggleComponent('signup')}
            type="button"
          >
            회원가입하기
          </StGoToSignUpBtn>
        </span>
      </div>
      <StGoToBackBtn onClick={() => toggleComponent('start')}>
        <FaArrowLeft />
        뒤로
      </StGoToBackBtn>
    </>
  );
}
