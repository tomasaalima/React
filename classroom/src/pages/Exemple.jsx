import React, { useState } from 'react';
import Counter from '../components/Counter';
import Menu from '../components/Menu';

function Exemple() {
  const limit = 30;
  const [calculator, setTCalculator] = useState(limit);

  const setLimit = (value) => { setTCalculator(calculator - value); };
  const getLimit = () => limit;
  const getCalc = () => calculator;

  return (
    <div
      className="flex flex-col justify-center h-screen"
    >
      <Menu />
      <h1
        className="absolute top-1/3 right-1/3 text-5xl font-extrabold text-gray-800"
      >
        Pontos Disponíveis:&nbsp;
        {getCalc()}
      </h1>
      <div
        className="flex flex-row items-center justify-center gap-5 grow"
      >
        <Counter text="HP" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="MP" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="STR" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="DEF" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="SPD" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="CRT" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="RES" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
        <Counter text="EVS" setLimit={setLimit} getLimit={getLimit} getCalc={getCalc}> </Counter>
      </div>
    </div>
  );
}

export default Exemple;
