import React, { useEffect } from 'react';
import { useLoggedIn } from 'hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { loginState } = useLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      window.alert('로그인이 필요합니다.');

      if (location.pathname.includes('/mypage')) {
        return navigate('/');
      }

      if (location.pathname.includes('/boards')) {
        return navigate('/boards');
      }

      navigate(-1);
    }
  }, [loginState, navigate, location]);

  return <>{loginState && children}</>;
}
