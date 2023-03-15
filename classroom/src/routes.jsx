import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemple from './pages/Exemple';
import Tictactoe from './pages/Tictactoe';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/exemple', element: <Exemple /> },
  { path: '/tictactoe', element: <Tictactoe /> },
];
export default routes;
