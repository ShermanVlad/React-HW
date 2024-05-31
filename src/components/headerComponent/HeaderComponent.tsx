import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css'

const HeaderComponent: FC = () => {
    return (
        <div className={styles.headerComp}>
            <ul>
                <li><NavLink to={'/'}>auth page</NavLink></li>
                <li><NavLink to={'cars'}>cars page</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;