import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemple from './pages/Exemple';
import Memory from './pages/Memory';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/exemple', element: <Exemple /> },
  { path: '/memory', element: <Memory /> },
];
export default routes;
