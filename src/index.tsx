
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import ErrorLayout from "./layouts/ErrorLayout";
import MainLayout from "./layouts/MainLayout";
import CarsPage from "./pages/carsPage/CarsPage";
import AuthPage from "./pages/authPage/AuthPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browserRouter=createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:  [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>},
        ]
    }
    ]
);
 root.render(
     <RouterProvider router={browserRouter}/>
 )