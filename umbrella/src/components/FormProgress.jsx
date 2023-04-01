/* eslint-disable max-len */
import React, { Fragment } from 'react';

function FormProgress(props) {
  const { className = '', step = 1, steps = ['Matrícula', 'Dados Pessoais', 'Curso', 'Confirmação'] } = props;

  const stepsNumbers = steps.map((currentValue, currentIndex) => {
    const bg = (step > currentIndex) ? 'bg-green-400/50' : 'bg-white';
    if (currentIndex === 0) {
      return <div key={currentValue} className={`flex items-center justify-center w-10 h-10 rounded-full text-3xl ${bg}`}>1</div>;
    }
    const line = <div className={`flex items-center justify-center w-10 h-2 text-3xl ${bg}`}>&nbsp;</div>;
    const number = <div className={`flex items-center justify-center w-10 h-10 rounded-full text-3xl ${bg}`}>{currentIndex + 1}</div>;
    return (
      <Fragment key={currentValue}>
        {line}
        {number}
      </Fragment>
    );
  });

  const stepsTexts = steps.map((currentValue, currentIndex) => {
    if (currentIndex === 0) {
      return <div key={currentValue} className="flex items-center justify-center text-xs w-10">{currentValue}</div>;
    }
    return (
      <Fragment key={currentValue}>
        <div className="flex items-center justify-center text-xs w-10">&nbsp;</div>
        <div className="flex items-center justify-center text-xs w-10">{currentValue}</div>
      </Fragment>
    );
  });

  return (
    <div className={`${className} flex flex-col`}>
      <div className="flex flex-row items-center justify-center text-center">
        { stepsNumbers }
      </div>
      <div className="flex flex-row items-start justify-center my-2 text-center">
        {stepsTexts}
      </div>
    </div>
  );
}

export default FormProgress;
