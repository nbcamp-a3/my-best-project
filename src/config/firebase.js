import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

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
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();
const provider = new GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const emailPasswordSignup = async (formData) => {
  const { email, password } = formData;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('signup successful.');
      const user = userCredential.user;
      return user;
    })
    .catch(console.error);
};

export const emailPasswordLogin = async (formData) => {
  const { email, password } = formData;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('login successful.');
      const user = userCredential.user;
      return user;
    })
    .catch(console.error);
};

export const githubLogin = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      console.log('login successful.');
      const user = result.user;
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
