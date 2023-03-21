import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemple from './pages/Exemple';
import Memory from './pages/Memory';
import FormPage from './pages/FormPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/exemple', element: <Exemple /> },
  { path: '/memory', element: <Memory /> },
  { path: '/forms', element: <FormPage /> },
];
export default routes;
