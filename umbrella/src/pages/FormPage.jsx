import React from 'react';
import FormSteps from '../components/FormSteps';
import Menu from '../components/Menu';

function FormPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen flex flex-col">
      <Menu />
      <FormSteps />
    </div>
  );
}

export default FormPage;
