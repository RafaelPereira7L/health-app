import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const BF: NextPage = () => {
  const [genre, setGenre] = useState('');
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [neck, setNeck] = useState<number>();
  const [waist, setWaist] = useState<number>();
  const [hip, setHip] = useState<number>();
  const [bf, setBf] = useState<number>();
  const [success, setSuccess] = useState<boolean>(false);

  const handleCalculate = () => {
    if (
      typeof weight === 'number' &&
      typeof height === 'number' &&
      typeof neck === 'number' &&
      typeof waist === 'number' &&
      height > 0 &&
      weight > 0 &&
      genre !== '' &&
      neck > 0 &&
      waist > 0
    ) {
      if (genre === 'male') {
        const result =
          495 /
            (1.0324 -
              0.19077 * Math.log10(waist - neck) +
              0.15456 * Math.log10(height * 100)) -
          450;
        setSuccess(true);
        setBf(result);
        if (result < 0) {
          toast.error('Revise as medidas inseridas!', {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else if (genre === 'female' && typeof hip === 'number' && hip > 0) {
        const result =
          495 /
            (1.29579 -
              0.35004 * Math.log10(waist + hip - neck) +
              0.221 * Math.log10(height * 100)) -
          450;
        setSuccess(true);
        setBf(result);
        if (result < 0) {
          toast.error('Revise as medidas inseridas!', {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } else {
      setSuccess(false);
      toast.error('Preencha os dados corretamente!', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    if (height != undefined && height > 100) {
      setHeight(height / 100);
    }
  }, [height]);

  return (
    <div className="justify-center align-middle mt-20">
      <div data-aos="zoom-in" data-aos-duration="1500" id="bf">
        <p className="text-justify font-medium mt-10 mx-4 lg:mx-auto">
          A quantidade de gordura corporal ideal no homem pode variar entre 16 e
          20% e na mulher entre 20 e 24%, porém estes valores normalmente
          aumentam com a idade e, na maioria dos casos é superior na mulher.
          Além disso, um indivíduo que faz atividade física regularmente tem
          menos gordura corporal do que um que é sedentário.
        </p>
        <p
          className="text-center font-medium text-violet-600 cursor-pointer"
          onClick={() => {
            Swal.fire({
              title: 'OBSERVAÇÕES',
              text: 'Note que os resultados desse cálculo são apenas estimados, uma vez que ele é aplicado para o máximo de pessoas possíveis. Para ter um resultado mais preciso, faça a análise utilizando instrumentos como a balança de bioimpedância. Além disso, é importante que você sempre procure um profissional desta área.',
              icon: 'info',
              confirmButtonText: 'OK 👍',
            });
          }}
        >
          OBSERVAÇÕES
        </p>
      </div>
      <div
        className="mt-5 p-10 rounded-lg bg-gray-200 shadow-lg"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="text-2xl text-center">CALCULAR BODY FAT</h1>
        <div className="h-full flex align-middle items-center justify-center mt-5">
          <div className="flex flex-col align-middle items-center justify-center">
            <div className="flex justify-center mb-2">
              <div className="form-check form-check-inline mr-4">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-violet-500 checked:border-violet-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value={genre ? genre : ''}
                  onChange={() => setGenre('male')}
                />
                <label
                  className="form-check-label inline-block text-black font-medium"
                  htmlFor="inlineRadio10"
                >
                  Homem
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-violet-500 checked:border-violet-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                  onChange={() => setGenre('female')}
                />
                <label
                  className="form-check-label inline-block text-black font-medium"
                  htmlFor="inlineRadio20"
                >
                  Mulher
                </label>
              </div>
            </div>

            <div className="mb-4">
              <input
                type="number"
                step="0.1"
                min="10"
                id="peso"
                className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
                placeholder="Peso em KG - Ex: 80"
                value={weight ? weight : ''}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                min="1"
                step="0.01"
                id="altura"
                className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
                placeholder="Altura - Ex: 1,70/170"
                value={height ? height : ''}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                min="1"
                step="0.01"
                id="pescoço"
                className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
                placeholder="Medida do pescoço"
                value={neck ? neck : ''}
                onChange={(e) => setNeck(parseFloat(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                min="1"
                step="0.01"
                id="cintura"
                className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
                placeholder="Medida da cintura"
                value={waist ? waist : ''}
                onChange={(e) => setWaist(parseFloat(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                step="1"
                min="1"
                id="quadril"
                className={`bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150 ${
                  genre === 'female' ? 'block' : 'hidden'
                }`}
                placeholder="Quadril"
                value={hip ? hip : ''}
                onChange={(e) => setHip(parseInt(e.target.value))}
              />
            </div>
            <button
              onClick={() => handleCalculate()}
              className="bg-violet-500 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 hover:scale-105 ease-in-out duration-150 font-medium text-white"
            >
              Calcular
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-5 p-10 rounded-lg bg-gray-200 shadow-lg ${
          success ? 'block' : 'hidden'
        }`}
      >
        <h1 className="text-2xl text-center">RESULTADO ⤵️</h1>
        <div className="h-full flex align-middle items-center justify-center mt-5">
          <div className="flex flex-col align-middle items-center justify-center">
            <h2 className="text-xl font-medium mb-2">
              Sua BF é:{' '}
              <strong className="text-violet-500">
                {bf ? bf.toFixed(1) : ''}%
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BF;
