import React from 'react';
import type { NextPage } from 'next';
import { MdArrowDropDownCircle } from 'react-icons/md';

const InitialPage: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start h-max lg:h-screen pt-20 lg:pt-48 pb-20 bg-gray-200 rounded-b-2xl shadow-md text-black">
        <h1
          className="text-4xl font-medium text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          SOBRE O GAINZ 🙂
        </h1>
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-2xl text-justify text-violet-400 mx-4 mt-4">
            O GAINZ é um aplicativo focado na saúde e em seu desenvolvimento
            pessoal. 🏃
          </h1>
          <h2 className="text-xl text-center font-bold pt-4">
            🧑‍💻 Neste momento o aplicativo está em desenvolvimento e suas atuais
            funções são:
          </h2>
          <h2 className="text-lg text-center font-medium pt-4">
            👉 Calcular o seu IMC (Índice de massa corporal) e classificação de
            acordo com o valor calculado.
          </h2>
          <h2 className="text-lg text-center font-medium pt-4">
            👉 Calcular a sua TMB (Taxa Metabolica Basal).
          </h2>
          <h2 className="text-lg text-center font-medium pt-4">
            👉 Calcular a sua porcentagem de gordura corporal (BF - Body Fat).
          </h2>
        </div>
        <div
          className="text-violet-400 cursor-pointer mt-10 mb-0 lg:absolute lg:bottom-0"
          onClick={() => window.location.replace('#imc')}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <h1 className="text-3xl text-center">Começar a utilizar</h1>
          <MdArrowDropDownCircle className="text-8xl mx-auto" />
        </div>
      </div>
    </>
  );
};
export default InitialPage;
