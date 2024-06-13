import React from 'react';
import styles from './RegisterPage.module.css'
import RegisterFormComponent from "../../components/RegisterFormComponent";
const RegisterPage = () => {
    return (
        <div className={styles.regPage}>
            <RegisterFormComponent/>
        </div>
    );
};

export default RegisterPage;