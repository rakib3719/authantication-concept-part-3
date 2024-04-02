import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AuthContext from './context/AuthContext';
import PrivateRoute from './route/PrivateRoute';
import Profile from './components/Profile';
import About from './components/About';

const router = createBrowserRouter([{

  path: '/',
  element: <Root></Root>,
  children: [
    {

      path: '/login',
      element: <Login></Login>
    },
    {

      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/profile',
      element: <PrivateRoute>  <Profile></Profile> </PrivateRoute>
    },

    {

      path: '/about',
      element: <PrivateRoute>  <About></About> </PrivateRoute>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthContext>

<RouterProvider router={router} ></RouterProvider>
</AuthContext>
  </React.StrictMode>,
)
