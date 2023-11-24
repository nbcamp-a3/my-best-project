import React, { useEffect, useState } from 'react';
import GlobalStyles from 'GlobalStyle';
import Router from 'Router';
import { auth, db, userStateChange } from 'config/firebase';
import { useLoggedIn } from 'hooks/useAuth';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
// import { collection, getDocs } from 'firebase/firestore';

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'boards'));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <Router />}
    </>
  );
}
