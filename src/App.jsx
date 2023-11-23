import React, { useEffect, useState } from 'react';
import GlobalStyles from 'GlobalStyle';
import Router from 'Router';
import { auth, userStateChange } from 'config/firebase';
import { useLoggedIn } from 'hooks/useAuth';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const { setLoginState } = useLoggedIn();

  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    userStateChange((user) => setLoginState(user));
  }, [setLoginState]);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <Router />}
    </>
  );
}
