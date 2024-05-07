import React
    , {
    FC
} from 'react';
import usePreviousHook
    from "../hooks/usePreviousHook";
import styles from "../modules/Previous.module.css"
const PreviousComponent:FC= () => {

    const initialValue:number=Math.floor(Math.random() * 10) + 1;
    const [value, prevValue, newGenerator] = usePreviousHook(initialValue);
    const newGeneratorCallback=()=>{
        newGenerator()
    }

    return (
        <div className={styles.previous}>
            <h2>Previous value: {prevValue}</h2>
            <h2>New value: {value}</h2>
            <button onClick={newGeneratorCallback}>Generate</button>
        </div>
    );
};

export default PreviousComponent;