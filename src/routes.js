import React from 'react';

import Login from './views/Auth/Login';
import Register from './views/Auth/Register';

import Dashboard from './views/Admin/Dashboard';

export default [
  {
    path: '/dasbor',
    name: 'Dasbor',
    icon: 'fas fa-fire',
    component: () => <Dashboard />,
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
  {
    path: '/register',
    name: 'Register',
    icon: '',
    component: () => <Register />,
    layout: '/auth',
    isActive: false
  },
];