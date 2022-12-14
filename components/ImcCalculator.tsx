import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const IMC: NextPage = () => {
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [imc, setImc] = useState<number>();
  const [classification, setClassification] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleCalculate = () => {
    if (
      typeof weight === 'number' &&
      typeof height === 'number' &&
      height > 0 &&
      weight > 0
    ) {
      if (weight >= 10 && height <= 3) {
        const result = weight / Math.pow(height, 2);
        setSuccess(true);
        setImc(result);
      } else if (weight >= 10 && height > 3) {
        const result = weight / Math.pow(height / 100, 2);
        setSuccess(true);
        setImc(result);
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
    if (success && imc) {
      if (imc < 18.5) {
        setClassification('Abaixo do peso ๐คจ');
      } else if (imc >= 18.5 && imc < 24.9) {
        setClassification('Peso ideal ๐');
      } else if (imc >= 25 && imc < 29.9) {
        setClassification('Sobrepeso ๐');
      } else if (imc >= 30 && imc < 34.9) {
        setClassification('Obesidade grau I ๐');
      } else if (imc >= 35 && imc < 39.9) {
        setClassification('Obesidade grau II ๐ฌ');
      } else if (imc >= 40) {
        setClassification('Obesidade grau III ๐ฌ');
      }
    }
  }, [success, imc]);

  return (
    <div className="mt-20" id="imc">
      <div data-aos="zoom-in" data-aos-duration="1500" className="mt-20">
        <p className="text-justify font-medium mt-10 mx-4 lg:mx-auto">
          O รญndice de massa corporal (IMC) รฉ uma medida internacional usada para
          calcular se uma pessoa estรก no peso ideal. Desenvolvido pelo polรญmata
          Lambert Quรฉtelet no fim do sรฉculo XIX, trata-se de um mรฉtodo fรกcil e
          rรกpido para a avaliaรงรฃo do nรญvel de gordura de cada pessoa, sendo, por
          isso, um preditor internacional de obesidade adotado pela Organizaรงรฃo
          Mundial da Saรบde (OMS).
        </p>
        <p
          className="text-center font-medium text-violet-600 cursor-pointer"
          onClick={() => {
            Swal.fire({
              title: 'OBSERVAรรES',
              text: 'O IMC, no entanto, apresenta algumas limitaรงรตes e, portanto, nรฃo deve ser usado como รบnico parรขmetro para determinar sobrepeso. Por considerar apenas o peso do indivรญduo, o IMC nรฃo permite diferenciar o que รฉ mรบsculo (massa magra) do que realmente รฉ gordura. Por esse motivo, podem ser obtidos resultados errรดneos que nรฃo condizem com a real composiรงรฃo corporal de cada indivรญduo. Assim sendo, torna-se essencial a realizaรงรฃo da quantificaรงรฃo da gordura corpรณrea antes da confirmaรงรฃo do diagnรณstico e tambรฉm a realizaรงรฃo de mediรงรตes da circunferรชncia abdominal e de taxas de colesterol. ร importante frisar que o IMC รฉ realizado apenas em adultos. Em crianรงas, a anรกlise da obesidade e do baixo peso รฉ feita observando-se o peso e comparando-o com a idade e a altura.',
              icon: 'info',
              confirmButtonText: 'OK ๐',
            });
          }}
        >
          OBSERVAรรES
        </p>
      </div>
      <div
        className="mt-5 p-10 rounded-lg bg-gray-200 shadow-lg"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="text-2xl text-center">CALCULAR IMC</h1>
        <div className="h-full flex align-middle items-center justify-center mt-5">
          <div className="flex flex-col align-middle items-center justify-center">
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
        <h1 className="text-2xl text-center">RESULTADO โคต๏ธ</h1>
        <div className="h-full flex align-middle items-center justify-center mt-5">
          <div className="flex flex-col align-middle items-center justify-center">
            <h2 className="text-lg font-medium">
              Seu IMC รฉ:{' '}
              <strong className="text-violet-500">{imc?.toFixed(2)}</strong>
            </h2>
            <h2 className="text-lg font-medium">
              Classificaรงรฃo:{' '}
              <strong className="text-violet-500">{classification}</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMC;
