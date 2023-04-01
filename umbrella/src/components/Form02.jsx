import React from 'react';

function Form02(props) {
  const { change, student, updateStudent } = props;

  function onSubmit(e) {
    e.preventDefault();
    console.log(student);
    change(3);
  }

  return (
    <div className="border-2 bg-white border-gray-300 rounded-lg h-full w-full sm:h-auto sm:w-80 md:w-96  p-8">
      <div>
        <img
          className="mx-auto h-auto w-auto"
          src="/img/mouratech.png"
          alt="OK"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-preto">
          Dados Pessoais
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              value={student.name}
              onChange={(e) => {
                const newStudent = { ...student, name: e.target.value };
                updateStudent(newStudent);
              }}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
              placeholder="Nome"
            />
          </div>
          <div>
            <input
              value={student.birthday}
              onChange={(e) => {
                const newStudent = { ...student, birthday: e.target.value };
                updateStudent(newStudent);
              }}
              id="birthday"
              name="birthday"
              type="text"
              autoComplete="birthday"
              required
              className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
              placeholder="Data de nascimento"
            />
          </div>
          <div>
            <input
              value={student.email}
              onChange={(e) => {
                const newStudent = { ...student, email: e.target.value };
                updateStudent(newStudent);
              }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              value={student.cellphone}
              onChange={(e) => {
                const newStudent = { ...student, cellphone: e.target.value };
                updateStudent(newStudent);
              }}
              id="cellphone"
              name="cellphone"
              type="text"
              autoComplete="cellphone"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
              placeholder="Celular"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => change(1)}
            className="group relative flex w-24 justify-center rounded-md bg-azulEscuro py-2 px-3 text-sm font-semibold text-white hover:bg-azulClaro/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulClaro cursor-pointer"
          >
            Anterior
          </button>
          <button
            type="submit"
            className="group relative flex w-24 justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white hover:bg-azulEscuro/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulEscuro cursor-pointer"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form02;
