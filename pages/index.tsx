import Aos from 'aos';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import AppHead from '../components/AppHead';
import IMC from '../components/ImcCalculator';
import InitialPage from '../components/InitialPage';
import NavBar from '../components/Navbar';
import 'aos/dist/aos.css';

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <AppHead />
      <NavBar />
      <InitialPage />
      <main className="max-w-lg m-auto text-black">
        <IMC />
      </main>
    </>
  );
};

export default Home;
