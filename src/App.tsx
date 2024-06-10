import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, incByValue, increment, reset} from "./redux/slices/slice1";

const App = () => {

    const {value} = useAppSelector((state) => state.slice1);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={()=>{
                dispatch(increment())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>-1</button>
            <button  onClick={()=>{
                dispatch(incByValue(100))
            }}>+some</button>
            <button onClick={()=>{
                dispatch(reset())
            }}>reset</button>
        </div>
    );
};

export default App;