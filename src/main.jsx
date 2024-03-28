
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Roots/Home/Home';
import ListedBooks from './Components/Roots/ListedBooks/ListedBooks';
import PagesRead from './Components/PagesRead/PagesRead';

import Details from './Components/Details/Details';
import { Toaster } from 'react-hot-toast';











const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      { 
      path: '/listed',
      element:<ListedBooks></ListedBooks>

      },
    
      {
        path:'/pages',
       
        element:<PagesRead></PagesRead>

      },
      {
       path:'/:bookId',
       element:<Details></Details>,
       loader: ()=> fetch('./Books.json')
      

      },
      

     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Toaster></Toaster>
   <RouterProvider router={router} />
  </React.StrictMode>,
  
)
