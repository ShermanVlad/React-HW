import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import AuthPage from "../pages/authPage/AuthPage";
import CarsPage from "../pages/carsPage/CarsPage";
import RegisterPage from "../pages/registerPage/RegisterPage";

export const browserRouter= createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            errorElement: <ErrorLayout/>,
            children:  [
                {index: true, element: <AuthPage/>},
                {path: 'cars', element: <CarsPage/>},
                {path: 'users', element: <RegisterPage/>}
            ]
        }
    ]
);

