import type { AppProps } from 'next/app';
import { useState } from 'react';
import LoggedUserContext from '../components/context/LoggedUserContext';
import { Layout } from '../components/Layout';
import '../globalStyle.css';
import { User } from '../types';

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedUser, setLoggedUser] = useState<User | undefined>();

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoggedUserContext.Provider>
  );
}

export default MyApp;
