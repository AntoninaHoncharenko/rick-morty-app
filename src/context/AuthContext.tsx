import { useState, useEffect } from 'react';
import { useContext, createContext } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app, provider } from '../firebase';

interface IContext {
  logIn: () => void;
  logOut: () => void;
  user: string;
}
interface IProps {
  children: JSX.Element;
}

const defaultValue: IContext = {
  logIn: () => {},
  logOut: () => {},
  user: '',
};

const AuthContext = createContext<IContext>(defaultValue);

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '');
  const auth = getAuth(app);

  const logIn = () => {
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        return;
      }
      setUser(user ? user.displayName || '' : '');
      localStorage.setItem('user', user ? user.displayName || '' : '');
    });
    return () => unsubscribe();
  }, [auth]);

  const logOut = () => {
    localStorage.setItem('user', '');
    setUser('');
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ logIn, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
