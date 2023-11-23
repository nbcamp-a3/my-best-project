import { useLoggedIn } from 'hooks/useAuth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { loginState } = useLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      window.alert('로그인이 필요합니다.');
      navigate(-1);
    }
  }, [loginState, navigate]);

  return <>{children}</>;
}
