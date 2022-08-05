import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const TMB: NextPage = () => {
  const [genre, setGenre] = useState('');
  const [age, setAge] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [tmb, setTmb] = useState<number>();
  const [success, setSuccess] = useState<boolean>(false);

  const handleCalculate = () => {
    if (
      typeof age === 'number' &&
      typeof weight === 'number' &&
      typeof height === 'number' &&
      height > 0 &&
      weight > 0 &&
      age > 0 &&
      genre !== ''
    ) {
      if (genre === 'male') {
        const result = Math.round(
          66.5 + 13.75 * weight + 5.003 * height * 100 - 6.775 * age,
        );
        setSuccess(true);
        setTmb(result);
      } else if (genre === 'female') {
        setSuccess(true);
        const result = Math.round(
          655.1 + 9.563 * weight + 1.85 * height * 100 - 4.676 * age,
        );
        setTmb(result);
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
    <div className="mb-20">
      <div data-aos="zoom-in" data-aos-duration="1500" id="tmb">
        <p className="text-justify font-medium mt-10 mx-4 lg:mx-auto">
          A energia que nosso corpo utiliza para manter as funções fisiológicas,
          durante o repouso físico e mental, mínima para manter a vida é o que
          chamamos de TMB. Vários aspectos podem mudar essa taxa: idade, existe
          a tendência da taxa decair ao longo dos anos, a diferença entre a
          primeira a nona década de vida é em torno de 33%; composição corporal,
          pessoas com mais peso tendem a gastar mais energia, e se esse peso for
          de massa livre de gordura (MLG), tender gastar ainda mais; sexo,
          homens possuem maior TMB que mulheres.
        </p>
        <p
          className="text-center font-medium text-violet-600 cursor-pointer"
          onClick={() => {
            Swal.fire({
              title: 'OBSERVAÇÕES',
              text: '  Outras questões que também afetam são aspectos neurohormonais, distúrbios como tireoidopatias, estresse, agitação emocional, fase do ciclo menstrual (a TMB é maior durante a fase lútea), gestação, condições sistêmicas como febre, sepse, uso de substâncias como cafeína, nicotina ou álcool também afetam a TMB.',
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
        <h1 className="text-2xl text-center">CALCULAR TAXA METABOLICA BASAL</h1>
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
                step="1"
                min="1"
                id="idade"
                className="bg-white border border-violet-600 rounded-lg p-2 outline-none focus:ring focus:ring-violet-400 ease-in-out duration-150"
                placeholder="Idade"
                value={age ? age : ''}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
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
              Sua Taxa metabólica basal é:{' '}
              <strong className="text-violet-500">
                {tmb ? tmb : ''} kcal/dia
              </strong>
            </h2>

            <h2 className="text-lg font-medium text-center mb-2">
              Para perder peso você precisa consumir aproximadamente:{' '}
              <strong className="text-violet-500">
                {tmb ? tmb - 450 : ''} kcal/dia
              </strong>
            </h2>

            <h2 className="text-lg font-medium text-center">
              Para ganhar peso você precisa consumir aproximadamente:{' '}
              <strong className="text-violet-500">
                {tmb ? tmb + 450 : ''} kcal/dia
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMB;
