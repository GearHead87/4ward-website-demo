import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { ReactLenis, useLenis } from 'lenis/react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReactLenis root />
      <div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <main className="container mx-auto mt-10 flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
