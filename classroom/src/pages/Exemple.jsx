import React from 'react';
import Counter from '../components/Counter';
import Menu from '../components/Menu';

function Exemple() {
  return (
    <div
      className="flex flex-col justify-center h-screen"
    >
      <Menu />
      <div
        className="flex flex-row items-center justify-center gap-5 grow"
      >
        <Counter text="STR"> </Counter>
        <Counter text="DEF"> </Counter>
        <Counter text="SPD"> </Counter>
        <Counter text="WSD"> </Counter>
        <Counter text="HP"> </Counter>
      </div>
    </div>
  );
}

export default Exemple;
