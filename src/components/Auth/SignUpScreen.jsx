import React, { useCallback, useState } from 'react';
import { StButton, StError, StGoToBackBtn, StSignForm } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useInput } from 'hooks/useInput';
import { emailPasswordSignup } from 'config/firebase';

export default function SignUpScreen({ toggleComponent }) {
  const nickname = useInput('');
  const email = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const { value: passwordCheck, onChange: onChangePasswordCheck } =
    useInput('');

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mismatch, setMismatch] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mismatch || !email.value || !email.value) return;

    try {
      const formData = {
        // nickname: nickname.value,
        email: email.value,
        password,
      };
      emailPasswordSignup(formData);
    } catch (e) {
      console.log(e);
      setError(e);
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
            disabled={mismatch || !email.value || !email.value}
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
