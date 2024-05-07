import React, { FC } from 'react';

import useToggleHook
    from "../hooks/useToogleHook";
import styles
    from "../modules/Toggle.module.css";
const ToggleComponent: FC = () => {

    const initialValue:number = 0;
    const [value, toggle] = useToggleHook(initialValue);
    const toggleCallback = () => {
        toggle();
    };
    return (
        <div className={styles.toggle}>
            <h2>{value}</h2>
            <button onClick={toggleCallback}>Toggle</button>
        </div>
    );

};
export default ToggleComponent;
