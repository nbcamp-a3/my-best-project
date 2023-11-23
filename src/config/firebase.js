import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();
const provider = new GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const login = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch(console.error);
};

export const logout = async () => {
  return signOut(auth)
    .then(() => {
      console.log('Sign-out successful.');
      return null;
    })
    .catch(console.error);
};

export const userStateChange = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
