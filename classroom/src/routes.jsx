import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
];
export default routes;
