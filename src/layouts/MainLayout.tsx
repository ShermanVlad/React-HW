import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";

const MainLayout:FC = () => {
    return (
        <div style={{margin:0, padding:0}}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout
