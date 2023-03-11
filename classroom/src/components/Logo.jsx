import React from 'react';

function Logo(props) {
  const { phrase } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="pb-5"
        src="/img/logo.png"
        alt="logo moura"

      />
      <h1 className="text-3xl text-blue-900 font-bold">{phrase}</h1>
    </div>
  );
}

export default Logo;
