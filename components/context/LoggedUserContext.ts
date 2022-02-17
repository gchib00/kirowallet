import { createContext } from 'react';
import { User } from '../../types';

interface LoggedUserType {
  loggedUser: User | undefined,
  setLoggedUser: React.Dispatch<React.SetStateAction<User | undefined>>; 
}

const LoggedUserContext = createContext<LoggedUserType>({
  loggedUser: undefined,
  setLoggedUser: () => null,
});

export default LoggedUserContext;