import React, { useEffect, useState } from 'react';

function Card(props) {
  const { setPontuation } = props;
  const { pontuation } = props;
  const { setCombination } = props;
  const { combination } = props;
  const { img } = props;
  const [flipped, setFlipped] = useState(-1);

  useEffect(() => {
    if ([...combination].length === 2) {
      if (combination[0] === combination[1]) {
        setPontuation(pontuation + 100);
      } else if (pontuation > 0) {
        setPontuation(pontuation - 10);
      }
      setCombination([...Array(0)]);
    }
  }, [combination]);

  const chain = () => {
    let newClass = 'border-black';

    if ([...combination].length === 2) {
      if (combination[0] === img && combination[1] === img && flipped === 1) {
        newClass = 'border-green-500';
      } else if (combination[0] === img && combination[1] !== img && flipped === 1) {
        setTimeout(() => { setFlipped(-1); }, 1000);
      } else if (combination[0] !== img && combination[1] === img && flipped === 1) {
        setTimeout(() => { setFlipped(-1); }, 1000);
      }
    }

    return newClass;
  };

  const run = () => {
    setFlipped(1);
    setCombination([...combination, img]);
  };

  const set = <img className="w-full h-full" src="/img/memory/background.png" alt="capa" />;
  const face = <img className="w-full h-full" src={`/img/memory/${img}.png`} alt="capa" />;

  return (
    <div
      className={`w-1/12 h-1/4 border-2 ${chain()}`}
    >
      { (flipped === 1) ? (
        <button
          type="button"
          className="w-full h-full"
        >
          { face }
        </button>
      ) : (
        <button
          type="button"
          onClick={() => { run(); }}
          className="w-full h-full"
        >
          { set }
        </button>
      ) }

    </div>
  );
}

export default Card;
