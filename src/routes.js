import React from 'react';

import Login from './views/Auth/Login';
import Register from './views/Auth/Register';

import Dashboard from './views/Admin/Dashboard';
import Profile from './views/Admin/Profile';

/*
  Routes property:
  - path (string)
  - name (string)
  - icon (string)
  - component (JSX|React Node)
  - layout (string)
  - isActive (boolean) *opsional
  - subMenu (array of object) *opsional
  - pageName (string) *opsional
*/

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
    path: '/profil',
    name: 'Profile',
    icon: '',
    component: () => <Profile />,
    layout: '/admin',
    isActive: false
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