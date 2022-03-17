import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import LoggedUserContext from '../components/context/LoggedUserContext';
import { Layout } from '../components/Layout';
import '../globalStyle.css';
import { User } from '../types';

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedUser, setLoggedUser] = useState<User | undefined>();

  const autoLogin = async (token: string) => {
    const request = await fetch('/api/users/getUserByToken', { //pass credentials to the backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const response = await request.json();
    if (request.ok) {
      setLoggedUser(response); //save user to the state
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!loggedUser && token) {
      autoLogin(token);
    }
  }, []);

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoggedUserContext.Provider>
  );
}

export default MyApp;
