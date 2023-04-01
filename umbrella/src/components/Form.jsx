import React from 'react';

function Form() {
  return (
    <form className="flex flex-col justify-center items-center ">
      <input
        className="bg-white text-gray-400 w-96 rounded-t-md border border-gray-400 p-2"
        type="text"
        id="mail"
        name="mail"
        placeholder="E-mail"

      />
      <input
        className="bg-white text-gray-400 w-96 rounded-b-md border border-t-0 border-gray-400 p-2"
        type="password"
        id="passwd"
        name="passwd"
        placeholder="Senha"

      />
      <h2
        className="text-blue-800 text-end text-xs rem w-96 pt-3 pb-3"
      >
        Esqueceu sua senha?
      </h2>
      <button
        className="bg-blue-700 p-1 text-white w-96 rounded-md"
        type="button"
      >
        Entrar
      </button>
    </form>
  );
}

export default Form;
