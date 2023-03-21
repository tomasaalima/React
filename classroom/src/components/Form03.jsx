import React from 'react';

function Form03(props) {
  const { change, student, updateStudent } = props;

  function onSubmit(e) {
    e.preventDefault();
    console.log(student);
    change(4);
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
          Instituição / Curso
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              value={student.university}
              onChange={(e) => {
                const newStudent = { ...student, university: e.target.value };
                updateStudent(newStudent);
              }}
              id="university"
              name="university"
              type="text"
              autoComplete="university"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2"
              placeholder="Instituição"
            />
          </div>
          <div>
            <input
              value={student.campus}
              onChange={(e) => {
                const newStudent = { ...student, campus: e.target.value };
                updateStudent(newStudent);
              }}
              id="campus"
              name="campus"
              type="text"
              autoComplete="campus"
              required
              className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2"
              placeholder="Campus / Cidade"
            />
          </div>
          <div>
            <input
              value={student.course}
              onChange={(e) => {
                const newStudent = { ...student, course: e.target.value };
                updateStudent(newStudent);
              }}
              id="course"
              name="course"
              type="text"
              autoComplete="course"
              required
              className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2"
              placeholder="Curso"
            />
          </div>
          <div>
            <input
              value={student.currentPeriod}
              onChange={(e) => {
                const newStudent = { ...student, currentPeriod: e.target.value };
                updateStudent(newStudent);
              }}
              id="currentPeriod"
              name="currentPeriod"
              type="text"
              autoComplete="currentPeriod"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2"
              placeholder="Período"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => change(2)}
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

export default Form03;
