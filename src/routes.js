import React from 'react';

import Login from './views/Auth/Login';

export const sidebar = [
  {
    path: '/dasbor',
    name: 'Dasbor',
    icon: 'fas fa-fire',
    component: () => <h1>Dasbor</h1>,
    layout: '/admin',
    isActive: true
  },
  {
    path: '/login',
    name: 'Login',
    icon: '',
    component: () => <Login />,
    layout: '/auth',
    isActive: false
  },
];