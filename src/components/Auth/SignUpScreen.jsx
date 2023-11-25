import React, { useCallback, useState } from 'react';
import { StButton, StError, StGoToBackBtn, StSignForm } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useInput } from 'hooks/useInput';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'config/firebase';
import { ERRORS } from 'config/errors';

export default function SignUpScreen({ toggleComponent }) {
  const nickname = useInput('');
  const email = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const { value: passwordCheck, onChange: onChangePasswordCheck } =
    useInput('');

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mismatch, setMismatch] = useState(false);

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
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            {...nickname}
            placeholder="닉네임 입력"
            required
          />
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="current-password"
            placeholder="비밀번호 입력"
            required
          />
        </div>
        <div>
          <label htmlFor="password-check">비밀번호 확인</label>
          <input
            id="password-check"
            name="passwordCheck"
            type="password"
            value={passwordCheck}
            onChange={handleChangePasswordCheck}
            autoComplete="current-password"
            placeholder="비밀번호 확인"
            required
          />
        </div>
        <div>
          <StButton
            type="submit"
            disabled={mismatch || !nickname.value || !email.value}
          >
            가입하기
          </StButton>
        </div>
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
