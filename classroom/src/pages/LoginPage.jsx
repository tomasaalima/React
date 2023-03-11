import React from 'react';
import Form from '../components/Form';
import Logo from '../components/Logo';

function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <Logo phrase="Entre com sua conta" />
      <Form />
    </div>
  );
}

export default LoginPage;
