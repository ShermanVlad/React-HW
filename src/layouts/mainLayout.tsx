import React
    from 'react';
import {
    Outlet
} from "react-router-dom";
import HeaderComponent
    from "../components/headerComponent/headerComponent";
import FooterComponent
    from "../components/footerComponent/footerComponent";

export const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;