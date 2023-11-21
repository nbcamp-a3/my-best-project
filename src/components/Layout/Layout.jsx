import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { SMain } from './styles';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <SMain>{children}</SMain>
      <Footer />
    </div>
  );
}
