import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StButton,
  StError,
  StGoToBackBtn,
  StInputBox,
  StSignForm,
  StSubmitButtonBox,
} from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useInput } from 'hooks/useInput';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'config/firebase';
import { ERRORS } from 'config/errors';
import { MdOutlineEmail, MdOutlinePermIdentity } from 'react-icons/md';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';

export default function SignUpScreen({ toggleComponent }) {
  const nickname = useInput('');
  const email = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const { value: passwordCheck, onChange: onChangePasswordCheck } =
    useInput('');

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mismatch, setMismatch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (isLoading || mismatch || !nickname.value || !email.value) return;

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password,
      );
      await updateProfile(credentials.user, {
        displayName: nickname.value,
        photoURL: process.env.REACT_APP_DEFAULT_IMG,
      });
    } catch (error) {
      setError(ERRORS[error.code]);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = useCallback(
    (e) => {
      onChangePassword(e);
      setMismatch(e.target.value !== passwordCheck);
    },
    [onChangePassword, passwordCheck],
  );

  const handleChangePasswordCheck = useCallback(
    (e) => {
      onChangePasswordCheck(e);
      setMismatch(e.target.value !== password);
    },
    [onChangePasswordCheck, password],
  );

  return (
    <>
      <header>
        <h2>회원가입</h2>
      </header>
      <StSignForm onSubmit={handleSubmit}>
        <StInputBox>
          <span>
            <MdOutlinePermIdentity />
          </span>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            {...nickname}
            placeholder="닉네임 입력"
            ref={inputRef}
            required
          />
        </StInputBox>
        <StInputBox>
          <span>
            <MdOutlineEmail />
          </span>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="text"
            {...email}
            autoComplete="username"
            placeholder="이메일 입력"
            required
          />
        </StInputBox>
        <StInputBox>
          <span>
            <RiLockPasswordLine />
          </span>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="current-password"
            placeholder="비밀번호 입력 (6자 이상)"
            required
          />
        </StInputBox>
        <StInputBox>
          <span>
            <RiLockPasswordFill />
          </span>
          <label htmlFor="password-check">비밀번호 확인</label>
          <input
            id="password-check"
            name="passwordCheck"
            type="password"
            value={passwordCheck}
            onChange={handleChangePasswordCheck}
            autoComplete="current-password"
            placeholder="비밀번호 확인 (6자 이상)"
            required
          />
        </StInputBox>
        <StSubmitButtonBox>
          <StButton
            type="submit"
            disabled={mismatch || !nickname.value || !email.value || !password}
          >
            가입하기
          </StButton>
        </StSubmitButtonBox>
        {mismatch && <StError>비밀번호가 일치하지 않습니다.</StError>}
        {error && <StError>{error}</StError>}
      </StSignForm>
      <StGoToBackBtn onClick={() => toggleComponent('email')}>
        <FaArrowLeft />
        뒤로
      </StGoToBackBtn>
    </>
  );
}
