import { createContext } from 'react';

interface AuthModalContextType {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModalContext = createContext<AuthModalContextType>({
  loginModal: false,
  setLoginModal: () => null,
});

export default AuthModalContext;