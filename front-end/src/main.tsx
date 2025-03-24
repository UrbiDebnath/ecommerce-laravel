import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Main from './layout/Main.js';
import Login from './Pages/Login.js';
import Registration from './Pages/Registration.js';
import Privacy from './Pages/Privacy.js';
import Home from './Pages/Home/Home.js';
import ProductByCategory from './Pages/ProDuctByCategory/ProductByCategory.js';
import ProductByDetails from './Pages/ProductByDetails/ProductByDetails.js';
import HelpSupport from './Pages/HelpSupport.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Registration></Registration>
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>
      },
      {
        path:'/productByCategory',
        element: <ProductByCategory></ProductByCategory>
      },
      {
        path:'/productDetails',
        element: <ProductByDetails></ProductByDetails>
      },
      {
        path:'/helpSupport',
        element: <HelpSupport></HelpSupport>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
