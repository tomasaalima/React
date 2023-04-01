import React, { useState } from 'react';
import Card from '../components/Card';
import Menu from '../components/Menu';

function Memory() {
  const fill = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const [cards] = useState(fill());
  const [pontuation, setPontuation] = useState(0);
  const [combination, setCombination] = useState([]);

  const cardsGenerate = (qtt) => {
    const collection = [];

    for (let i = 0; i < qtt; i += 1) {
      collection.push(
        <Card
          img={cards[i]}
          pontuation={pontuation}
          setPontuation={setPontuation}
          combination={combination}
          setCombination={setCombination}

        />,
      );
    }
    return collection;
  };

  return (
    <div
      className="flex flex-col h-screen"
    >
      <Menu />
      <div
        className="absolute top-1/2 right-1/2"
      >
        <h1
          className="text-7xl font-serif"
        >
          PONTUATION:&nbsp;
          {pontuation}
        </h1>
      </div>
      <div
        className="flex flex-wrap gap-x-10 grow justify-center items-center"
      >
        { cardsGenerate(18) }
      </div>
    </div>
  );
}

export default Memory;
