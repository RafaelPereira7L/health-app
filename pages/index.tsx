import type { NextPage } from 'next';
import React from 'react';
import AppHead from '../components/AppHead';
import IMC from '../components/ImcCalculator';
import NavBar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />
      <NavBar />
      <main className="max-w-lg m-auto">
        <IMC />
      </main>
    </>
  );
};

export default Home;
