import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header/headerComponent";
import FooterComponent from "../components/footer/footerComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default MainLayout;