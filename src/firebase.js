import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'authrm-dc58d.firebaseapp.com',
  projectId: 'authrm-dc58d',
  storageBucket: 'authrm-dc58d.appspot.com',
  messagingSenderId: '775713275927',
  appId: '1:775713275927:web:632a5b724a9c82b8cc1c52',
};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
