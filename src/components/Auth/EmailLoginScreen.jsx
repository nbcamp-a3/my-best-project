import React, { useEffect, useRef, useState } from 'react';
import {
  StSignForm,
  StGoToBackBtn,
  StGoToSignUpBtn,
  StButton,
  StError,
  StInputBox,
  StSubmitButtonBox,
} from './styles';
import { FaArrowLeft } from 'react-icons/fa6';
import { useInput } from 'hooks/useInput';
import { auth } from 'config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ERRORS } from 'config/errors';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

export default function EmailLoginScreen({ toggleComponent }) {
  const email = useInput('');
  const password = useInput('');
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        <StInputBox>
          <label htmlFor="email">이메일</label>
          <span>
            <MdOutlineEmail />
          </span>
          <input
            id="email"
            type="text"
            {...email}
            autoComplete="username"
            placeholder="이메일 입력"
            ref={inputRef}
            required
          />
        </StInputBox>
        <StInputBox>
          <label htmlFor="password">비밀번호</label>
          <span>
            <RiLockPasswordLine />
          </span>
          <input
            id="password"
            type="password"
            {...password}
            autoComplete="current-password"
            placeholder="비밀번호 입력 (6자 이상)"
            required
          />
        </StInputBox>
        <StSubmitButtonBox>
          <StButton type="submit">로그인</StButton>
        </StSubmitButtonBox>
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
