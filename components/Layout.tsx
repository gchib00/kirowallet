import React from 'react';
import Navbar from './Navbar/Navbar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
