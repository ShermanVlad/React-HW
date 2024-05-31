import React from 'react';
import FormComponent from "../../components/FormComponent";
import styles from './AuthPage.module.css'

const AuthPage = () => {
    return (
        <div className={styles.authPage}>
            <FormComponent/>
        </div>
    );
};

export default AuthPage;