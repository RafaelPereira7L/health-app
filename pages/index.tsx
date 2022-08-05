import Aos from 'aos';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import AppHead from '../components/AppHead';
import InitialPage from '../components/InitialPage';
import IMC from '../components/ImcCalculator';
import TMB from '../components/TmbCalculator';
import NavBar from '../components/Navbar';
import 'aos/dist/aos.css';
import BF from '../components/BfCalculator';

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
        <TMB />
        <BF />
      </main>
    </>
  );
};

export default Home;
