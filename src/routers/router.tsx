import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import AuthPage from "../pages/authPage/AuthPage";
import CarsPage from "../pages/carsPage/CarsPage";

export const browserRouter= createBrowserRouter([
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

