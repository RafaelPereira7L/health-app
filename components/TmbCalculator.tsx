import type { NextPage } from 'next';
import React from 'react';

const TMB: NextPage = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl text-center">CALCULAR TMB</h1>
      <div className="w-full h-full flex align-middle justify-center mt-10">
        <form className="flex-col">
          <div className="mb-4">
            <input
              type="number"
              id="idade"
              className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
              placeholder="Idade"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              id="peso"
              className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
              placeholder="Peso em KG"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              id="altura"
              className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
              placeholder="Altura em CM"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TMB;
