import React from 'react';
import Form from '../components/Form';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

function LoginPage() {
  return (
    <div
      className="flex flex-col justify-center h-screen"
    >
      <Menu />
      <div className="grow flex flex-col items-center justify-center">
        <Logo phrase="Entre com sua conta" />
        <Form />
      </div>
    </div>
  );
}

export default LoginPage;
