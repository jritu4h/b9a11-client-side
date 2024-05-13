import React from 'react';
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Provider from './Provider/Provider.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl  mx-auto'>
    <React.StrictMode>
<Provider>
<RouterProvider router={router} />
</Provider>
<ToastContainer></ToastContainer>
  </React.StrictMode>,
  </div>
)
