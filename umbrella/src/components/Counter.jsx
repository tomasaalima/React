import React, { useState } from 'react';

function Counter(props) {
  const { setLimit } = props;
  const { getLimit } = props;
  const { getCalc } = props;
  const { text } = props;
  const [count, setCount] = useState(0);
  return (
    <div
      className="flex flex-col justify-center items-center"
    >
      <button
        className="bg-green-600 w-14 text-white font-extrabold pl-2 pr-2 rounded-t-md"
        type="button"
        onClick={() => {
          if (count < getLimit() && getCalc() > 0) {
            setCount(count + 1);
            setLimit(1);
          }
        }}
      >
        +
      </button>
      <h1
        className="bg-gray-700 w-14 text-center p-5 text-white "
      >
        {count}
      </h1>

      <button
        className="bg-red-600 w-14 text-white font-extrabold pl-2 pr-2 rounded-b-md"
        type="button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
            setLimit(-1);
          }
        }}
      >
        -
      </button>
      <h2
        className="pt-5"
      >
        { text }
      </h2>
    </div>
  );
}

export default Counter;
