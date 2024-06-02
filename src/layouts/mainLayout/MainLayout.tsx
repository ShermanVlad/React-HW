import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import styles from './MainLayout.module.css'

const MainLayout:FC = () => {
    return (
        <div className={styles.mainLay}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout
