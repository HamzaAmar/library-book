import React from 'react';
import { Footer, Header } from '..';
import { LayoutProps } from './layout.type';

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
