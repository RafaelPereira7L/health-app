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
        setClassification('Abaixo do peso 🤨');
      } else if (imc >= 18.5 && imc < 24.9) {
        setClassification('Peso ideal 😀');
      } else if (imc >= 25 && imc < 29.9) {
        setClassification('Sobrepeso 😐');
      } else if (imc >= 30 && imc < 34.9) {
        setClassification('Obesidade grau I 😟');
      } else if (imc >= 35 && imc < 39.9) {
        setClassification('Obesidade grau II 😬');
      } else if (imc >= 40) {
        setClassification('Obesidade grau III 😬');
      }
    }
  }, [success, imc]);

  return (
    <div className="mt-20" id="imc">
      <div data-aos="zoom-in" data-aos-duration="1500" className="mt-20">
        <p className="text-justify font-medium mt-10 mx-4 lg:mx-auto">
          O índice de massa corporal (IMC) é uma medida internacional usada para
          calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata
          Lambert Quételet no fim do século XIX, trata-se de um método fácil e
          rápido para a avaliação do nível de gordura de cada pessoa, sendo, por
          isso, um preditor internacional de obesidade adotado pela Organização
          Mundial da Saúde (OMS).
        </p>
        <p
          className="text-center font-medium text-violet-600 cursor-pointer"
          onClick={() => {
            Swal.fire({
              title: 'OBSERVAÇÕES',
              text: 'O IMC, no entanto, apresenta algumas limitações e, portanto, não deve ser usado como único parâmetro para determinar sobrepeso. Por considerar apenas o peso do indivíduo, o IMC não permite diferenciar o que é músculo (massa magra) do que realmente é gordura. Por esse motivo, podem ser obtidos resultados errôneos que não condizem com a real composição corporal de cada indivíduo. Assim sendo, torna-se essencial a realização da quantificação da gordura corpórea antes da confirmação do diagnóstico e também a realização de medições da circunferência abdominal e de taxas de colesterol. É importante frisar que o IMC é realizado apenas em adultos. Em crianças, a análise da obesidade e do baixo peso é feita observando-se o peso e comparando-o com a idade e a altura.',
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
        <h1 className="text-2xl text-center">RESULTADO ⤵️</h1>
        <div className="h-full flex align-middle items-center justify-center mt-5">
          <div className="flex flex-col align-middle items-center justify-center">
            <h2 className="text-lg font-medium">
              Seu IMC é:{' '}
              <strong className="text-violet-500">{imc?.toFixed(2)}</strong>
            </h2>
            <h2 className="text-lg font-medium">
              Classificação:{' '}
              <strong className="text-violet-500">{classification}</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMC;
