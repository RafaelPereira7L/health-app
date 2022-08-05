import React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-violet-600 shadow-md transition-all ease-in-out duration-150">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-6 md:py-6 md:block">
            <div className="flex flex-row align-middle items-end gap-2 select-none pointer-events-none">
              <Image src="/favicon.png" width={50} height={50} alt="Gainz" />
              <h1 className="text-3xl font-bold text-white">GAINZ</h1>
            </div>

            <div className="md:hidden">
              <button
                className="p-1 text-white rounded-md outline-none hover:bg-white focus:ring-purple-600 focus:ring-2 focus:outline-none ease-in-out duration-150"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <MdClose className="text-black text-3xl" />
                ) : (
                  <MdMenu className="text-black text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-medium p-2 rounded-lg hover:bg-violet-700 hover:shadow-lg hover:scale-105 ease-in-out duration-150 ">
                <a href="#imc">Calcular IMC</a>
              </li>
              <li className="text-white font-medium p-2 rounded-lg hover:bg-violet-700 hover:shadow-lg hover:scale-105 ease-in-out duration-150 ">
                <a href="#tmb">Calcular TMB</a>
              </li>
              <li className="text-white font-medium p-2 rounded-lg hover:bg-violet-700 hover:shadow-lg hover:scale-105 ease-in-out duration-150 ">
                <a href="#bf">Calcular BF</a>
              </li>
              <li className="text-white font-medium p-2 rounded-lg hover:bg-violet-700 hover:shadow-lg hover:scale-105 ease-in-out duration-150 ">
                <a
                  target="_blank"
                  href="https://www.rafael-dev.tech/"
                  rel="noreferrer"
                >
                  Criador
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
