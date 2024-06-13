import React from 'react';
import {Outlet} from "react-router";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;